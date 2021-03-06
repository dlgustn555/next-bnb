import styled from 'styled-components'
import palette from '../../styles/palette'

const HeaderStyle = styled.div`
    position: sticky;
    top:0;
    width: 100%;
    height: 80px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    z-index: 10;

    .header-log-wrapper {
        display: flex;
        align-items: center;

        .header-logo {
            margin-right: 6px;
        }
    }

    .header-auth-buttons {
        .header-sign-up-button {
            height: 42px;
            margin-right: 8px;
            padding: 0 16px;
            border: 0;
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: ${palette.gray_f7}
            }
        }
        .header-login-button {
            height: 42px;
            padding: 0 16px;
            border: 0;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12)
            }
        }
    }
`

export default HeaderStyle
