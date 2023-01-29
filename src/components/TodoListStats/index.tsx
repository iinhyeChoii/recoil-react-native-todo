import React from 'react';
import {useRecoilValue} from 'recoil';
import {todoListStatsState} from '../../atoms';
import {Text} from 'react-native';
import {StatsContainer, Row, StatsTitle, StatsValue} from './styled';

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
    <StatsContainer>
      <Row>
        <StatsTitle>Total</StatsTitle>
        <StatsValue>{totalNum}</StatsValue>
      </Row>
      <Row>
        <StatsTitle>Completed</StatsTitle>
        <StatsValue>{totalCompletedNum}</StatsValue>
      </Row>
      <Row>
        <StatsTitle>Uncompleted</StatsTitle>
        <StatsValue>{totalUncompletedNum}</StatsValue>
      </Row>
      <Row>
        <StatsTitle>Completed percent</StatsTitle>
        <StatsValue>{formattedPercentCompleted}%</StatsValue>
      </Row>
    </StatsContainer>
  );
}
