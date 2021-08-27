import React, { FC, SelectHTMLAttributes } from 'react'
import SelectorStyle from './Selector.style'

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    options?: string[]
    value?: string
}

const Selector: FC<Props> = ({ options = [], ...props }) => {
  return (
    <SelectorStyle>
      <select {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectorStyle>
  )
}

export default Selector
