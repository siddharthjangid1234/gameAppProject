// 3rd Party imports
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

// Local imports
import CustomButton from '../../Components/CustomButton';
import CustomNavBar from '../../Components/CustomNavBar';
import {ToastError} from '../../Constants/ToastConstant';
import {setPlayerNames} from '../../store/Slice/gameSlice';
import styles from './styles';
import Strings from '../../Config/Strings';

const PlayerLoginScreen = () => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const dispatch = useDispatch();

  const handleContinue = () => {
    if (player1Name.trim() === '') {
      ToastError(Strings.player1Error);
      return;
    }
    if (player2Name.trim() === '') {
      ToastError(Strings.player2Error);
      return;
    }
    dispatch(setPlayerNames({player1Name, player2Name}));
  };

  return (
    <>
      <CustomNavBar title={'Login'} />
      <View style={styles.mainViewStyle}>
        <Text style={styles.headingStyle}>Player 1</Text>
        <TextInput
          style={styles.input}
          value={player1Name}
          onChangeText={setPlayer1Name}
          placeholder="Player 1 Name"
        />
        <Text style={styles.headingStyle}>Player 2</Text>
        <TextInput
          style={styles.input}
          value={player2Name}
          onChangeText={setPlayer2Name}
          placeholder="Player 2 Name"
        />
      </View>

      <CustomButton btnLabel={Strings.Continue} onPress={handleContinue} />
    </>
  );
};

export default PlayerLoginScreen;
