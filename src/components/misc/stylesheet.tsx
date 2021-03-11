import { createGlobalStyle } from 'styled-components'

let vh = '100vh'
let vw = '100vw'

function setDimensions() {
  const h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  vh = `${h}px`
  vw = `${w}px`
}

setDimensions()
window.addEventListener('resize', setDimensions)
document.addEventListener('DOMContentLoaded', setDimensions)

export const Stylesheet = createGlobalStyle`
  #root {
    height: 100vh !important;
    padding: 1rem;
    background: #223e39;
    overflow: hidden;
  }
  
  :root {
    --vh: ${vh};
    --vw: ${vw};
    --color: #333333;
    --primary-color: #007bff;
    --border-color: #d5d9de;
    --dark-background: #000;
    --light-foreground: #fff;
    --drop-shadow-light: 0 2px 2px 0 rgba(0, 0, 0, 0.035);
  }

  .small-text {
    font-size: 80%;
    color: #555;
    font-weight: lighter;
  }

  * {
    box-sizing: border-box;
    outline: none !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Circular Std', sans-serif;
    font-weight: 400;
  }

  b {
    font-weight: 700;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none !important;
    color: var(--color) !important;
  }

  code {
    font-size: inherit;
    background: #dde0e2;
    padding: 1rem 2rem;
    border-radius: .25rem;
    color: black;
    cursor: default;
    font-weight: bold;
    font-family: inherit;
    user-select: text;
    letter-spacing: .5rem;
  }
`
