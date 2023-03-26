import styled from 'styled-components';

export const Main = styled.main`
    background-color: #151729;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    

`


export const ContainerPosts = styled.div`
     display: grid;
     grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
    gap: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`

export const Posts = styled.div`
    width: 100%;
    max-width: 740px;
    border: 3px solid #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    background-color: #252948;
    

`

export const P = styled.p`
    color: #fff;
    margin-top: 5px;
    cursor: pointer;
    &.corpo {
        margin-top: 10px;
        text-transform: capitalize;
        margin-top: 20px; 
    }

    &.corpo-title {
        margin-top: 10px;
        text-transform: capitalize;
        margin-top: 20px; 
        cursor: auto;
    }

    &.corpo-comments {
        margin-top: 10px;
        text-transform: capitalize;
        margin-left: 20px;
        cursor: auto;

        &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 2px;
            left: 10px;
            margin-top: 7px;
            background-color: red;
        }
    }
`

export const H2 = styled.h2`
        text-transform: capitalize;
        color: #fff;
        text-align: center;

        &.comentario {
            margin: 20px 0;
        }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 80px;
    gap: 10px;
    margin-bottom: 20px;

    h1 {
        letter-spacing: 5px;
    }
    
`

export const Input = styled.input`
    width: 100%;
    max-width: 200px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px;
`

export const CloseButton = styled.button`
    width: 20px;
    height: 20px;
    align-self: flex-end;
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
        height: 20px;
    }
`

export const ContainerComments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    padding: 5px;

    div {
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 5px;

        &::before {
        content: "";
        position: absolute;
        width: 13px;
        height: 2px;
        background-color: red;
        left: 10px;
        margin-top: 5px;
    }
    }
    
`

export const Email = styled.p`

    &::before {
        content: "";
        position: absolute;
        left: 10px;
        width: 2px;
        height: 32px;
        margin-top: 5px;
        background-color: red;
    }
`

export const PersonPicture = styled.div`
display: flex;
justify-content: center;
background-color: #2f4f4f;
width: 100%;
height: 20%;
border-radius: 10px;
margin-bottom: 50px;
    
    div {
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    border-radius: 50%;
    
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

export const PPerfil = styled.p`
    text-align: center;
`

export const Informations = styled.div`
    display: flex;
    height: 50%;
    
    
    
    div {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        height: 100%;
        justify-content: center;
        
    }
`



