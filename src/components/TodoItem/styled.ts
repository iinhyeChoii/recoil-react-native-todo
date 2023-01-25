import styled from 'styled-components/native';
import IconButton from '../IconButton';

export const TodoItemContainer = styled.View`
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-bottom-width: 1px;
  border-color: #0000001f;
`;

export const TodoTitleContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const CheckBoxButton = styled(IconButton)`
  margin-right: 5px;
`;

export const EditItemTextInput = styled.TextInput`
  flex: 1;
  margin-right: 20px;
`;
