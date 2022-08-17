import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
  --white: #ffffff;
  --gray-100:#EDF4FA;
  --gray-200:#E6ECF2;
  --gray-300:#DEE5EB;
  
  --blue-200:#D5EDFE;
  --blue-300:#81BFFB;
  --blue-400:#2E82F2;
  --blue-800:#0E348C;

  --bg: #F6FBFE;

  --success: #4ab532;
  --information:#6298FC;
  --warning:#FFA705;
  --important :#FF4B38;

  --title: #25303F;
  --text: #666F7A;
  --text-off: #9AA3AA;
}

`