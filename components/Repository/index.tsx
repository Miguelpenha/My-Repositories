import { FC } from 'react'
import { Irepository } from '../../types'
import api from '../../api'
import { Container, Header, IconNext, ContainerOpenHomePage, IconOpenHomePage, Title, Description, DescriptionIconAlert, Languages, ContainerLanguage, Language, LanguageDetail } from './style'

interface Iprops {
    repository: Irepository
}

const Repository: FC<Iprops> = ({ repository }) => {
    const { data: languages } = api.get<object>(repository.languages_url)
    const homePage = repository.homepage && repository.homepage.includes('https://') ? repository.homepage : `https://${repository.homepage}`
    
    return (
        <Container href={repository.html_url} target="_blank" title={repository.name}>
            <Header>
                <IconNext xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>
                </IconNext>
                {repository.homepage && (
                    <ContainerOpenHomePage href={homePage} target="_blank" title={homePage} rel="nofollow noreferrer">
                        <IconOpenHomePage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </IconOpenHomePage>
                    </ContainerOpenHomePage>
                )}
                <Title>{repository.name}</Title>
                <Description>
                    {repository.description || (
                        <>
                            <DescriptionIconAlert xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            </DescriptionIconAlert>
                            {'Descrição não disponível'}
                        </>
                    )}
                </Description>
                <Languages>
                    {languages && Object.keys(languages).map((language, index) => (
                        <ContainerLanguage key={index}>
                            <LanguageDetail/>
                            <Language>{language}</Language>
                        </ContainerLanguage>
                    ))}
                </Languages>
            </Header>
        </Container>
    )
}

export default Repository