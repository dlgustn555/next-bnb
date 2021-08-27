import React, { FC } from 'react'
import SignUpModalStyle from '../styles/SinUpModal.style'
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg'
import MainIcon from '../../public/static/svg/auth/mail.svg'
import PersonIcon from '../../public/static/svg/auth/person.svg'
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg'
// import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg'

const SignUpModal: FC = () => {
  return (
    <SignUpModalStyle>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <input placeholder="이메일 주소" type="eamil" name="email" />
        <MainIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="이름(예: 현수)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="성(예: 이)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="비밀번호 설정하기" type="password" />
        <OpenedEyeIcon />
      </div>
    </SignUpModalStyle>
  )
}

export default SignUpModal
