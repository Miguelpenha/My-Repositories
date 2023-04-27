import { IRepository } from '../../types'
import { FC } from 'react'
import { Container } from './style'
import Repository from '../Repository'
import Loading from '../Loading'

interface IProps {
    find: string
    repositories: IRepository[] | undefined
}

const Repositories: FC<IProps> = ({ repositories, find }) => {
    if (repositories) {
        return (
            <Container>
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
            </Container>
        )
    } else {
        return <Loading/>
    }
}

export default Repositories