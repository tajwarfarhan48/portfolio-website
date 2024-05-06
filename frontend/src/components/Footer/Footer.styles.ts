import styled from 'styled-components'

const FooterStyles = styled.div`
    border: 2px solid #ffd166;
    background-color: black;
    color: white;
    margin: 20px 0 40px 0;
    font-size: var( --fs-xxs );
    font-weight: 200;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        margin: 1.25rem 1rem;

        a {
            text-decoration: underline;
            color: white;
        }

        a:hover {
            font-weight: bolder;
            color: #ffd166;
        }
    }    

    // Portrait tablets and down
    @media only screen and (max-width: 899px) {
        width: 92vw;
        margin: auto;
        margin-bottom: 2rem;
    }
`

export default FooterStyles