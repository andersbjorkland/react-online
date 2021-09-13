import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --obsidianDark: #141414;
        --obsidianDark08: rgba(20,20,20,0.9);
        --darkGrey: #2E2E2E;

        --darkPurple: #4E044B;
        --lightPink: #FECDFC;
        --pinkWhite: #FFF0FE;

        --darkBlue: #04264E;
        --lightBlue: #CEE4FD;

        --headingColors: var(--pinkWhite);
        --textColors: var(--lightPink);

        --inactive: var(--darkGrey);

        --linearPurple: linear-gradient(90deg, #4E044B 14%, #3A0338 100%);
        --linearBlue: linear-gradient(90deg, #04264E 14%, #031D3A 100%);

        // INDICES
        --headerIndex: 3;
        --menuIndex: 2;
        --contentIndex: 1;

        // SIZES
        font-size: 16px;


        // DIMENSIONS
        --maxWidth: 1200px;

        
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--pinkWhite);
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-size: 2rem;

        .md-text {
            font-size: 1.5rem;
        }
    }

    h3 {
        font-weight: lighter;
        font-size: 1.4rem;
        margin: 2rem 0 0 0;

        .md-text {
            font-size: 1.1rem;
            font-weight: lighter;
        }
    }

    h4, h5, h6 {
        font-weight: normal;

        &:first-child {
            margin: 0.25rem 0;
        }
    }

    p {
        color: var(--lightPink);
        font-family: 'Lato', sans-serif;
        line-height: 1.4rem;
    }

    a {
        font-family: 'Lato', sans-serif;
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

    .blue {
        color: var(--lightBlue);
    }

    .pink {
        color: var(--lightPink);
    }

    .dark-bg {
        background-color: var(--obsidianDark);
    }

    .white {
        color: white;
    }
    .white08 {
        color: rgba(255, 255, 255, 0.6);
    }

    .dark {
        color: var(--obsidianDark)
    }

    // MARGINS
    .mt-2 {
        margin-top: 2rem;
    }
    
    .mt-3 {
        margin-top: 3rem;
    }

    .mt-4 {
        margin-top: 4rem;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }

    .ml-auto {
        margin-left: auto;
    }
`;