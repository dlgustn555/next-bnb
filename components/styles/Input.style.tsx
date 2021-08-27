import styled from 'styled-components'
import palette from '../../styles/palette'

interface Props {
    iconExist: boolean
}

const InputStyle = styled.div<Props>`
    input {
        position: relative;
        width: 100%;
        height: 46px;
        padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
        border: 1px solid ${palette.gray_eb};
        border-radius: 4px;
        font-size: 16px;
        outline: none;
        ::placeholder {
            color: ${palette.gray_76}
        }
        & :focus {
            border-color: ${palette.dark_cyan} !important;
        }
    }
    .input-icon-wrapper {
        position: absolute;
        top: 0;
        right: 11px;
        height: 46px;
        display: flex;
        align-items: center;
    }
`
export default InputStyle
