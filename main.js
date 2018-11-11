new Vue({
  name: 'game',
  el: '#app',
  data: state,

  template: `<div id="#app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />

    <div class="world">
        <castle v-for="(player, index) in players" :index="index" :player="player"/>
        <div class="land"/>
    </div>

    <transition name="hand">
      <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
    </transition>

    <transition name="fade">
        <div class="ovarlay-background" v-if="activeOverlay" />
    </transition>

    <transition name="zoom">
        <overlay v-if="activeOverlay" :key="activeOverlay">
            <component :is="'overlay-content-' + activeOverlay"
                :player="currentPlayer" :opponent="currentOpponent"
                :players="players"/>
        </overlay>
    </transition>
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
    handleClick () {
        thos.$emit('close')
    },
    handlePlay (card) {
      this.$emit('card-play', card)
    },
    testPlayCard (card) {
      // Remove the card from player hand
      const index = this.testHand.indexOf(card)
      this.testHand.splice(index, 1)
    },
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
            uid: cardUid++,
            // Id of the definition
            id: randomId,
            // Definition
            def: cards[randomId]
        }
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

// Tween.js
requestAnimationFrame(time);

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
