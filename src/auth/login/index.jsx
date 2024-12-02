import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from '../../Components/CustomButton';
import CustomNavBar from '../../Components/CustomNavBar';
import { setPlayerNames } from '../../store/Slice/gameSlice';
import styles from './styles';

const PlayerLoginScreen = () => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setPlayerNames({player1Name, player2Name}));
  };
  return (
    <>
      <CustomNavBar title={'Login'} />
      <View style={styles.mainViewStyle}>
        <Text style={styles.headingStyle}>Player 1 name</Text>
        <TextInput
          style={styles.input}
          value={player1Name}
          onChangeText={setPlayer1Name}
          placeholder="Player 1 Name"
        />
        <Text style={styles.headingStyle}>Player 2 name</Text>
        <TextInput
          style={styles.input}
          value={player2Name}
          onChangeText={setPlayer2Name}
          placeholder="Player 2 Name"
        />
      </View>

      <CustomButton btnLabel={'Continue'} onPress={handleContinue} />
    </>
  );
};

export default PlayerLoginScreen;
