import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Styles';
import {Task} from './App';

interface itemProps {
  item: Task;
  markDone: (task: Task) => void;
  deleteFunction: (task: Task) => void;
}

export default function RenderItem({
  item,
  markDone,
  deleteFunction,
}: itemProps) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.title}
        </Text>
        <Text style={item.done ? styles.textDone : styles.text}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Alerta', '¿Seguro que quieres eliminar la tarea?', [
              {text: 'Si', onPress: () => deleteFunction(item)},
              {text: 'No'},
            ])
          }
          style={styles.removeButton}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
