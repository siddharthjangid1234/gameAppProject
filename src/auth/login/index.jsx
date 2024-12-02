import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import NavigationRoutes from '../../routes/NavigationRoutes';
import {setPlayerNames} from '../../store';
import styles from './styles';

const PlayerLoginScreen = () => {
  const navigation = useNavigation();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setPlayerNames({player1Name, player2Name}));
    navigation.navigate(NavigationRoutes.gameScreen);
  };
  return (
    <View style={styles.container}>
      <Text>Player 1 name</Text>
      <TextInput
        style={styles.input}
        value={player1Name}
        onChangeText={setPlayer1Name}
      />
      <Text>Player 2 name</Text>
      <TextInput
        style={styles.input}
        value={player2Name}
        onChangeText={setPlayer2Name}
      />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default PlayerLoginScreen;
