import React, { FC } from 'react'
import Link from 'next/link'
import AirbnbLogoIcon from '../public/static/svg/logo/logo.svg'
import AirbnbLogoTextIcon from '../public/static/svg/logo/logo_text.svg'
import HeaderStyle from './Header.style'

import useModal from './hooks/useModal'
import SignUpModal from './auth/SignUpModal'

const Header: FC = () => {
  const { openModal, ModalPortal } = useModal()

  return (
    <HeaderStyle>
      <Link href="/">
        <a className="header-log-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </a>
      </Link>

      <div className="header-auth-buttons">
        <button type="button" className="header-sign-up-button" onClick={openModal}>회원가입</button>
        <button type="button" className="header-login-button">로그인</button>
      </div>

      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </HeaderStyle>
  )
}

export default Header
