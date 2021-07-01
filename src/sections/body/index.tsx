import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {useSelector} from 'react-redux';

import type {UserState} from '../../state/ducks/user';

import {ProfileContainer} from '../../components';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const selectUserReducer = (state: UserState) => state.user;

export const BodySection = () => {
  const user = useSelector(selectUserReducer);

  if (user.userName === '') {
    return (
      <View style={styles.container}>
        <Text>Crie um perfil apertando o botão abaixo</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user.loading ? (
        <>
          <ActivityIndicator size="large" color="purple" />
        </>
      ) : (
        <>
          <ProfileContainer
            name={user.userName}
            age={user.userAge}
            location={user.location}
            email={user.email}
            phone={user.phone}
            image={user.avatar}
          />
        </>
      )}
    </View>
  );
};
