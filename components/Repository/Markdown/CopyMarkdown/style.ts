import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const Button = styled.button`
    top: 0.5em;
    right: 0.5em;
    border: none;
    opacity: 0.5;
    display: flex;
    padding: 0.5em;
    cursor: pointer;
    position: absolute;
    border-radius: 25%;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.backgroundColor};
    }
`

export const Icon = styled.svg`
    width: 1.8em;
    fill: ${props => props.theme.primary};
`

export const Pre = styled.pre`
    padding: 1em;
    border-radius: 15px;
    background-color: ${props => props.theme.glass};

    code {
        padding: 0;
        line-height: 1em;
        border-radius: 0;
        background-color: transparent;
    }
`