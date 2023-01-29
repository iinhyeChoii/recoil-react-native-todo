import styled from 'styled-components/native';

export const FilterContainer = styled.View`
  padding-vertical: 24px;
  padding-horizontal: 20px;
  flex-direction: row;
`;

export const ButtonContainer = styled.View<{
  isActive: boolean;
}>`
  border-width: 1.5px;
  border-color: ${props => (props.isActive ? 'blue' : '#e5e7eb')};
  align-items: center;
  justify-content: center;
  padding-vertical: 8px;
`;

export const ButtonText = styled.Text<{
  isActive: boolean;
}>`
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.isActive ? 'blue' : '#6b7280')};
`;
