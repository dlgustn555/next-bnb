import styled from 'styled-components'
import palette from '../../styles/palette'

const SelectorStyle = styled.div`
    width: 100%;
    height: 46px;

    select {
        width: 100%;
        height: 100%;

        background-color: white;
        border: 1px solid ${palette.gray_eb};
        border-radius: 4px; 
        outline: none;
        --webkit-appearance: none;
        background-image: url('/public/static/svg/common/selector/selector_down_arrow.svg');
        background-position: right 11px center;
        background-repeat: no-repeat;

        padding: 0 11px;
        font-size: 16px;

        &:focus {
            border-color: ${palette.dark_cyan};
        }
    }
`

export default SelectorStyle
