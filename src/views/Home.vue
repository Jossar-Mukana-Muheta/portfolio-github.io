<template>
  <div class="home">
    <div class="navbar">
      <TheNavbar />
    </div>
    <div class="main">
      <section class="About" id="Bio">
        <Title titre="A PROPOS..." anglais="ABOUT ME" />
        <Icon />
        <div>
          <div class="backgroundImg"></div>
          <h1>Développeur Full Stack VuesJs/NodeJS</h1>
          <p>
            Développeur front-end Vue Js passionné et perfectionniste, je suis
            disponible pour participer avec vous à tous vos projets
            d'application web, site vitrine, e-commerce ou application mobile.
          </p>
          <p>
            Développement de toute la partie front-end en respectant le cahier
            des charges et les bonnes pratiques pour une expérience utilisateur
            optimale et une optimisation des performances
          </p>
          <p>
            Développement de la partie Back-end : création d'API, communication
            avec la base de données en adoptant les bonnes pratiques en terme de
            sécurité et de performance </p>
            <p>
            Développeur back-end NodeJs, j'utilise
            Expresse pour la création d'API Rest associé avec une base de donnée
            MongoDB, capable aussi de gérer la partie déploiement avec Amazon web
            service ou Heroku
          </p>

          <RedButton
            titre="Visitez mon Github"
            lien="https://github.com/Jossar-Mukana-Muheta"
          />

          <div class="chiffre">
            <div class="chiffre_item">
              <span>01</span>
              <div class="texte">
                <h3>Expérience utilisateur optimale</h3>
                <p>UI/UX Design</p>
              </div>
            </div>
            <div class="chiffre_item">
              <span>02</span>
              <div class="texte">
                <h3>Utilisation des dernières technologies</h3>
                <p>VuesJs,NodeJS,MongoDB,AWS,Mocha</p>
                <p></p>
              </div>
            </div>
            <div class="chiffre_item">
              <span>03</span>
              <div class="texte">
                <h3>Travail en équipe</h3>
                <p>Github, Trello, Slack</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="realisation" id="Projet">
        <Title titre="MES REALISATION" anglais="MY WORKS" />
        <div class="realisation_item">
          <Projet />
        </div>
      </section>
      <section class="contact" id="Contact">
        <Title titre="CONTACT" anglais="STAY IN TOUCH" />
        <Contact />
      </section>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavbar from "@/components/TheNavbar";
import Title from "@/components/TitleSection";
import Icon from "@/components/SkilsIcon";
import RedButton from "@/components/ButtonLarge";
import Projet from "@/components/CardWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/TheFooter";

export default {
  name: "Home",
  components: {
    TheNavbar,
    Title,
    Icon,
    RedButton,
    Projet,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.backgroundImg {
  background-image: url("https://images.unsplash.com/photo-1581893106728-1e2197903b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80");
  height: 400px;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  margin: 10px;

  @include desktop {
    margin-bottom: 70px;
  }
}

h2 {
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
}

h1 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
  color: $black !important;
}

p {
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  color: $gray-texte;
  margin: 10px;
  text-align: center;
}

.about {
  @include desktop {
    margin-right: 120px;
    margin-left: 120px;
  }

  .my-2 {
    @include desktop {
      text-align: center;
      margin: 50px !important;
    }
  }
}

.chiffre {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  @include desktop {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 70px;
  }

  .chiffre_item {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 6px;
    margin-bottom: 10px;

    span {
      color: $red;
      position: relative;
      font-weight: 400;
      font-size: 50px;
      line-height: 1;
    }

    h3 {
      font-size: 18px;
      margin: 0px;
      margin-left: 15px;
    }

    p {
      margin: 0px;
      margin-left: 15px;
      text-decoration: underline;
      text-align: left;
    }
  }
}

.realisation {
  background-color: $gray-background;
  height: 100%;
  padding-top: 11px;
  padding-bottom: 10px;
  margin-top: 20px;

  .realisation_item {
    margin: 20px;
  }
}
</style>
