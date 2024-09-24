import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {itemId} = route.params; // Get the itemId from the route params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default DetailScreen;
