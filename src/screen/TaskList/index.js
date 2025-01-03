import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../../context';
import { styles } from './styles';

export default function TaskList({ navigation }) {
  const { tasks, toggleTaskStatus, clearCompletedTasks } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTaskStatus(item.id)}>
            <Text style={[styles.task, item.completed && styles.completed]}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask')} />
      <Button title="Limpar Concluídas" onPress={clearCompletedTasks} />
    </View>
  );
}

