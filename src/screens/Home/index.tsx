import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from './styles';
import Counter from "../../components/Counter";
import { useState } from "react";
import Task, { ITask } from "../../components/Task";

export default function Home() {

    const [tasks, setTasks] = useState<ITask[]>([])
    const [taskName, setTaskName] = useState('')

    function handleAddTask() {
        if (taskName.length === 0) {
            return showAlert('Ops…', 'Você não pode adicionar uma tarefa sem texto')
        }
        const task: ITask = {
            name: taskName,
            isFinished: false
        }
        setTasks(prevState => [task, ...prevState])
        setTaskName('')
    }

    function handleRemoveTask(task: ITask) {
        removeTaskAlert(task)
    }

    function handleCheckTask(task: ITask) {
        task.isFinished = !task.isFinished
        setTasks(prevState => [...prevState.filter(item => item.name !== task.name), task])
    }

    function showAlert(title: string, message: string) {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'Ok',
                    onPress: () => { },
                }
            ]
        )
    }

    function removeTaskAlert(task: ITask) {
        Alert.alert(
            "Remover tarefa",
            `Deseja remover a tarefa ${task.name}?`,
            [
                {
                    text: 'Sim',
                    onPress: () => setTasks(prevState => [...prevState.filter(item => item.name !== task.name)]),
                    style: "destructive"
                },
                {
                    text: 'Não',
                    style: "cancel"
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={taskName.length > 0 ? styles.inputFocused : styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onChangeText={setTaskName}
                    value={taskName}
                />
                <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask}>
                    <Image source={require('../../../assets/ic_add.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerCounter}>
                <Counter isFinished={false} counting={tasks.length} />
                <View style={{ flex: 1 }} />
                <Counter isFinished counting={tasks.filter(item => item.isFinished).length}/>
            </View>

            <View style={styles.separator} />

            <FlatList
                data={tasks}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Task
                        name={item.name}
                        isFinished={item.isFinished}
                        onCheck={() => { handleCheckTask(item) }}
                        onRemove={() => { handleRemoveTask(item) }} />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyView}>
                        <Image source={require('../../../assets/ic_clipboard.png')} />
                        <Text style={styles.txtEmptyTitle}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.txtEmptyBody}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />

        </View>
    )
}