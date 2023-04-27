import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`