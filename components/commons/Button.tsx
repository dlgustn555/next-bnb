import React, { FC, ButtonHTMLAttributes } from 'react'
import ButtonStyle from '../styles/Button.style'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}

export default Button
