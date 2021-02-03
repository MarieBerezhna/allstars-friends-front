<template>
  <div id="app" class="container">
          <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
    <img alt="Vue logo" src="./assets/logo.png">
        <router-view class="view"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
