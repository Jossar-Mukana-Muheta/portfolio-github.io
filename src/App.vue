<template>
  <v-app>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import '../scss/main.scss';

body{
      margin: 0;
    overflow: hidden;
    padding: 0;
    height: 100%;

}
</style>

