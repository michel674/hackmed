import { createGlobalStyle } from "styled-components";
import { Breakpoint } from "./constants";

export const GlobalStyle = createGlobalStyle<any>`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body{ 
      background-color: ${(props) => props.theme.colors.LayoutPrimary};
      
    }
    
@media (min-width: 0px){
  html{
    font-size: 12px;
  }
}

@media (min-width: ${Breakpoint.Mobile}){
  html{
    font-size: 14px;
  }
}

@media (min-width: ${Breakpoint.Desktop}){
  html{
    font-size: 16px;
  }
}
`;
