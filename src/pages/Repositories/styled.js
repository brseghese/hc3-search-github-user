import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #333;
  color: #fff;
  padding: 0.5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  padding: 0.5rem 0.5rem;
  margin: 2rem auto;
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
  background-color: #333;
  color: #fff;
`;
