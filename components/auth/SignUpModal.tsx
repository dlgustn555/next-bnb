import React, { FC, useState, ChangeEvent } from 'react'
import SignUpModalStyle from '../styles/SinUpModal.style'
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg'
import MainIcon from '../../public/static/svg/auth/mail.svg'
import PersonIcon from '../../public/static/svg/auth/person.svg'
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg'
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg'

import Input from '../commons/Input'
import Selector from '../commons/Selector'

import { monthList, dayList, yearList } from '../../lib/staticData'

const SignUpModal: FC = () => {
  const [email, setEmail] = useState('')
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  const [birthYear, setBirthYear] = useState('년')
  const [birthDay, setBirthDay] = useState('일')
  const [birthMonth, setBirthMonth] = useState('월')

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

  const onChangeBirthYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(event.target.value)
  }

  const onChangeBirthDay = (event: ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(event.target.value)
  }

  const onChangeBirthMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(event.target.value)
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
      <p className="sign-up-birthday-label">생일</p>
      <p className="sign-up-modal-birthday-info">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른 에어비앤비 이용자에게 공개되지 않습니다.
      </p>

      <div className="sign-up-modal-birthday-selectors">
        <div className="sign-up-modal-birthday-month-selector">
          <Selector
            options={monthList}
            disabledOptions={['월']}
            defaultValue={birthMonth}
            onChange={onChangeBirthMonth}
          />
        </div>
        <div className="sign-up-modal-birthday-day-selector">
          <Selector
            options={dayList}
            disabledOptions={['일']}
            defaultValue={birthDay}
            onChange={onChangeBirthDay}
          />
        </div>
        <div className="sign-up-modal-birthday-year-selector">
          <Selector
            options={yearList}
            disabledOptions={['년']}
            defaultValue={birthYear}
            onChange={onChangeBirthYear}
          />
        </div>
      </div>
    </SignUpModalStyle>
  )
}

export default SignUpModal
