import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RecoilRoot} from 'recoil';
import TodoList from './screens/TodoList';

function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        <TodoList />
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
