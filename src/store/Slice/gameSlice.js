import {createSlice} from '@reduxjs/toolkit';

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
      if (state.winDifference === 0) {
        state.currentWinner = 'Tie';
      } else {
        state.currentWinner =
          player1.wins > player2.wins ? player1.name : player2.name;
      }
    },
    saveGame: state => {
      console.log('Game saved:', {
        player1: state.player1,
        player2: state.player2,
        currentWinner: state.currentWinner,
        winDifference: state.winDifference,
      });
    },
    resetGame: state => {
      state.player1 = {name: '', wins: 0};
      state.player2 = {name: '', wins: 0};
      state.currentWinner = '';
      state.winDifference = 0;
      state.isGameScreenVisit = false;
    },
  },
});

export const {setPlayerNames, addWin, saveGame, resetGame} = gameSlice.actions;
export default gameSlice.reducer;
