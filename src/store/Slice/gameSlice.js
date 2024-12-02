// store.js
import { createSlice } from '@reduxjs/toolkit';
// Create a slice for the game state
const gameSlice = createSlice({
  name: 'game',
  initialState: {
    player1: {name: '', wins: 0},
    player2: {name: '', wins: 0},
    currentWinner: '',
    winDifference: 0,
    isGameScreenVisit: false,
  },
  reducers: {
    setPlayerNames: (state, action) => {
      const {player1Name, player2Name} = action.payload;
      state.player1.name = player1Name;
      state.player2.name = player2Name;
      state.isGameScreenVisit = true;
    },
    addWin: (state, action) => {
      const player = action.payload;
      state[player].wins += 1;
      const {player1, player2} = state;
      state.winDifference = Math.abs(player1.wins - player2.wins);
      state.currentWinner =
        player1.wins > player2.wins ? player1.name : player2.name;
    },
    saveGame: state => {
      console.log('Game saved:', state);
    },
  },
});
export const {setPlayerNames, addWin, saveGame} = gameSlice.actions;
export default gameSlice.reducer;
