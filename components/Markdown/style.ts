import styled from 'styled-components'
import MarkdownRaw from 'react-markdown'

export const Container = styled(MarkdownRaw)`
    height: 20em;
    padding: 1em;
    overflow-y: auto;
    border-radius: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: ${props => props.theme.glassSecondary};

    ::-webkit-scrollbar {
        width: 5px;
    }

    a {
        color: ${props => props.theme.primary};
    }

    ul {
        padding-left: 1em;
    }

    code {
        padding: 0.3em;
        line-height: 2em;
        border-radius: 8px;
        background-color: ${props => props.theme.glass};
    }
    
    img {
        width: 12em;
        border-radius: 15px;
    }

    h2 {
        font-size: 20px;
    }

    code {
        white-space: pre-wrap
    }
`