import styled from 'styled-components';

export const ListReviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ItemReviews = styled.li`
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #a04986;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
`;

export const TitleReviews = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
  color: #020250;
`;

export const TextReviews = styled.p`
  color: #020250;
  font-size: 18px;
`;