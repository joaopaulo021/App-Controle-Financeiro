import styled from "styled-components";

export const Container = styled.div `
max-width:1120px;
margin:20px auto;
width:98%;
background-color:#fff;
box-shadow: 0px 0px 5px #ccc;
border-radius:5px;
display:flex;
justify-content:space-around;
padding:15px 0px;
gap:10px;

@media(max-width:750px){
    display:grid;
}

`

export const InputContent = styled.div `
display:flex;
flex-direction:column;

`
export const Label = styled.label `



`

export const Input = styled.input `
outline:none;
border-radius:5px;
padding:5px 10px;
font-size:15px;
border:1px solid #ccc;
`

export const RadioGroup = styled.div `
display:flex;
justify-content:center;
align-items:center;

input{
    margin-left:20px;
    margin-right:5px;
    margin-top:3px;
    text-align:center;

}
`

export const Button = styled.button `
padding:5px 10px;
border:none;
border-radius:5px;
margin-left:10px;
cursor:pointer;
color:white;
background: linear-gradient(to bottom, #2980b9, #6ab2e8);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

@media (max-width: 750px) {
padding:15px;
`