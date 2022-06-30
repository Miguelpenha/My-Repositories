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
        padding-bottom: 10%;
        background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.backgroundColor});
        background-size: 400% 400%;
        background-position: 0% 50%;
        color: ${props => props.theme.color};
        animation: gradient 8s linear infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
`