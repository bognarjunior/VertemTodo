/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskProvider } from './src/context';

import TaskList from './src/screen/TaskList';
import AddTask from './src/screen/AddTask';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Tarefas' }} />
          <Stack.Screen name="AddTask" component={AddTask} options={{ title: 'Adicionar Tarefa' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
