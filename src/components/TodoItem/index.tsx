import React from 'react';
import {Todo} from '../../types';
import {useRecoilState} from 'recoil';
import {todoListState} from '../../atoms';
import {
  CheckBoxButton,
  EditItemTextInput,
  TodoItemContainer,
  TodoTitleContainer,
} from './styled';
import IconButton from '../IconButton';

/**
 * TodoItem 컴포넌트는 todo 리스트의 값을 표시하는 동시에 텍스트를 변경하고 항목을 삭제할 수 있다.
 * 우리는 todoListState를 읽고,
 * 항목 텍스트를 업데이트하고, 완료된 것으로 표시하고, 삭제하는 데 사용하는 setter 함수를 얻기 위해
 * useRecoilState()를 사용한다.
 */
type Props = {
  item: Todo;
};

export default function TodoItem(props: Props) {
  const {item} = props;

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = (value: string) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <TodoItemContainer>
      <TodoTitleContainer>
        <CheckBoxButton
          name={!item.isComplete ? 'check-box-outline-blank' : 'check-box'}
          onPress={toggleItemCompletion}
        />
        <EditItemTextInput value={item.text} onChangeText={editItemText} />
      </TodoTitleContainer>
      <IconButton name={'delete'} onPress={deleteItem} />
    </TodoItemContainer>
  );
}

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
