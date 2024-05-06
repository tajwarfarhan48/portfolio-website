import styled from 'styled-components'

const ContactStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .contact {
        background-color: #252525;
        border: 2px solid #ffd166;
        max-width: 100%;
        width: 95vw;
        margin: 20px 0;

        .contactHeading {
            font-size: var( --fs-l );
            font-weight: 300;
            color: white;
        } 
        
        .emailDiv {
            margin-top: -25px;

            .emailText {
                margin-left: 10px;
                color: white;
                font-size: var( --fs-s );
            }
        }

        .invitation {
            color: #ffd166;
            font-size: var( --fs-m );
            font-weight: bold;
        }

        .contactGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                "name message"
                "email message"
                "phone .";

            .formSpacing {
                display: block;
                margin: 0 0 20px 5%;

                .fieldLabel {
                    color: white;
                    font-size: var( --fs-s );

                    .redText {
                        color: #ff0000;
                        font-size: var( --fs-s );
                        display: inline;
                    }
                }

                .formWidth {
                    width: 90%;
                }

                .nameField, .emailField, .phoneField {
                    height: 35px;
                    border-radius: 4px;
                    border: 0px;
                }

                .error:focus {
                    outline: none !important;
                    border: 3px solid red;
                }

                .messageField {
                    height: 120px;
                    border-radius: 4px;
                    border: 0px;
                }
            }

            .name {
                grid-area: name;
            }

            .email {
                grid-area: email;
            }

            .phone {
                grid-area: phone;
            }

            .message {
                grid-area: message;
            }
        }

        .submitButton {
            width: 100px;
            background-color: #ffd166;
            color: #252525;
            border-radius: 4px;
            font-size: var( --fs-s );
            font-family: 'Fira Sans Condensed', sans-serif;
            font-weight: bolder;
            aspect-ratio: 16 / 9;
            border: 0px;

            display: block;
            margin: 10px auto 20px auto;

            &:hover {
                cursor: pointer;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        & {
            .contact {
                .contactGrid {
                    grid-template-columns: 1fr;
                    grid-template-areas: 
                    "name"
                    "email"
                    "phone"
                    "message";
                }
            }
        }
    }
`

export default ContactStyles