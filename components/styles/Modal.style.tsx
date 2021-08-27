import styled from 'styled-components'

const ModalStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    .modal-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal-content {
        width: 568px;
        height: 614px;
        background-color: white;
        z-index: 11;
    }
`

export default ModalStyle
