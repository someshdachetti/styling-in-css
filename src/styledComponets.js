import styled from 'styled-components'

export const Heading = styled.h1`
  color: #75ce49;
`

export const Button = styled.button`
  color: ${props => (props.ouline ? 'black' : 'red')};
  background-color: ${props => (props.outline ? 'red' : 'white')};
`
