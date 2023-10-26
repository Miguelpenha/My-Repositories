import styled from 'styled-components'

export const Container = styled.header`
    top: 3%;
    left: 50%;
    width: 90%;
    z-index: 1;
    display: flex;
    position: fixed;
    padding: 1.5em 2em;
    border-radius: 20px;
    transform: translate(-50%);
    backdrop-filter: blur(20px);
    box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
    background-color: ${props => props.theme.glassSecondary};

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-size: 2.2rem;
    margin-right: auto;
    align-self: center;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const InputFind = styled.input`
    width: 14em;
    border: none;
    font-size: 1.4em;
    border-radius: 30px;
    padding: 0.7em 0.8em;
    transition-duration: 0.2s;
    backdrop-filter: blur(100px);
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
    background-color: ${props => props.theme.glass};

    :focus {
        outline: none;
        border-radius: 20px;
    }

    ::placeholder {
        color: ${props => props.theme.color};
    }

    @media screen and (max-width: 750px) {
        margin: auto;
    }

    @media screen and (max-width: 400px) {
       width: 100%;
    }
`