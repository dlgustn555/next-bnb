import React, { FC, SelectHTMLAttributes } from 'react'
import SelectorStyle from '../styles/Selector.style'

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    options?: string[]
    value?: string
    disabledOptions?: string[]
}

const Selector: FC<Props> = ({ options = [], disabledOptions = [], ...props }) => {
  return (
    <SelectorStyle>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
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
