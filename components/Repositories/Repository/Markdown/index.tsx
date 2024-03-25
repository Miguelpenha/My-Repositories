import { FC } from 'react'
import { Container } from './style'
import CopyMarkdown from './CopyMarkdown'

interface IProps {
    markdown: string
}

const Markdown: FC<IProps> = ({ markdown }) => {
    return (
        <Container
            children={markdown}
            components={{
                pre: props => <CopyMarkdown {...props}/>
            }}
        />
    )
}

export default Markdown