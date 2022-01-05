<template>
  <div class="home h-100">
    <h1>T-Shirt</h1>
    <div class="t-shirt position-relative">
      <img class="mw-100 mh-100" :src="'/tshirt-' + fill + '.svg'"/>
      <img class="t-shirt-feature position-absolute" src="/product.png"/>
    </div>
    <div class="color-choice d-inline-block mx-2"
         v-for="color in colors"
         :key="color"
         :style="{ 'background-color': color }"
         @mouseover="fill = color">
    </div>
    <router-link class="d-block" :to="{ name: 'Buy' }">BUY</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    fill: 'black',
    colors: ['black', 'blue', 'green', 'pink', 'red']
  })
}
</script>

<style>
.t-shirt-feature {
  top: 10%;
  left: 26%;
  width: 40%;
}

.color-choice {
  width: 10vw;
  height: 10vw;
  background-color: orange;
}
</style>