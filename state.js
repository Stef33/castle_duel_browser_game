// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // UI
  activeOverlay: null,
  // World
  worldRatio: getWorldRatio(),
  // GAME
  turn: 1,
  players: [
    {
      name: 'Anne of Cleves',
      // Starting stats
      food: 10,
      health: 10,
      // Is skipping is next turn
      skipTurn: false,
      // Skiped turn last time
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false
    },
    {
      name: 'William the Bald',
      // Starting stats
      food: 10,
      health: 10,
      // Is skipping is next turn
      skipTurn: false,
      // Skiped turn last time
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false
    }
  ],
  testHand: [],
  currentPlayerIndex: Math.round(Math.random()),
  get currentPlayer () {
      return state.players[state.currentPlayerIndex]
  },
  get currentOpponentId () {
      return state.currentPlayerIndex === 0 ? 1 : 0
  },
  get currentOpponent () {
      return state.players[state.currentOpponentId]
  }
}
