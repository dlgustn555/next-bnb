import React, { FC, ReactNode } from 'react'
import ModalStyle from './Modal.style'
import Portal from './Portal'

interface Props {
    children: ReactNode
    isShow: boolean
    closeFn: () => void
}

const Modal: FC<Props> = ({ children, isShow, closeFn }) => {
  if (!isShow) {
    return null
  }

  return (
    <Portal>
      <ModalStyle>
        <div className="modal-background" onClick={closeFn} />
        <div className="modal-content">
          {children}
        </div>
      </ModalStyle>
    </Portal>
  )
}

export default Modal
