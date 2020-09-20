<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="white lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list nav dense>
        <v-list-item-group v-model="item" color="white">
          <v-list-item 
          v-for="(item, idx) in link" 
          :key="idx"
          
          >
            <v-list-item-content>
              <v-list-item-title>
                <a :href="item.lien">
                  {{item.titre}}
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      height="300px"
      app
      color="#3B3B3B"
      dense
      dark
      shrink-on-scroll
      src="https://images.unsplash.com/photo-1499428665502-503f6c608263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      fade-img-on-scroll
      
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        color="#D10D2D"
      
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-card-title class="headline">MUKANA <span> MUHETA </span>Jossar</v-card-title>
      
     
      <v-spacer></v-spacer>
     
      
      <v-btn 
      v-for="(elt, idy) in link" 
      :key="idy"
      class="hidden-sm-and-down" text>
        <a :href="elt.lien">
          {{elt.titre}}
        </a>
      </v-btn>
      
    
    </v-app-bar>
    
    
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      appTitle: "JMM",
      drawer: false,
      item: 0,
      link : [
        {titre : "Accueil", lien: "/"},
        {titre : "BIO", lien: "#Bio"},
        {titre : "PROJETS", lien: "#Projet"},
        {titre : "CONTACT",lien: "#Contact"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

button {
  margin-top: 10px !important;

  @include desktop{
    margin-top: 0px !important;
  }

  a{
    color: $white;
  }
}

span{
  color: $red;
  margin-left: 5px;
  margin-right: 5px;
}

</style>