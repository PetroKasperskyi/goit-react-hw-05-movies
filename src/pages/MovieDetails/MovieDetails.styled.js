import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

export const Button = styled(Link)`
  background: #020250;
  border: 1px solid #020250;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  text-decoration: none;

  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #4e0963;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const MovieDetTittle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #020250;
`;

export const MovieDetText = styled.p`
  font-size: 22px;
  font-weight: 600;
  
  color: #020250;
`;

export const MovieDetSubTittle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  

  color: #020250;
`;
export const MovieDetlsDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #020250;
`;

export const MovieDetPageSubTittle = styled.h3`
  font-size: 24px;
  color: #020250;
  text-align: center;
  margin-bottom: 20px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;