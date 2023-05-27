import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieContainer = styled.div``;
export const Form = styled.form`
  display: flex;
`;
export const Input = styled.input`
  margin-bottom: 20px;
  margin-right: 5px;
  height: 30px;
  font-size: larger;
  width: 300px;
`;
export const Button = styled.button`
  height: 35px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 10px;
`;
export const Film = styled(Link)`
  text-decoration: none;
  color: black;
`;
