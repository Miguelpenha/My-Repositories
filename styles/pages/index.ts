import styled, { css } from 'styled-components'

export const Header = styled.header`
    top: 3%;
    left: 50%;
    width: 90%;
    z-index: 1;
    display: flex;
    position: fixed;
    padding: 1.5% 2%;
    border-radius: 20px;
    transform: translate(-50%);
    backdrop-filter: blur(10px);
    background-color: ${props => props.theme.glassSecondary};
`

export const Title = styled.h1`
    margin: auto;
    font-size: 2.2rem;
    color: ${props => props.theme.primary};
`

export const Main = styled.main`
    display: flex;
    padding-top: 10%;
    flex-direction: column;
`

export const ContainerCount = styled.div`
    display: flex;
    margin-top: auto;
    width: min-content;
    position: absolute;
    margin-right: auto;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);  
    background-color: ${props => props.theme.glass};
`

const ButtonCountCSS = css`
    width: 6vw;
    cursor: pointer;
    align-self: center;
    border-radius: 25%;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    fill: ${props => props.theme.color};

    :hover {
        border-radius: 50%;
        backdrop-filter: blur(100px);
        box-shadow: 0 5px 15px rgb(0 0 0 / 20%);  
        background-color: ${props => props.theme.glass};
    }
`

export const ButtonLeftCount = styled.svg`
    margin-right: 5%;

    ${ButtonCountCSS}
`

export const Count = styled.input`
    width: 100%;
    border: none;
    font-size: 2rem;
    align-self: center;
    text-align: center;
    background-color: transparent;
    color: ${props => props.theme.primary};
    
    :focus {
        outline: none;
    }
`

export const ButtonRightCount = styled.svg`
    ${ButtonCountCSS}
`

interface IRepositories {
    columns: number
}

export const Repositories = styled.section<IRepositories>`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
`

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.backgroundColor};
`