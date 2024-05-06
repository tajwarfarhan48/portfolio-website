import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        max-width: 100vw;
        font-family: 'Fira Sans Condensed', sans-serif;
        scroll-behavior: smooth;
    }

    :root {
        --fs-xl: 8rem;
        --fs-l: 2.75rem;
        --fs-xm: 2rem;
        --fs-m: 1.5rem;
        --fs-s: 1.375rem;
        --fs-xs: 1.25rem;
        --fs-xxs: 1rem;
    }

    html, body {
        overflow-x: clip;
    }

    html {
        background-color: #252525;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html.modal-active {
        overflow-y: hidden;
    }

    html.expanded {
        overflow-y: hidden;
    }

    .App {
        max-width: 100vw;
        background-color: #252525;
    }   

    .block {
        display: block;
    }

    .flexCenter {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .threeColGrid {
        display: grid;
    }

    .twoColGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .centerText {
        text-align: center;
    }

    .container {
        flex: 1;
        max-width: 1500px;
    }

    .inline {
        display: inline;
    }

    .inline-block {
        display: inline-block;
    }

    @media only screen and (max-width: 599px) {
        :root {
            --fs-xl: 4.25rem;
            --fs-l: 2.375rem;
            --fs-m: 1.25rem;
            --fs-s: 1.25rem;
            --fs-xs: 1.125rem;
            --fs-xxs: 0.875rem;
        }

        .threeColGrid {
            grid-template-columns: 1fr;
        }

        .twoColGrid {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (min-width: 600px) {
        :root {
            --fs-xl: 7rem;
            --fs-l: 2.375rem;
            --fs-m: 1.25rem;
            --fs-s: 1.25rem;
            --fs-xs: 1.125rem;
            --fs-xxs: 0.875rem;
        }

        .threeColGrid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (min-width: 1200px) {
        :root {
        --fs-xl: 8rem;
        --fs-l: 2.75rem;
        --fs-xm: 2rem;
        --fs-m: 1.5rem;
        --fs-s: 1.375rem;
        --fs-xs: 1.25rem;
        --fs-xxs: 1rem;
        }

        .threeColGrid {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`

export default GlobalStyles