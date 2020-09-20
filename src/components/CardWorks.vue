<template>
<div class="work">
<v-hover v-for="(item, idx) in allWorks"
:key="idx"
 >
  <template v-slot="{ hover }">
  <v-card
    class="mx-auto"
    min-width="300"
    :class="`elevation-${hover ? 24 : 6}`"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.image"
    >
      <v-card-title >{{item.client}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{item.catégorie}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <p class="justify">{{item.description_1}}</p>
      <p class="justify">{{item.description_2}}</p>

      <v-card-actions>
      <v-btn
        color="#D10D2D"
        text
        :href="item.lien"
        target="blanck"
      >
        Visitez
      </v-btn>
    </v-card-actions>
    </v-card-text>

    
  </v-card>
  </template>
      </v-hover>
      </div>
</template>

<script>
export default {
  name: 'Projet',
  computed:{
    allWorks(){
      return this.$store.state.works
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../scss/main.scss';

  .v-card_title{
    color: $red;
  }

  .work{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include desktop{
      flex-direction: row;
      flex-wrap: wrap;
    }

    div.v-card{
      margin-bottom: 20px;

      @include desktop{
        width: 30%;
        height: 400px;
        margin-bottom: 60px;
        margin-top: 60px;
      }
    }
  }
 p{
   line-height: 15px;
   margin-bottom: 2px;
   font-size: 14px;
 }
  
</style>