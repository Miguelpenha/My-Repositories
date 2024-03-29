import { Dispatch, SetStateAction, FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Title, InputFind } from './style'

interface IProps {
    find: string
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<IProps> = ({ find, setFind }) => {
    useAnimation()

    return (
        <Container id="header">
            <Title>Meus Repositórios</Title>
            <InputFind className="find" type="search" placeholder="Pesquisar..." value={find} onChange={ev => setFind(ev.target.value)}/>
        </Container>
    )
}

export default Header