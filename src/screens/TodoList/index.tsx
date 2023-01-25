import React, {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {todoListState} from '../../atoms';
import TodoItemCreator from '../../components/TodoItemCreator';
import {ListRenderItem} from 'react-native';
import TodoItem from '../../components/TodoItem';
import {Todo} from '../../types';
import {TodoListContainer, TodoFlatList} from './styled';
import TodoListFilters from '../../components/TodoListFilters';
import TodoListStats from '../../components/TodoListStats';

export default function TodoList() {
  // useRecoilValue로 todoListState atom 항목을 읽어 온다.
  const todoList = useRecoilValue(todoListState);

  const renderItem: ListRenderItem<Todo> = useCallback(
    ({item}) => <TodoItem item={item} />,
    [],
  );

  return (
    <TodoListContainer>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoFlatList data={todoList} renderItem={renderItem} />
    </TodoListContainer>
  );
}
