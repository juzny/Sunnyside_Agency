import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
//colors primary
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-cyan: hsl(167, 40%, 24%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);
//colors neutral
    --very-dark-desaturated-blue: hsl(212, 27%, 19%);
    --very-dark-grayish-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
//other
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-size: 1.8rem;
    font-family: 'Barlow', sans-serif;
}


h1,h2,h3,h4,h5,h6 {
    font-family:'Fraunces', sans-serif ;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}


img {
    max-width: 100%;
}

.wrapper {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
}
`;

export default GlobalStyle;
