import styled from 'styled-components'

export const Container = styled.span`
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: 50%;
    border-radius: 50% 50%;
    position: absolute;
    display: inline-block;
    
    &:after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        margin: auto;
        border: 6px solid;
        position: absolute;
        border-radius: 50%;
        transform-origin: center center;
        animation: rotation 0.5s linear infinite;
        border-color: transparent ${props => props.theme.primary} ${props => props.theme.primary};
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg)
        }

        100% {
            transform: rotate(360deg)
        }
    }
`