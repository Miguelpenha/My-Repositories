import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
        scrollbar-color: ${props => props.theme.color} ${props => props.theme.secondary};
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme.secondary};
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: ${props => props.theme.color};
        }
    }

    body {
        padding-bottom: 15%;
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.backgroundColor};
    }
`