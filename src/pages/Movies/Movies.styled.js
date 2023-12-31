import styled from 'styled-components';

export const SearchButton = styled.button`
  background: #020250;
  border: 1px solid #020250;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #020250;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  outline: 1px solid #020250;
  border-radius: 3px;
  min-width: 130px;
  height: 24px;
  margin: 8px;
  padding-left: 5px;
`;

export const SearchList = styled.ul`
  font-size: 18px;
`;