import { IRepository } from '../../types'
import { FC } from 'react'
import api from '../../services/api'
import { Container } from './style'
import Repository from './Repository'
import Loading from '../Loading'

interface IProps {
    find: string
    repositories: IRepository[] | undefined
}

const Repositories: FC<IProps> = ({ repositories, find }) => {
    const { data: thumbnails } = api.get<{ url: string, name: string }[]>('/thumbnails')
    
    if (repositories) {
        return (
            <Container id="repositories">
                {repositories.map((repository, index) => {
                    const verificationFindDescription = (
                        repository.description && repository.description.toUpperCase().includes(find.toUpperCase())
                    )
                    
                    let verificationFindLanguage = (
                        repository.language && repository.language.toUpperCase().includes(find.toUpperCase())
                    )

                    const homePage = repository.homepage ? repository.homepage.includes('https://') ? repository.homepage : `https://${repository.homepage}` : undefined
    
                    if (repository.name.toUpperCase().includes(find.toUpperCase()) || verificationFindDescription || verificationFindLanguage) {
                        const thumbnail = (thumbnails || []).find(thumbnail => thumbnail.name === repository.name)

                        return <Repository thumbnail={thumbnail ? thumbnail.url : thumbnail} homePage={homePage} key={index} repository={repository}/>
                    }
                })}
            </Container>
        )
    } else {
        return <Loading/>
    }
}

export default Repositories