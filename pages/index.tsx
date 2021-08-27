import React, { FC } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  font-size: 21px;
  color: red;
`

const index: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default index
