<template>
  <div id="app" class="container-fluid">
    <MainHeader />
    <router-view class="view" style="z-index: 1" />
    <MainFooter />
  </div>
</template>
<script>
  import MainHeader from '@/components/utils/MainHeader';
  import MainFooter from '@/components/utils/MainFooter';
  export default {
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>
<style>
body > * {
    -webkit-transition: all 2s ease-out;
  -moz-transition: all 2s ease-out;
  -o-transition: all 2s ease-out;
  transition: all 2s ease-out;
}
  body,
  html {
    scroll-behavior: smooth;
  }

  body {
    position: relative;
    min-height: 110vh;
    overflow-y: scroll;
    background: url('/bg-mb.jpg');
    background-position: top;
    background-attachment: fixed;
    background-size: 110%;
    background-repeat: no-repeat;
    font-size: 1.2rem !important;
  }

  body::after {
    content: "";
    background: radial-gradient(rgba(0, 0, 0, 0.9), rgba(2, 0, 3, 1));
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  #app {
    position: relative;
    z-index: 5;
    padding-right: 0;
    padding-left: 0;
  }

  .border-radius-big {
    border-radius: 25px !important;
  }

  .border-radius {
    border-radius: 10px !important;
  }

  .btn-purple {
    position: absolute;
    bottom: 5px;
    right: 5%;
    left: 5%;
    max-width: 90%;
    background-color: #612db6 !important;
    color: #fff !important;
    font-weight: bold !important;
    font-size: 1.5rem !important;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  }
.btn-purple:hover {
  bottom: 7px;
}
.box-shadow {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
}
  @media (min-width: 992px) {
    body {
      background: url('/bg.gif');
      background-position: top;
      background-attachment: fixed;
      background-size: 120%;
      background-repeat: no-repeat;
    }
  }
</style>