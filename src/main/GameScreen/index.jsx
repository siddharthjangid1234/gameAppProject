import React from 'react';
import {Alert, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton';
import CustomNavBar from '../../Components/CustomNavBar';
import {addWin, resetGame, saveGame} from '../../store/Slice/gameSlice';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationRoutes from '../../routes/NavigationRoutes';
import { navigationRef } from '../../navigation/navigationRef';

const GameScreen = () => {
  const navigation = useNavigation();
  const {player1, player2, currentWinner, winDifference} = useSelector(
    state => state.game,
  );
  const dispatch = useDispatch();

  const handleSaveGame = () => {
    dispatch(saveGame());
    Alert.alert('Game Saved', 'The game data has been saved successfully.');
  };

  const handleResetGame = () => {
    Alert.alert(
      'Reset Game',
      'Are you sure you want to reset the game? All data will be cleared.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            dispatch(resetGame());
          },
        },
      ],
    );
  };

  return (
    <>
      <CustomNavBar title={'Game'} />
      <View style={styles.mainViewStyle}>
        <View style={styles.row}>
          <View style={styles.leftSideView}>
            <Text style={styles.playerNameStyle}>{player1.name}</Text>
            <Text style={styles.winTextStyle}>Wins: {player1.wins}</Text>
          </View>
          <CustomButton
            btnLabel={'Add win'}
            onPress={() => dispatch(addWin('player1'))}
            btnViewStyle={styles.btnViewStyle}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.leftSideView}>
            <Text style={styles.playerNameStyle}>{player2.name}</Text>
            <Text style={styles.winTextStyle}>Wins: {player2.wins}</Text>
          </View>
          <CustomButton
            btnLabel={'Add win'}
            onPress={() => dispatch(addWin('player2'))}
            btnViewStyle={styles.btnViewStyle}
          />
        </View>

        <View style={styles.seperator} />

        <Text style={styles.blackTextStyle}>
          Win difference: {winDifference}
        </Text>
        <Text style={styles.playerNameStyle}>
          Current winner: {currentWinner}
        </Text>
      </View>

      <View style={styles.btnMainContainer}>
        <View style={styles.leftSideViewStyle}>
          <CustomButton btnLabel={'Reset Game'} onPress={handleResetGame} />
        </View>
        <View style={styles.rightSideView}>
          <CustomButton btnLabel={'Save Game'} onPress={handleSaveGame} />
        </View>
      </View>
    </>
  );
};

export default GameScreen;
