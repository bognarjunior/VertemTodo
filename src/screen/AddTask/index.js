import React, { useState, useContext } from 'react';
import { View, TextInput } from 'react-native';
import { TaskContext } from '../../context';
import { styles } from './styles';

import  Button  from '../../components/button';

export default function AddTask({ navigation }) {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova Tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
}

