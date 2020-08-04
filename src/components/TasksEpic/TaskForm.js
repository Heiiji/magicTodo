import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const TaskForm = ({}) => {
    const [title, setTitle] = useState("");

    const _onChangeText = (value) => {
        setTitle(value);
    }

    const _onPressBtn = () => {

    }

    return  <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput value={title} onChangeText={_onChangeText} ></TextInput>
        </View>
        <Button title="Ajouter" onPress={_onPressBtn} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    containerInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        paddingLeft: 7
    }
})

export default TaskForm;