import styled from 'styled-components'
import Loading from '../Loading'
import Image from 'next/image'

export const Container = styled.div`
    width: 85%;
    margin: auto;
    padding: 1em;
    height: 100%;
    align-self: center;
    border-radius: 20px;
    text-decoration: none;
    color: ${props => props.theme.color};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.glass};

    @media screen and (max-width: 450px) {
        width: 85vw;
    }
`

export const Title = styled.h2`
    margin-left: 1%;
    margin-bottom: 1%;
    font-size: 1.5rem;
`

export const Description = styled.span`
    display: flex;
    margin-left: 1%;
    font-size: 1.2rem;
    align-items: center;
`

export const Languages = styled.div`
    gap: 1em;
    width: 100%;
    display: flex;
    overflow: auto;
    padding: 0.5em;
    margin-bottom: 1em;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
        height: 2px;
    }
`

export const ContainerLanguage = styled.div`
    display: flex;
    margin-right: 4%;
    margin-top: 1.5%;
    position: relative;
    align-items: center;
    scroll-snap-align: center;
`

export const LanguageDetail = styled.div`
    width: 0.8em;
    height: 0.8em;
    margin-right: 6%;
    min-width: 0.8vw;
    border-radius: 50%;
    position: absolute;
    background-color: ${props => props.theme.primary};
`

export const Language = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 1.1em;
`

export const LoadingLanguage = styled(Loading)`
    left: 0%;
    transform: none;
    margin-top: 1em;
    position: sticky;
`

export const Options = styled.div`
    gap: 1em;
    display: flex;
    margin-bottom: 1.5em;
`

export const Option = styled.a`
    width: 3em;
    display: flex;
    padding: 0.5em;
    border-radius: 25%;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    
    :hover {
        border-radius: 50%;
        transform: scale(1.1);
        background-color: ${props => props.theme.glass};
    }
`

export const IconOption = styled.svg`
    width: 100%;
    fill: ${props => props.theme.primary};
`

export const ContainerThumbnail = styled.div`
    height: 20em;
    display: flex;
    overflow: hidden;
    border-radius: 15px;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: auto;
    }
`

export const Thumbnail = styled(Image)`
    border-radius: 15px;
`