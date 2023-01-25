import {atom, selector} from 'recoil';
import {Todo} from '../types';

/**
 * [ Atoms ]
 *
 * Atoms는 애플리케이션 상태의 source of truth를 갖는다.
 * todo 리스트에서 source of truth는
 * todo 아이템을 나타내는 객체로 이루어진 배열이 될 것이다.
 */
// atom 리스트를 todoListState라고 하고 이것을 atom() 함수를 이용해 생성
export const todoListState = atom<Todo[]>({
  key: 'todoListState', // 고유한 키
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

/**
 * Selector는 파생된 상태(derived state)의 일부를 나타낸다.
 * 파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수 함수에 전달된 상태의 결과물로 생각할 수 있다.
 *
 * 필터링 된 Todo 리스트 : 전체 todo 리스트에서 일부 기준에 따라 특정 항목이 필터링 된 새 리스트(예: 이미 완료된 항목 필터링)를 생성되어 파생된다.
 * Todo 리스트 통계 : 전체 todo 리스트에서 목록의 총 항목 수, 완료된 항목 수, 완료된 항목의 백분율 같은 리스트의 유용한 속성들을 계산하여 파생된다.
 */
// 필터 옵션: "Show All"(기본값), "Show Completed", "Show Uncompleted"
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
