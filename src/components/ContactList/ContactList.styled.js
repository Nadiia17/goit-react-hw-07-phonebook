import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 560px;
  margin: 20px auto;
`;

export const Contact = styled.li`
  background-color: ${p => p.theme.colors.listItemBg};
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 5px;
`;
