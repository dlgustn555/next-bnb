import styled from 'styled-components'
import palette from '../../styles/palette'

const SignUpModalStyle = styled.form`
    width: 600px;
    padding: 32px;
    background-color:  white;
    /* z-index: 11 */

    .modal-close-x-icon {
        cursor: pointer;
        display: block;
        margin: 0 0  40px auto;
    }

    .input-wrapper {
        position: relative;
        margin-bottom: 16px;
        input {
            /* position: relative; */
            width: 100%;
            height: 46px;
            padding: 0 44px 0 11px;
            border: 1px solid ${palette.gray_eb};
            border-radius: 4px;
            font-size: 16px;
            outline: none;
            ::placeholder {
                color: ${palette.gray_76}
            }
        }
        svg {
            position: absolute;
            right: 11px;
            top: 16px;
        }
    }

    .sign-up-password-input-wrapper {
        svg {
            cursor: pointer;
        }
    }

    .sign-up-birthday-label {
        font-size: 16px;
        font-weight: 600;
        margin-top: 16px;
        margin-bottom: 8px;
    }

    .sign-up-modal-birthday-info {
        margin-bottom: 16px;
        color: ${palette.charcoal}
    }

    .sign-up-modal-birthday-selectors {
        display: flex;
        margin-bottom: 24px;
        .sign-up-modal-birthday-month-selector {
            margin-right: 16px;
            flex-grow: 1;
            
        }
        .sign-up-modal-birthday-day-selector {
            margin-right: 16px;
            width: 25%;
        }
        .sign-up-modal-birthday-year-selector {
            width: 33.3333%;
        }
    }

    .sign-up-modal-submit-button-wrapper {
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid ${palette.gray_eb};
    }
`

export default SignUpModalStyle
