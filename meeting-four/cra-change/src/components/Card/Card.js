import styled from '@emotion/styled'
// import { useState } from 'react'

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
`
const Card = ({ children, onClick }) => {
    // const [state, setState] = useState({})
    return <CardStyled onClick={onClick}>{children}</CardStyled>
}

export default Card
