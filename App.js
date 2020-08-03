import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import Header from './src/components/_shared/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20
  },
});
