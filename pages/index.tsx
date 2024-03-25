import { useState } from 'react'
import api from '../services/apiGithub'
import { IRepository } from '../types'
import Head from 'next/head'
import Header from '../components/Header'
import { Main } from '../styles/pages'
import Repositories from '../components/Repositories'
import HeaderTest from '../components/HeaderTest'

export default function Home() {
    const [find, setFind] = useState('')
    const { data: repositories } = api.get<IRepository[]>(`/users/${process.env.NEXT_PUBLIC_NAME_USER}/repos?per_page=100`)
    
    return (
        <>
            <Head>
                <title>Meus repositórios</title>
            </Head>
            {/* <Header find={find} setFind={setFind}/> */}
            <HeaderTest find={find} setFind={setFind}/>
            <Main>
                <Repositories find={find} repositories={repositories}/>
            </Main>
        </>
    )
}