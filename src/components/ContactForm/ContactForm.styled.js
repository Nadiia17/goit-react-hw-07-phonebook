import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 8px;
  background-color: ${p => p.theme.colors.buttonBg};
  color: ${p => p.theme.colors.primaryText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.buttonHoverBg};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.errorColor};
  font-size: 14px;
`;
