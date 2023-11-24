import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Todo = ({ text, onDelete }) => {
  return (
    <View>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;