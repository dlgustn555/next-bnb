import React, { FC, InputHTMLAttributes } from 'react'
import InputStyle from './Input.style'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    Icon?: FC
}

const Input: FC<Props> = ({ Icon = () => null, ...props }) => {
  return (
    <InputStyle iconExist={!!Icon}>
      <input {...props} />
      <div className="input-icon-wrapper">
        <Icon />
      </div>
    </InputStyle>
  )
}

export default Input
