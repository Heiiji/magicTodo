import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TaskList from './TasksList';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{
        title: "nouvelle tache",
        completed: false
    }]);

    return (
        <View>
            <TaskList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;