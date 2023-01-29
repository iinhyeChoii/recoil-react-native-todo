import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListFilterState} from '../../atoms';
import {ButtonContainer, ButtonText, FilterContainer} from './styled';
import Pressable from '../Pressable';

export default function TodoListFilters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const filterList = ['All', 'Completed', 'Uncompleted'];

  return (
    <FilterContainer>
      {filterList.map((item, index) => {
        const isActive = index === activeIndex;
        const isFirst = index === 0;
        const isNotFirst = index !== 0;
        const isLast = index === filterList.length - 1;

        return (
          <View
            style={{flex: 1, zIndex: isActive ? 1 : 0}}
            key={index.toString()}>
            <Pressable
              onPress={() => {
                setActiveIndex(index);
                setFilter(item);
              }}>
              <ButtonContainer
                style={[
                  isActive && {borderColor: '#6366f1'},
                  isFirst && {
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                  isNotFirst && {marginLeft: -2},
                  isLast && {
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                ]}>
                <ButtonText isActive={isActive}>{item}</ButtonText>
              </ButtonContainer>
            </Pressable>
          </View>
        );
      })}
    </FilterContainer>
  );
}
