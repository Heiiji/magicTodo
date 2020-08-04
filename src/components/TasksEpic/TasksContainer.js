import React, { useState } from 'react';
import { View } from 'react-native';
import TaskList from './TasksList';
import TaskForm from './TaskForm';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{
        title: "nouvelle tache",
        completed: false
    }]);

    const onAddTask = (title) => {
        const newTask = {
            title,
            completed: false
        };
        setTasks([newTask, ...tasks]);
    }

    return (
        <View>
            <TaskForm onAddTask={onAddTask}/>
            <TaskList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;