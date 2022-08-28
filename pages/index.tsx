import { useState } from 'react'
import api from '../api'
import { Irepository } from '../types'
import Head from 'next/head'
import { Header, ContainerCount, ButtonLeftCount, Count, ButtonRightCount, Title, ContainerFind, InputFind, IconFind, Main, Repositories, Footer } from '../styles/pages'
import Loading from '../components/Loading'
import Repository from '../components/Repository'

export default function Home() {
    const [count, setCount] = useState(2)
    const [find, setFind] = useState('')
    const { data: repositories } = api.get<Irepository[]>(`/users/${process.env.NEXT_PUBLIC_NAME_USER}/repos`)
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Meus repositórios</title>
            </Head>
            <Header>
                <ContainerCount>
                    <ButtonLeftCount
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => count >= 2 && setCount(count-1)}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>
                    </ButtonLeftCount>
                    <Count type="number" min="1" value={count} onChange={ev => {
                        const countBruto = Number(ev.target.value)

                        !isNaN(Number(countBruto)) && countBruto >= 1 && setCount(countBruto)
                    }}/>
                    <ButtonRightCount
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setCount(count+1)}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>
                    </ButtonRightCount>
                </ContainerCount>
                <Title>Meus Repositórios</Title>
                <ContainerFind>
                    <InputFind type="search" placeholder="Pesquisar..." value={find} onChange={ev => setFind(ev.target.value)}/>
                    <IconFind xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </IconFind>
                </ContainerFind>
            </Header>
            <Main>
                {repositories ? (
                    <Repositories columns={count}>
                        {repositories.map((repository, index) => {
                            const verificationFindDescription = (
                                repository.description && repository.description.toUpperCase().includes(find.toUpperCase())
                            )
                            
                            let verificationFindLanguage = (
                                repository.language && repository.language.toUpperCase().includes(find.toUpperCase())
                            )

                            if (repository.name.toUpperCase().includes(find.toUpperCase()) || verificationFindDescription || verificationFindLanguage) {
                                return <Repository key={index} repository={repository}/>
                            }
                        })}
                    </Repositories>
                ) : <Loading/>}
            </Main>
            <Footer>
                
            </Footer>
        </>
    )
}