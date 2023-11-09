import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${p => p.theme.colors.background};
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.primaryText};
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  color: ${p => p.theme.colors.secondaryText};
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 15px;
`;
