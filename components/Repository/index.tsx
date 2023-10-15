import { IRepository } from '../../types'
import { FC } from 'react'
import api from '../../api'
import { Container, Header, Title, Description, Languages, ContainerLanguage, Language, LanguageDetail, LoadingLanguage, Thumbnail, Markdown } from './style'
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

    // href={repository.html_url} target="_blank" title={repository.name}
    
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
                {thumbnail && <Thumbnail src={thumbnail} width={1200} height={630}/>}
                {!thumbnail && markdown && (
                    <Markdown children={markdown}/>
                )}
            </Header>
        </Container>
    )
}

export default Repository