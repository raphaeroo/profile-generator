import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The best profile generator</Text>
    </View>
  );
};
