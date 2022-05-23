import { createGlobalStyle } from "styled-components";
import { MainColors } from "../color";

export const Global = createGlobalStyle`
  html {
      font-size: 14px;
      color: ${MainColors.grey[500]};
  }

  

  body {
    font-family: 'neue-haas-grotesk-text', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    background-color: white;

    box-sizing: border-box;
    -ms-overflow-style: scrollbar;

    svg {
      fill: ${MainColors.grey[500]}
    }
    
    #app-fixed .dialog-container +div{
        z-index:70;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
	figure {
		margin: 0;
  }
  
	a {
		text-decoration: none;
		color: ${MainColors.main[500]};
  }
  
	p {
		margin: 0;
  }
  
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
  }
  
	input[type='text'],
	input[type='button'],
	button {
		font-family: inherit;
  }
  
  hr {
    border-top: 0;
    border-color: ${MainColors.grey[200]};
    background-color: ${MainColors.grey[200]};
  }

  .flex-1 {
    display: flex;
    flex: 1;
  }
`;
