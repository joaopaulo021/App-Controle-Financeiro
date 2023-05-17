import styled from "styled-components";

export const Container = styled.div `
display:flex;
flex-direction:column;
align-items: center;
background-color:#fff;
border-radius:5px;
padding:5px 15px;
height:100%;
width: 30%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0);

@media (max-width: 750px) {
width:29vw;
padding:0;
margin:0px;
height:70%;

`

export const Header = styled.header `
display:flex;
align-items:center;
justify-content:space-around;
width:100%;
gap:10px;
margin:20px auto;

svg {
width:25px;
height:25px;
}

`
export const HeaderTitle = styled.p `
font-size:1rem;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

`

export const Total = styled.span `
font-size:1.5rem;
font-weight:bold;
color:#000000;

@media(max-width:750px) {
width:30vw;
text-align:center;
white-space:nowrap;
font-size:1rem;

}
@media(max-width:350px) {
font-size:0.8rem;
}

`