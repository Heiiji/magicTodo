import React, { useState } from 'react';
import { View, Text } from 'react-native';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{
        title: "nouvelle tache",
        completed: false
    }]);

    return (
        <View>
            <Text>{ tasks[0].title }</Text>
        </View>
    );
}

export default TasksContainer;