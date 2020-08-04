import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faTrashAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';


const TaskTiles = ({ item, onChangeStatus, onDeleteTask }) => {
    return <TouchableOpacity onPress={() => onChangeStatus(item.id)}>
        <View style={styles.container}>
            <View style={styles.subContainer}>
                {
                    item.completed ? 
                        <FontAwesomeIcon style={styles.icon} icon={faCheckCircle} size={25} color={"blue"} /> : 
                        <FontAwesomeIcon style={styles.icon} icon={faCircle} size={25} color={"blue"} />
                }
                <Text style={[styles.title, { color: item.completed ? 'lightgrey' : 'black' }]}>{ item.title }</Text>
            </View>
            <TouchableOpacity onPress={() => onDeleteTask(item.id)}>
                <FontAwesomeIcon style={styles.icon} icon={faTrashAlt} size={25} color={"blue"} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    icon: {

    },
    container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        width: '80%'
    },
    title: {
        marginLeft: 10
    }
})

export default TaskTiles;