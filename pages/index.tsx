import { useState } from 'react'
import api from '../api'
import { IRepository } from '../types'
import Head from 'next/head'
import { Main, Repositories, Footer } from '../styles/pages'
import Loading from '../components/Loading'
import Repository from '../components/Repository'
import Header from '../components/Header'

export default function Home() {
    const [find, setFind] = useState('')
    const { data: repositories } = api.get<IRepository[]>(`/users/${process.env.NEXT_PUBLIC_NAME_USER}/repos`)
    
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Meus repositórios</title>
            </Head>
            <Header find={find} setFind={setFind}/>
            <Main>
                {repositories ? (
                    <Repositories>
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