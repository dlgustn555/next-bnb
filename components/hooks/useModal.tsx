import React, { useState, ReactNode, CSSProperties } from 'react'
import Modal from '../commons/Modal'
/**
 * 모달을 사용하기 위해 부모에 상태 하나를 만들어야 하고, (모달 Show/Hide)
 * ModalPortal에 props로 모달을 닫는 함수를 전달하는 일은 번거롭다.
 */
const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const openModal = () => {
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }

  interface ModalProps {
    children: ReactNode
    style?: CSSProperties
  }

  const ModalPortal = ({ children, style = {} }: ModalProps) => (
    <Modal isShow={modalOpened} style={style} closeFn={closeModal}>{children}</Modal>
  )

  return {
    openModal,
    closeModal,
    ModalPortal
  }
}

export default useModal
