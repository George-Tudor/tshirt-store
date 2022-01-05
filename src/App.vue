<template>
  <div id="app" class="h-100">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 60px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 32px;
  }
}

</style>