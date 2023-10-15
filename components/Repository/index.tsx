import { IRepository } from '../../types'
import { FC } from 'react'
import api from '../../api'
import { Container, Header, Title, Description, Languages, ContainerLanguage, Language, LanguageDetail, LoadingLanguage, Options, Option, IconOption, Thumbnail, Markdown } from './style'
import useThumbnail from './useThumbnaill'
import useMarkdown from './useMarkdown'

interface Iprops {
    repository: IRepository
    homePage: string | undefined
}

const Repository: FC<Iprops> = ({ repository, homePage }) => {
    const { data: languages } = api.get<object>(repository.languages_url)
    const thumbnail = useThumbnail(homePage)
    const markdown = useMarkdown(thumbnail, repository.name)
    
    return (
        <Container>
            <Header>
                <Title>{repository.name}</Title>
                <Description>{repository.description || ''}</Description>
                <Languages>
                    {languages ? Object.keys(languages).map((language, index) => (
                        <ContainerLanguage key={index}>
                            <LanguageDetail/>
                            <Language>{language}</Language>
                        </ContainerLanguage>
                    )) : <LoadingLanguage size={20} borderSize={3}/>}
                </Languages>
                <Options>
                    <Option href={repository.html_url} target="_blank" title={repository.name}>
                        <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
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
                {thumbnail && <Thumbnail src={thumbnail} width={1200} height={630}/>}
                {!thumbnail && markdown && (
                    <Markdown children={markdown}/>
                )}
            </Header>
        </Container>
    )
}

export default Repository