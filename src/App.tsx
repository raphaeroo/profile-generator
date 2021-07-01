import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {HeaderSection, BodySection, FooterSection} from './sections';

import {appStore} from './state/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <Provider store={appStore}>
      <SafeAreaView style={styles.container}>
        <HeaderSection />
        <BodySection />
        <FooterSection />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
