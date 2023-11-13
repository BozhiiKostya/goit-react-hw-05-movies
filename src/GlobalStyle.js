import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
    min-height: 1000px;
    position: relative;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin: 0;
    color: #212121;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: -1; 
}

body::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://img.freepik.com/free-vector/seamless-pattern-with-cinema-elements_225004-1154.jpg?w=740&t=st=1699566439~exp=1699567039~hmac=348f6235e1c9fc9da7da618cca3fd097afb760d661416e148eeb736ab1982fd4');
  z-index: -2; 
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol,
li {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
    text-decoration: none;
}
    `;
