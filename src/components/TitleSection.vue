<template>
<div>
  <h2>
    {{titre}}
  </h2>
  <p>
    {{anglais}}
  </p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: [
    'titre',
    'anglais'
  ]

}
</script>

<style lang="scss" scoped>
  @import '../scss/main.scss';

  h2{
    color: $black;
    text-align: center;
    margin-top: 40px;
  }
  p{
    color: $red;
    margin: -16px;
    text-align: center;
    margin-bottom: 40px;
    font-size: 13px;
  }
</style>