import React, { FC, ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import ModalStyle from '../styles/Modal.style'
import Portal from './Portal'

interface Props {
    children: ReactNode
    style?: CSSProperties
    isShow: boolean
    closeFn: () => void
}

const Modal: FC<Props> = ({ children, style = {}, isShow, closeFn }) => {
  if (!isShow) {
    return null
  }

  return (
    <Portal>
      <ModalStyle>
        <div className="modal-background" onClick={closeFn} />
        <div className="modal-content" style={style}>
          {children}
        </div>
      </ModalStyle>
    </Portal>
  )
}

export default Modal
