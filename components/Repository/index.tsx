import { IRepository } from '../../types'
import { FC } from 'react'
import api from '../../api'
import { Container, Header, ContainerOpenHomePage, IconOpenHomePage, Title, Description, Languages, ContainerLanguage, Language, LanguageDetail, LoadingLanguage } from './style'

interface Iprops {
    repository: IRepository
}

const Repository: FC<Iprops> = ({ repository }) => {
    const { data: languages } = api.get<object>(repository.languages_url)
    const homePage = repository.homepage && repository.homepage.includes('https://') ? repository.homepage : `https://${repository.homepage}`
    
    return (
        <Container href={repository.html_url} target="_blank" title={repository.name} onClick={event => {
            event.stopPropagation()
            event.cancelable = true
        }}>
            <Header>
                {repository.homepage && (
                    <ContainerOpenHomePage href={homePage} target="_blank" title={homePage} rel="nofollow noreferrer">
                        <IconOpenHomePage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </IconOpenHomePage>
                    </ContainerOpenHomePage>
                )}
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
            </Header>
        </Container>
    )
}

export default Repository