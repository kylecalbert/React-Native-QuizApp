import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView, Button, View } from 'react-native';

import styles from './Starter.style.js';

const Starter = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate('Quiz')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Starter;
