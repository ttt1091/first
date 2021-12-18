import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
    };
    getUser();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.ListItems}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Header title="Header" />
      <View style={styles.container}>
        <Text>開運吉日カレンダー</Text>
        
        
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: 'lightgray',
                height: 1,
              }}
            ></View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  ListItems: {
    padding: '.5rem ',
  },
});
