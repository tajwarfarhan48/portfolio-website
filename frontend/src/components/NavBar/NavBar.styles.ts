import styled from 'styled-components'

const NavBarStyles = styled.div`
    position: sticky;
    z-index: 100;
    top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 0.5s;

    .navBar {
        background-color: #181818;
        color: white;
        width: 90%;
        border: 2px solid #ffd166;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .navBarLeft {
            font-size: var( --fs-xs );
            font-weight: 700;
            margin: 12px;
        }

        .navLinks {
            a {
                margin: 10px;
                text-decoration: none;
                color: white;
                font-size: var( --fs-xxs );

                &:hover {
                    color: #ffd166;
                }
            }

            .active {
                color: #ffd166;
            }
        }

        .nav-open-btn {
            display: none;
            border: none;
            background: transparent;
            color: white;
            font-size: var( --fs-xs );
            margin-top: 10px;
            transition: 0.2s;

            &:hover {
                cursor: pointer;
                color: #ffd166;
                transition: 0.2s;
            }
        }
    }

    .nav-overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #181818;

        .nav-close-btn {
            position: fixed;
            top: 0;
            right: 0;
            margin: 10px;
            border: none;
            color: white;
            background: transparent;
            font-size: var( --fs-l );

            &:hover {
                cursor: pointer;
                color: #ffd166;
            }
        }

        .navLink-overlay {
            margin: 15px;
            text-decoration: none;
            color: white;
            font-size: var( --fs-l );

            &:hover {
                font-weight: bold;
            }
        }

        .active {
            color: #ffd166
        }
    }

    // For portrait tablets and down
    @media only screen and (max-width: 899px) {
        & {
            .navBar {
                width: 90vw;

                .navLinks {
                    display: none;
                }

                .nav-open-btn {
                    display: block;
                }
            }
        }
    }

    // For landscape phones only 
    @media only screen and (max-width: 899px) and (min-aspect-ratio: 4 / 3) {
        & {
            .nav-overlay {
                flex-direction: row;

                .navLink-overlay {
                    font-size: var( --fs-s );
                    margin-top: 0;
                }
            }
        }
    }
`

export default NavBarStyles