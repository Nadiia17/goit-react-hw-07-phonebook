import styled from 'styled-components';
import { FiUser, FiUserX } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';

export const ContactItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactText = styled.div`
  width: 200px;
  margin: 0;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background-color: ${p => p.theme.colors.secondaryText};
  color: ${p => p.theme.colors.background};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primaryText};
  }
`;

export const StyledContactIcon = styled(FiUser).attrs({
  size: '1.2em',
})`
  margin-right: 8px;
  vertical-align: middle;
  color: ${p => p.theme.colors.primaryText};
`;

export const StyledDeleteContact = styled(FiUserX).attrs({
  size: '1.2em',
})`
  margin-right: 8px;
  vertical-align: middle;
  color: ${p => p.theme.colors.background};
`;

export const StyledPhoneIcon = styled(AiOutlinePhone).attrs({
  size: '1.2em',
})`
  margin-right: 8px;
  vertical-align: middle;
  color: ${p => p.theme.colors.primaryText};
`;
