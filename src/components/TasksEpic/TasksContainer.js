import React, { useState } from 'react';
import { View } from 'react-native';
import TaskList from './TasksList';
import TaskForm from './TaskForm';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{
        id: new Date().getTime(),
        title: "nouvelle tache",
        completed: false
    }]);

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

    return (
        <View>
            <TaskForm onAddTask={onAddTask}/>
            <TaskList onChangeStatus={_onChangeStatus} onDeleteTask={_onDeleteTask} tasks={tasks} />
        </View>
    );
}

export default TasksContainer;