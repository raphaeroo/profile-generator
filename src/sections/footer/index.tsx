import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {tryLoadUser} from '../../state/ducks/user';
import type {UserState} from '../../state/ducks/user';

const selectUserReducer = (state: UserState) => state.user;

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
  const {loading} = useSelector(selectUserReducer);

  function loadNewUser() {
    dispatch(tryLoadUser());
  }

  const disabledStyle = {
    backgroundColor: loading ? 'gray' : 'purple',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            ...disabledStyle,
          },
        ]}
        onPress={loadNewUser}
        disabled={loading}>
        <Text style={styles.buttonLabel}>Gerar outro</Text>
      </TouchableOpacity>
    </View>
  );
};
