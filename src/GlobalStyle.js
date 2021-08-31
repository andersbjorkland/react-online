import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --obsidianDark: #141414;
        --obsidianDark08: rgba(20,20,20,0.9);

        --darkPurple: #4E044B;
        --lightPink: #FECDFC;
        --pinkWhite: #FFF0FE;

        --darkBlue: #04264E;

        --headingColors: var(--pinkWhite);
        --textColors: var(--lightPink);


        // INDICES
        --headerIndex: 3;
        --menuIndex: 2;
        --contentIndex: 1;



        h1, h2, h3, h4, h5, h6 {
            color: var(--pinkWhite);
            font-family: 'Roboto', sans-serif;
        }

        p {
            color: var(--lightPink);
            font-family: 'Lato', sans-serif;
        }

        a {
            font-family: 'Lato', sans-serif;
        }


        // DIMENSIONS
        --maxWidth: 1200px;

        h1 {
            font-size: 4rem;
        }

        
    }

    * {
        box-sizing: border-box;  
    }

    body {
        min-height: 100vh;
        background-color: var(--obsidianDark);
    }

    .linear--purple {
        background: #4E044B;
        background: linear-gradient(90deg, #4E044B 14%, #3A0338 100%);
    }

    .linear--blue {
        background: #04264E;
        background: linear-gradient(90deg, #04264E 14%, #031D3A 100%);
    }

    .dark-bg {
        background-color: var(--obsidianDark);
    }

`;