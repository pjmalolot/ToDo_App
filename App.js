import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Todo from './Todo';

export default function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText) {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const styles = StyleSheet.create({
    appTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#CE5A67',
      paddingTop: 30,  // Adds additional padding to the top
      paddingRight: 10, // Adds additional padding to the right
      paddingBottom: 30, // Adds additional padding to the bottom
      paddingLeft: 20, // Adds additional padding to the left
      marginTop:30,
    },

  });

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View>
      <Text style={styles.appTitle}>MY TASK LIST</Text>
      <TextInput
        placeholder="Enter a task"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button title="Add" onPress={addTodo} />
      <ScrollView>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ScrollView>
    </View>
  );
}