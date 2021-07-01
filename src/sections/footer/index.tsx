import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {tryLoadUser} from '../../state/ducks/user';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 15,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const FooterSection = () => {
  const dispatch = useDispatch();

  function loadNewUser() {
    dispatch(tryLoadUser());
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={loadNewUser}>
        <Text style={styles.buttonLabel}>Gerar outro</Text>
      </TouchableOpacity>
    </View>
  );
};
