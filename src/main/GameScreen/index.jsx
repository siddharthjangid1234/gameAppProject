import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addWin, saveGame} from '../../store';
import styles from './styles';

const GameScreen = () => {
  const {player1, player2, currentWinner, winDifference} = useSelector(
    state => state.game,
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>{player1.name}</Text>
        <Text>Wins: {player1.wins}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addWin('player1'))}>
          <Text>Add win</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>{player2.name}</Text>
        <Text>Wins: {player2.wins}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addWin('player2'))}>
          <Text>Add win</Text>
        </TouchableOpacity>
      </View>
      <Text>Win difference: {winDifference}</Text>
      <Text>Current winner: {currentWinner}</Text>
      <Button title="Save Game" onPress={() => dispatch(saveGame())} />
    </View>
  );
};

export default GameScreen;
