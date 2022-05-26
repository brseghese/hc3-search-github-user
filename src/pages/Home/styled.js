import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.25rem 0 0 0.25rem;
  height: 1.5rem;
  padding: 0 0.5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.6rem;
  border: 1px solid #000;
  background: #333;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0 0.5rem;
`;

export const ErroMessage = styled.span`
  display: block;
  font-size: 0.8rem;
  color: red;
  font-weight: 600;
  font-family: sans-serif;
  margin-top: 1rem;
`;
