<template>
  <div class="my-2">
            <v-btn xs-mall color="#D10D2D" dark
            :href='lien' target="blanck"
            >{{titre}}</v-btn>
          </div>
</template>

<script>
export default {
  name: 'RedButton',
  props: [
    'titre',
    'lien'
  ]
}
</script>

<style lang='scss' scoped>
@import '../scss/main.scss';


div{
  margin: 10px;

  @include desktop{
      text-align: center;
      
    }
}
</style>