import Head from 'next/head'
import { Header, Title, Main, ContainerCount, ButtonLeftCount, Count, ButtonRightCount, Repositories, Footer } from '../styles/pages'
import api from '../api'
import { Irepository } from '../types'
import Repository from '../components/Repository'
import { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(2)
    const { data: repositories } = api.get<Irepository[]>(`/users/${process.env.NEXT_PUBLIC_NAME_USER}/repos`)

    return (
        <>
            <Head>
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
            </Header>
            <Main>
                <Repositories columns={count}>
                    {repositories && (
                        repositories.map((repository, index) => (
                            <Repository key={index} repository={repository}/>
                        ))
                    )}
                </Repositories>
            </Main>
            <Footer>
                
            </Footer>
        </>
    )
}