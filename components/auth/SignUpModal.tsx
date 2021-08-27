import React, { FC } from 'react'
import SignUpModalStyle from './SinUpModal.style'
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg'
import MainIcon from '../../public/static/svg/auth/mail.svg'
import PersonIcon from '../../public/static/svg/auth/person.svg'
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg'
// import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg'

import Input from '../commons/Input'

const SignUpModal: FC = () => {
  return (
    <SignUpModalStyle>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type="email" name="email" Icon={MainIcon} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="이름(예: 현수)" Icon={PersonIcon} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="성(예: 이)" Icon={PersonIcon} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="비밀번호 설정하기" type="password" Icon={OpenedEyeIcon} />
      </div>
    </SignUpModalStyle>
  )
}

export default SignUpModal
