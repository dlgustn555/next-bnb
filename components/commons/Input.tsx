import React, { FC, ReactNode, InputHTMLAttributes } from 'react'
import InputStyle from './Input.style'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    icon?: ReactNode
}

const Input: FC<Props> = ({ icon, ...props }) => {
  return (
    <InputStyle iconExist={!!icon}>
      <input {...props} />
      <div className="input-icon-wrapper">
        {icon}
      </div>
    </InputStyle>
  )
}

export default Input
