import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import { styles } from "./styles";
import { Svg, SvgUri } from "react-native-svg";
type Props = {
  task: string;
  onRemove: () => void;
  isChecked: boolean;
  onTaskClick: (isChecked: boolean) => void;
};
export function Task({ task, isChecked, onTaskClick, onRemove }: Props) {
  return (
    <>
      <TouchableOpacity
        style={styles.taskContainer}
        onPress={() => onTaskClick(!isChecked)}
      >
        <TouchableOpacity onPress={() => onTaskClick(!isChecked)}>
          {isChecked ? (
            <SvgUri
              width='30'
              height='30'
              uri='/Users/marianamaia/workspace/toDoList/src/img/checked.svg' // substitua pelo seu caminho SVG
            />
          ) : (
            <SvgUri
              width='30'
              height='30'
              uri='/Users/marianamaia/workspace/toDoList/src/img/unchecked.svg' // substitua pelo seu caminho SVG
            />
          )}
        </TouchableOpacity>
        <Text style={isChecked ? styles.checkedText : styles.uncheckedText}>
          {task}
        </Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={onRemove}
        >
          <SvgUri
            width='20'
            height='20'
            uri='/Users/marianamaia/workspace/toDoList/src/img/trash.svg' // substitua pelo seu caminho SVG
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
