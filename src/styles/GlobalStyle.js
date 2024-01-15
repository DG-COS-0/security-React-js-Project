import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
    /* COlor grey variables*/
    --color-grey-0 : #f8f9fa;
    --color-grey-1 : #f1f3f5;
    --color-grey-2 : #e9ecef;
    --color-grey-3 : #dee2e6;
    --color-grey-4 : #ced4da;
    --color-grey-5 : #adb5bd;
    --color-grey-6 : #868e96;
    --color-grey-7 : #495057;
    --color-grey-8 : #343a40;
    --color-grey-9 : #212529;  


     /* COlor orange variables*/
    --color-orange-0 : #fff4e6;
    --color-orange-1 : #ffe8cc;
    --color-orange-2 : #ffd8a8;
    --color-orange-3 : #ffc078;
    --color-orange-4 : #ffa94d;
    --color-orange-5 : #ff922b;
    --color-orange-6 : #fd7e14;
    --color-orange-7 : #f76707;
    --color-orange-8 : #e8590c;
    --color-orange-9 : #d9480f; 
    
    /* COlor red variables*/
    --color-red-0 : #fff5f5;
    --color-red-1 : #ffe3e3;
    --color-red-2 : #ffc9c9;
    --color-red-3 : #ffa8a8;
    --color-red-4 : #ff8787;
    --color-red-5 : #ff6b6b;
    --color-red-6 : #fa5252;
    --color-red-7 : #f03e3e;
    --color-red-8 : #e03131;
    --color-red-9 : #c92a2a;
    
    /* COlor cyan variables*/
    --color-cyan-0 : #e3fafc;
    --color-cyan-1 : #c5f6fa;
    --color-cyan-2 : #99e9f2;
    --color-cyan-3 : #66d9e8;
    --color-cyan-4 : #3bc9db;
    --color-cyan-5 : #22b8cf;
    --color-cyan-6 : #15aabf;
    --color-cyan-7 : #1098ad;
    --color-cyan-8 : #0c8599;
    --color-cyan-9 : #0b7285;


     /* COlor teal variables*/
     --color-teal-0 : #e6fcf5;
    --color-teal-1 : #c3fae8;
    --color-teal-2 : #96f2d7;
    --color-teal-3 : #63e6be;
    --color-teal-4 : #38d9a9;
    --color-teal-5 : #20c997;
    --color-teal-6 : #12b886;
    --color-teal-7 : #0ca678;
    --color-teal-8 : #099268;
    --color-teal-9 : #087f5b;

    /* Box shadow */

--box-shadow-0: 0 1px 2px rgba(0, 0, 0, 0.04);
--box-shadow-1: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
--box-shadow-2: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
/* Border radius */
--border-radius-1: 3px;
--border-radius-2: 5px;
--border-radius-3: 7px;
--border-radius-4: 9px;

}
*, *::after, *::before{
margin: 0;
padding: 0;
box-sizing: inherit;


}
*:disabled{
    cursor: not-allowed;
}
html {
    font-size: 62.5%;
}
body {
    padding: 0.6rem;
    color: var(--color-grey-8);
    background-color: var(--color-grey-2);
    min-height: 100dvh;
                font-family: 'Signika', sans-serif;

overflow: hidden;
}
button{
    cursor: pointer;
}

input,
button,
text-area, 
select {
font: inherit;
color: inherit
}

`;
export default GlobalStyle;
