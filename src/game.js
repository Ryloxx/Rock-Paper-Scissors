import { writable } from 'svelte/store';
const picks = ['rock', 'paper', 'scissors'];
const strenghTriangle = {
  rock: {
    win: 'scissors',
    loose: 'paper',
  },
  paper: {
    win: 'rock',
    loose: 'scissors',
  },
  scissors: {
    win: 'paper',
    loose: 'rock',
  },
};
function getInitialState() {
  return {
    playerPick: null,
    housePick: null,
    done: false,
    winner: null,
    score: 0,
  };
}
export const game = writable(getInitialState());

export function restart() {
  game.update((state) => {
    state = { ...getInitialState(), score: state.score };
    return state;
  });
}
export function housePick() {
  const randInt = Math.floor(Math.random() * picks.length);
  game.update((state) => {
    state.housePick = picks[randInt];
    return state;
  });
}

export function pick(type) {
  if (!type in picks) {
    throw new Error(
      `Unknown pick type must be one of: ${this.picks.join(',')}`,
    );
  }
  game.update((state) => {
    state.playerPick = type;
    return state;
  });
}
function getWinner(pick1, pick2) {
  if (strenghTriangle[pick1]?.win === pick2) {
    return 0;
  }
  if (strenghTriangle[pick2]?.win === pick1) {
    return 1;
  }
  return -1;
}
game.subscribe((state) => {
  if (!state.done && state.housePick && state.playerPick) {
    game.update((innerState) => {
      innerState.done = true;
      const winner = getWinner(state.playerPick, state.housePick);
      innerState.winner = winner;
      innerState.score += winner === 0 ? 1 : winner === 1 ? -1 : 0;
      innerState.score = Math.max(0, innerState.score);
      return innerState;
    });
  }
});
