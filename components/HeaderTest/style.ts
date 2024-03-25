import styled, { css } from 'styled-components'

export const Container = styled.div`
    top: 3%;
    left: 50%;
    width: 90%;
    z-index: 1;
    display: flex;
    height: 3.5em;
    position: fixed;
    flex-direction: row;
    border-radius: 20px;
    transform: translateX(-50%);
    backdrop-filter: saturate(130%) blur(30px);
`

export const Balls = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
`

interface IBall {
    second?: boolean
}

export const Ball = styled.div<IBall>`
    width: 3.5em;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);

    ${props => props.second && css`
        margin-left: auto;
    `}
`

export const Title = styled.h1`
    opacity: 0;
    font-size: 2.2rem;
    margin-right: auto;
    align-self: center;
    transform: translateY(-70%);
    color: ${props => props.theme.primary};

    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const InputFind = styled.input`
    opacity: 0;
    z-index: 1;
    width: 14em;
    border: none;
    font-size: 1.4em;
    border-radius: 30px;
    padding: 0.7em 0.8em;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
    backdrop-filter: saturate(100%) blur(30px);
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