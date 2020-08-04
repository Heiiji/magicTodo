import React from 'react';
import { FlatList, Text } from 'react-native';
import TaskTiles from './TaskTiles';

const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
    return <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskTiles onDeleteTask={onDeleteTask} onChangeStatus={onChangeStatus} item={item} />}
        keyExtractor={item => `${item.id}`}
    />;
}

export default TasksList;