import styled from 'styled-components'

export const Container = styled.a`
    width: 80%;
    padding: 3.5%;
    margin: 3.5% auto;
    border-radius: 20px;
    text-decoration: none;
    transition-duration: 0.15s;
    backdrop-filter: blur(100px);
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
    background-color: ${props => props.theme.glass};

    :hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgb(0 0 0 / 40%);
        
        header {
            border-left: 4px solid ${props => props.theme.color};

            svg {
                right: 1.5%;
                opacity: 1;
            }

            a {
                top: 10%;
                right: 2%;
            }
        }
    }
`

export const Header = styled.header`
    padding-left: 1%;
    transition-duration: 0.25s;
    transition-timing-function: linear;
`

export const IconNext = styled.svg`
    top: 60%;
    right: 5%;
    opacity: 0;
    width: 2.8vw;
    position: absolute;
    transition-duration: 0.25s;
    transition-timing-function: linear;
    fill: ${props => props.theme.color};
`

export const ContainerOpenHomePage = styled.a`
   top: 15%;
   right: 4%;
   padding: 2%;
   width: 9.5%;
   position: absolute;
   border-radius: 25%;
   transition-duration: 0.1s;
   transition-timing-function: linear;

   :hover {
        border-radius: 50%;
        backdrop-filter: blur(100px);
        box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
        background-color: ${props => props.theme.glass};
   }
`

export const IconOpenHomePage = styled.svg`
    width: 100%;
    fill: ${props => props.theme.color};
`

export const Title = styled.h2`
    margin-left: 1%;
    margin-bottom: 1%;
    font-size: 1.2rem;
`

export const Description = styled.span`
    display: flex;
    margin-left: 1%;
    align-items: center;
`

export const DescriptionIconAlert = styled.svg`
    width: 1.4vw;
    margin-right: 0.8%;
    margin-left: -0.5%;
    fill: ${props => props.theme.primary};
`

export const Languages = styled.div`
    display: flex;
    margin-left: 1%;
    flex-wrap: wrap;
`

export const ContainerLanguage = styled.div`
    display: flex;
    margin-right: 4%;
    margin-top: 1.5%;
    align-items: center;
`

export const LanguageDetail = styled.div`
    width: 0.8vw;
    height: 0.8vw;
    margin-right: 6%;
    min-width: 0.8vw;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
`

export const Language = styled.div`
    font-weight: bold;
`