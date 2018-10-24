Vue.component('top-bar', {

  template: `<div class="top-bar" :class="'player-' + currentPlayerIndex">
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <img class="arrow" src="svg/turn.svg" />
      <div class="turn">Turn</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>`,
  props: ['players', 'currentPlayerIndex', 'turn'],
  created () {
    console.log(this.players)
  }

})

Vue.component('card', {
  props: ['def'],
  template: `<div class="card" :class="'type-' + def.type" @click="handlePlay">
    <div class="title">{{ def.title }}</div>
    <img class="separator" src="svg/card-separator.svg" />
    <div class="description"><div v-html="def.description"></div></div>
    <div class="note" v-if="def.note"><div v-html="def.note"></div></div>
  </div>`
})

Vue.component('hand', {
    template: `<div class="hand">
      <div class="wrapper">
        <transition-group name="card" tag="div" class="cards">
          <card v-for="card of cards" :key="card.uid" :def="card.def" @play="handlePlay(card)"/>
        </transition-group>
      </div>
    </div>`,
    props: ['cards']
})
