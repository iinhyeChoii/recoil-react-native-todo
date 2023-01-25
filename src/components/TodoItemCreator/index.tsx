import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../../atoms';
import IconButton from '../IconButton';
import {AddNewItemContainer, NewItemTextInput} from './styled';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = () => {
    const nextId =
      todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;

    setTodoList(oldTodoList => [
      ...oldTodoList,
      {id: nextId, text: inputValue, isComplete: false},
    ]);
    setInputValue('');
  };

  return (
    <AddNewItemContainer>
      <NewItemTextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={'Add a new Todo'}
      />
      <IconButton name={'add'} onPress={addItem} />
    </AddNewItemContainer>
  );
}
