import React, {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {filteredTodoListState} from '../../atoms';
import TodoItemCreator from '../../components/TodoItemCreator';
import {ListRenderItem, Text, View} from 'react-native';
import TodoItem from '../../components/TodoItem';
import {Todo} from '../../types';
import {
  TodoListContainer,
  TodoFlatList,
  EmptyMessageContainer,
  EmptyMessage,
} from './styled';
import TodoListFilters from '../../components/TodoListFilters';
import TodoListStats from '../../components/TodoListStats';
import TodoListTitle from '../../components/TodoListTitle';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  const renderItem: ListRenderItem<Todo> = useCallback(
    ({item}) => <TodoItem item={item} />,
    [],
  );

  const renderListEmptyComponent = (
    <EmptyMessageContainer>
      <EmptyMessage>🙅️</EmptyMessage>
    </EmptyMessageContainer>
  );

  return (
    <TodoListContainer>
      <TodoListTitle />
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilters />
      <TodoFlatList
        data={todoList}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </TodoListContainer>
  );
}
