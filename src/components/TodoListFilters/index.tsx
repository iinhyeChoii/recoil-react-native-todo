import React from 'react';
import {useRecoilState} from 'recoil';
import {Picker} from '@react-native-picker/picker';
import {todoListFilterState} from '../../atoms';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <Picker
      selectedValue={filter}
      onValueChange={itemValue => setFilter(itemValue)}>
      <Picker.Item label="All" value="Show All" />
      <Picker.Item label="Completed" value="Show Completed" />
      <Picker.Item label="Uncompleted" value="Show Uncompleted" />
    </Picker>
  );
}
