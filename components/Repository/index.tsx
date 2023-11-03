import { IRepository } from '../../types'
import { FC } from 'react'
import api from '../../services/apiGithub'
import useMarkdown from './useMarkdown'
import { Container, Title, Description, Languages, ContainerLanguage, Language, LanguageDetail, LoadingLanguage, Options, Option, IconOption, ContainerThumbnail, Thumbnail } from './style'
import blurData from '../../utils/blurData'
import Markdown from '../Markdown'

interface Iprops {
    repository: IRepository
    homePage: string | undefined
    thumbnail: string | undefined
}

const Repository: FC<Iprops> = ({ repository, thumbnail, homePage }) => {
    const { data: languages } = api.get<object>(repository.languages_url)
    const markdown = useMarkdown(thumbnail, repository.name)
    
    return (
        <Container>
            <Title>{repository.name}</Title>
            <Description>{repository.description || ''}</Description>
            <Languages>
                {languages ? Object.keys(languages).map((language, index) => (
                    <ContainerLanguage key={index}>
                        <LanguageDetail/>
                        <Language>{language}</Language>
                    </ContainerLanguage>
                )) : <LoadingLanguage size={14} borderSize={3}/>}
            </Languages>
            <Options>
                <Option href={repository.html_url} target="_blank" title={repository.name}>
                    <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </IconOption>
                </Option>
                {repository.homepage && (
                    <Option href={homePage} target="_blank" title={homePage} rel="nofollow noreferrer">
                        <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </IconOption>
                    </Option>
                )}
            </Options>
            {thumbnail && (
                <ContainerThumbnail>
                    <Thumbnail alt={repository.description} placeholder="blur" blurDataURL={blurData} src={thumbnail} width={1200} height={630}/>
                </ContainerThumbnail>
            )}
            {!thumbnail && markdown && (
                <Markdown markdown={markdown}/>
            )}
        </Container>
    )
}

export default Repository