new Vue({
  name: 'game',
  el: '#app',
  data: state,

  template: `<div id="#app">
    <top-bar
     :turn="turn"
     :current-player-index="currentPlayerIndex"
     :players="players"
    />
    <transition name="hand">
      <hand :cards="testHand" v-if="!activeOverlay" :cards="test-Hand"/>
    </transistion>
  </div>`,
  mounted () {
    console.log(this.$data === state)
  },
  computed: {
    testCard () {
      return cards.archers
    }
  },
  methods: {
    play () {
        this.$emit('play')
    },
    createTestHand () {
        const cards = []
        // Get the possible ids
        const ids = Object.keys(cards)

        // Draw 5 cards
        for (let i = 0; i < 5; i++) {
            cards.push(testDrawCard())
        }

        return cards
    },
    testDrawCard() {
        // Choose a card at random with the ids
        const ids = Object.keys(cards)
        const randomId = ids[Math.floor(Math.random() * ids.length)]
        // Return a new card with the definition
        return {
            // Unique id for the card
            uid: cardId++,
            // Id of the definition
            id: randomId,
            // Definition
            def: cards[randomId]
        }
    },
    handlePlay () {
      console.log('handle play event', 'color=', color, 'number', number)
    },
    created () {
        this.testHand = this.createTestHand()
    }
  }
})

// Window resize handling
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})
