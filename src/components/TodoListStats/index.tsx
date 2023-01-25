import React from 'react';
import {useRecoilValue} from 'recoil';
import {todoListStatsState} from '../../atoms';
import {Text} from 'react-native';

/**
 * totalNum: todo 항목들의 총개수
 * totalCompletedNum: 완료된 todo 항목들의 총개수
 * totalUncompletedNum: 완료되지 않은 todo 항목들의 총개수
 * formattedPercentCompleted: 완료된 항목의 백분율
 */
export default function TodoListStats() {
  const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <>
      <Text>Total items: {totalNum}</Text>
      <Text>Items completed: {totalCompletedNum}</Text>
      <Text>Items not completed: {totalUncompletedNum}</Text>
      <Text>Percent completed: {formattedPercentCompleted}</Text>
    </>
  );
}
