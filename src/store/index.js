import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    works: [
      {catégorie: "Web Developpement - (Freelance)", client: "Association JESSE", description_1: "Création site web de l'association, création d'un dashboard administrateur", description_2: "Réalisé avec VueJS le back-end est réalisé avec NodeJS, création d'une API express. Hébergé avec AWS", image:"https://images.unsplash.com/photo-1413977808283-c0c106512928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80", lien:"https://asso-jesse.fr"},
      {catégorie: "Front-end - (Projet d'étude)", client: "Orinoco", description_1: "Création Front-end site e-commerce Appareil photo vintage", description_2: "Réalisé avec JavaScript, interaction avec une API", image:"https://images.unsplash.com/photo-1545951068-c54894657ae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", lien:"https://jossar-mukana-muheta.github.io/Orinoco.github.io/"},
      {catégorie: "Back-end - (Projet d'étude)", client: "So Peckocko", description_1: "Création d'une API pour site culinaire", description_2: "Réalisé avec NodeJs, Express, MongoDB", image:"https://images.unsplash.com/photo-1569783221530-20e82d1915fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80", lien:"https://github.com/Jossar-Mukana-Muheta/So_Peckocko-Backend"},
      
    ]
  },

  getters:{
    allWorks(){
      return this.$store.works;
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
