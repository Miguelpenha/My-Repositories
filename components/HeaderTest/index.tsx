import { Dispatch, SetStateAction, FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Balls, Ball, Title, InputFind } from './style'

interface IProps {
    find: string
    setFind: Dispatch<SetStateAction<string>>
}

const HeaderTest: FC<IProps> = ({ find, setFind }) => {
    useAnimation()
    
    return (
        <Container id="header">
            <Title className="title">Meus Repositórios</Title>
            <InputFind className="find" type="search" placeholder="Pesquisar..." value={find} onChange={ev => setFind(ev.target.value)}/>
            <Balls className='balls'>
                <Ball className="first"/>
                <Ball className="second" second/>
            </Balls>
        </Container>
    )
}

export default HeaderTest