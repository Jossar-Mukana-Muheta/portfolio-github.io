<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn icon color="black" href="mailto:mukanamj.devpro@gmail.com" >
                <v-icon>mdi-gmail</v-icon>
              </v-btn>

              <v-btn icon color="white" href="https://github.com/Jossar-Mukana-Muheta" target="blanck">
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn icon color="white" href="https://twitter.com/MJossar">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn icon color="white" href="https://trello.com/mukanamuhetajossar/" target="blanck">
                <v-icon>mdi-trello</v-icon>
              </v-btn>

              <v-btn icon color="white" href="tel:+33760402282">
                <v-icon>mdi-phone</v-icon>
              </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Je suis un développeur web spécialisé en JavaScript, après une carrière dans les assurances, j'ai décidé de me réorienter vers un secteur que j'ai découvert et qui m'apporte énormément et dans lequel j'apprends tous les jours.
Je me consacre maintenant à me perfectionner sur VueJS et NodeJs. 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>MUKANA MUHETA jossar</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>