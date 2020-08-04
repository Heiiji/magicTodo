import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';


const TaskTiles = ({ item }) => {
    return <View style={styles.container}>
        <View style={styles.subContainer}>
            <FontAwesomeIcon style={styles.icon} icon={faCircle} size={25} color={"blue"} />
            <Text style={styles.title}>{ item.title }</Text>
        </View>
        <FontAwesomeIcon style={styles.icon} icon={faTrashAlt} size={25} color={"blue"} />
    </View>;
}

const styles = StyleSheet.create({
    icon: {

    },
    container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    title: {
        marginLeft: 10
    }
})

export default TaskTiles;