<template>
  <div>
    <div class="container_card">
          <v-card
          
          >
            <v-img
              src="https://images.unsplash.com/photo-1568684333861-49651af630f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              min-height="200px"
              max-height="400px"
              
              
            >
              <v-card-title >PARIS  Ile-de-France</v-card-title>
              <v-card-text class="white--text pt-0" >mukanamj.devpro@gmail.com</v-card-text>
              <v-card-text class="white--text pt-0" >07 60 40 22 82</v-card-text>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon color="#D10D2D" href="mailto:mukanamj.devpro@gmail.com" >
                <v-icon>mdi-gmail</v-icon>
              </v-btn>

              <v-btn icon color="black" href="https://github.com/Jossar-Mukana-Muheta" target="blanck">
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-btn icon color="#55acee" href="https://twitter.com/MJossar">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn icon color="#136AA7" href="https://trello.com/mukanamuhetajossar/" target="blanck">
                <v-icon>mdi-trello</v-icon>
              </v-btn>

              <v-btn icon color="green" href="tel:+33760402282">
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </v-card-actions>
            <v-spacer></v-spacer>
              <v-card-subtitle>
                N'hésitez pas à me contacter pour tous vos projets, disponibles pour tous types de contrats et de durées.  
              </v-card-subtitle>
          </v-card>
        
</div>

  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang='scss' scoped>
@import '../scss/main.scss';

.container_card{

  @include desktop{
  display: flex;
  justify-content: center;

  

  }
}

  div.v-card{

    margin: 20px;

    @include desktop{
      width: 50%;
      min-height: 600px;
      text-align: center;
    }
  }
</style>