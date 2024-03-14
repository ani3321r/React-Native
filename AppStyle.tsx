import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppStyle(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //in react native this property brings items left to right
    justifyContent: 'center', //it brings items top to bottom
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppStyle;
