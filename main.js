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
    <card :def="testCard" @click.native="handlePlay" />
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
    handlePlay () {
      console.log('You played a card!')
    }
  }
})

// Window resize handling
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})
