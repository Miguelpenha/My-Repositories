import { Dispatch, SetStateAction, FC } from 'react'
import { Container, Title, InputFind } from './style'

interface IProps {
    find: string
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<IProps> = ({ find, setFind }) => {
    return (
        <Container>
            <Title>Meus Repositórios</Title>
            <InputFind type="search" placeholder="Pesquisar..." value={find} onChange={ev => setFind(ev.target.value)}/>
        </Container>
    )
}

export default Header