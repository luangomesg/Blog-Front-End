import styled from 'styled-components';

export const Main = styled.main`
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const Posts = styled.div`
  width: 100%;
  max-width: 740px;
  border: 3px solid #e6e6e6;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  background-color: #ebebeb;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const P = styled.p`
  color: #333;
  margin-top: 10px;
  cursor: pointer;


  &.modal-autor {
    color: #fff;

  }

  &.corpo {
    margin-top: 20px;
    text-transform: capitalize;
    color: #333;
  }

  &.corpo-title {
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 24px;
    cursor: auto;
    color: #fff;
  }

  &.corpo-comments {
    margin-top: 20px;
    text-transform: capitalize;
    margin-left: 20px;
    cursor: auto;
    color: #fff;

    &::before {
      content: "";
      position: absolute;
      width: 40px;
      height: 2px;
      left: 9px;
      margin-top: 7px;
      background-color: red;
    }
  }
`;

export const H2 = styled.h2`
  text-transform: capitalize;
  color: #333;
  text-align: center;

  &.comentario {
    margin: 20px 0;
    color: #fff;
  }

  &.modal-title {
    color: #fff;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d4059;
  color: #fff;
  width: 100%;
  height: 100px;
  gap: 10px;
  margin-bottom: 20px;

  h1 {
    letter-spacing: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 200px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
`;

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
      width: 28px;
      height: 2px;
      background-color: red;
      left: 10px;
      margin-top: 5px;
    }
  }
`;

export const Email = styled.p`
  position: relative;
  margin-left: 10px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    left: -32px;
    width: 2px;
    height: 40px;
    margin-top: 5px;
    background-color: red;
  }
`;

export const PersonPicture = styled.div`
  display: flex;
  justify-content: center;
  background-color: #6c757d;
  width: 100%;
  height: 25%;
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
`;

export const PPerfil = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

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

    p {
        font-size: 20px;
    }
  }
`;




