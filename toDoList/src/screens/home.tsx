import {
  View,
  FlatList,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Task } from "../components/task";
import { styles } from "./styles";
import { useState } from "react";
import { TaskTypes } from "./types";

export function Home() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [input, setInput] = useState("");
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  function isAddButtonDisabled() {
    return input.trim() === "";
    console.log("oi");
  }

  function handleTaskAdd() {
    const newTask = {
      id: tasks.length + 1,
      taskInput: input,
      checked: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setInput("");
  }

  function handleRemoveTask(taskId: number) {
    const removedTask = tasks.find((task) => task.id === taskId);

    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    Alert.alert("Remover", `Deseja remover esta task?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(updatedTasks);
          Alert.alert("Deletado!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    if (removedTask && removedTask.checked) {
      setCompletedTasksCount((count) => count - 1);
    }
  }

  function handleToggleTaskCompleted(taskId: number, checked: boolean) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, checked } : task
    );
    setTasks(updatedTasks);

    setCompletedTasksCount((count) => (checked ? count + 1 : count - 1));
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("/Users/marianamaia/workspace/toDoList/src/img/Logo.png")}
          ></Image>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Digite sua Task'
            onChangeText={setInput}
            value={input}
            placeholderTextColor={"#808080"}
          />

          <TouchableOpacity
            onPress={handleTaskAdd}
            disabled={isAddButtonDisabled()}
            style={isAddButtonDisabled() ? styles.disabled : styles.touch}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {tasks.length > 0 && (
          <View style={styles.taskStatistics}>
            <View style={styles.totalTaskContainer}>
              <Text style={{ color: "#4EA8DE", fontWeight: "bold" }}>
                Tarefas:
              </Text>
              <Text style={styles.tasksTotal}>{tasks.length.toString()}</Text>
            </View>
            <View style={styles.totalTaskContainer}>
              <Text style={{ color: "#8284FA", fontWeight: "bold" }}>
                Tarefas Concluídas:
              </Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {completedTasksCount.toString()}
              </Text>
            </View>
          </View>
        )}

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              task={item.taskInput}
              onRemove={() => handleRemoveTask(item.id)}
              isChecked={item.checked}
              onTaskClick={(checked) =>
                handleToggleTaskCompleted(item.id, checked)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
