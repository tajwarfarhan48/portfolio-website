import styled from 'styled-components'

const AlertStyles = styled.div`
    display: flex;
    justify-content: center;

    .alertBox {
        display: flex;
        flex-direction: space-evenly;

        width: 90vw;
        max-width: 800px;

        position: fixed;
        top: 80px;

        border: 2px solid white;
        z-index: 110;

        .alertMessage {
            color: white;
            font-size: var( --fs-xs );
            font-weight: 700;
            margin: 12px;
            margin-right:auto;
        }

        .alertButton {
            border: 0;
            background-color: transparent;
            margin: 12px;
            color: white;
            font-weight: 700;
        }

        .alertButton:hover {
            cursor: pointer;
            color: black;
        }
         
    }

    .fade-in {
        opacity: 1;
        transition: opacity 250ms linear;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 250ms linear;
    }

    .success {
        background-color: #007d1f;
    }

    .failure {
        background-color: red;
    }
`

export default AlertStyles