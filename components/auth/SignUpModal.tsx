import React, { FC, useState, ChangeEvent } from 'react'
import SignUpModalStyle from './SinUpModal.style'
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg'
import MainIcon from '../../public/static/svg/auth/mail.svg'
import PersonIcon from '../../public/static/svg/auth/person.svg'
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg'
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg'

import Input from '../commons/Input'

const SignUpModal: FC = () => {
  const [email, setEmail] = useState('')
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value)
  }

  const onChangeFirstname = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value)
  }

  const onPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword)
  }

  return (
    <SignUpModalStyle>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type="email" name="email" icon={<MainIcon />} value={email} onChange={onChangeEmail} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="이름(예: 현수)" icon={<PersonIcon />} value={lastname} onChange={onChangeLastname} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="성(예: 이)" icon={<PersonIcon />} value={firstname} onChange={onChangeFirstname} />
      </div>
      <div className="input-wrapper sign-up-password-input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={hidePassword ? 'password' : 'text'}
          icon={
            hidePassword ?
              <OpenedEyeIcon onMouseDown={toggleHidePassword} />
              :
              <ClosedEyeIcon onMouseUp={toggleHidePassword} />
          }
          value={password}
          onChange={onPassword}
        />
      </div>
    </SignUpModalStyle>
  )
}

export default SignUpModal
