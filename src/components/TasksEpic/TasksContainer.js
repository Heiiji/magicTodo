import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './TasksList';
import TaskForm from './TaskForm';
import CountersContainer from './CountersContainer';
import FloatingButton from '../_shared/FloatingButton';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{
        id: new Date().getTime(),
        title: "nouvelle tache",
        completed: false
    }]);
    const [isFormOpened, setIsFormOpened] = useState(false);

    const onAddTask = (title) => {
        const newTask = {
            id: new Date().getTime(),
            title,
            completed: false
        };
        setTasks([newTask, ...tasks]);
    }

    const _onChangeStatus = (id) => {
        let newTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(newTasks);
    }

    const _onDeleteTask = (id) => {
        let newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened);
    }

    return (
        <View style={styles.container}>
            {
                isFormOpened && <TaskForm onAddTask={onAddTask}/>
            }
            <CountersContainer nbTasks={tasks.length} nbTasksCompleted={tasks.filter(task => task.completed).length} />
            <TaskList onChangeStatus={_onChangeStatus} onDeleteTask={_onDeleteTask} tasks={tasks} />
            <FloatingButton isFormOpened={isFormOpened} toggleForm={toggleForm} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})

export default TasksContainer;