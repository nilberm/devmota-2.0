import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 :root {
   --primaryColor: #5235A7;
   --backgroundDark: #1D1628;
   --backgroundBright: #E8E0F5;
   --secondBackgroundDark: #292432;
   --secondBackgroundBright: #FFFFFF;
   --darkColor: #170B20;
   --brightColor: #ACACAC;
   --Black: #000000;
   --White: #FFFFFF;
 }

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 html, body, #root {
  height: 100%;
 }

 body {
  font: 14px "Roboto", sans-serif;
 }



::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(133, 133, 133, 0.18);
  border-radius: 12px;
}

::-webkit-scrollbar-thumb {
  background: #5235A7;
  border-radius: 12px;
}



 ul {
  list-style: none;
 }

`;
