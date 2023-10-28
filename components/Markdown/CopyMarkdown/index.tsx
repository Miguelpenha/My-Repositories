import { FC, useState } from 'react'
import useHandleClick from './useHandleClick'
import { Container, Button, Icon, Pre } from './style'

interface IProps {
    node: any
}

const CopyMarkdown: FC<IProps> = ({ node, ...rest }) => {
    const [copied, setCopied] = useState(false)
    const handleClick = useHandleClick(node, setCopied)
    
    return (
        <Container>
            <Button onClick={handleClick}>
                {!copied ? (
                    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </Icon>
                ) : (
                    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </Icon>
                )}
            </Button>
            <Pre {...rest}/>
        </Container>
    )
}

export default CopyMarkdown