<template>
  <div class="icon-container">
    <div>
      <img  src="../assets/front-end.png"/>
      <h5>FRONT-END</h5>
    </div>
    <div>
      <img  src="../assets/back-end.png"/>
      <h5>BACK-END</h5>
    </div>
    <div>
      <img src="../assets/responsive.jpg"/>
      <h5>RESPONSIVE DESIGN</h5>
    </div>
    <div>
      <img src="../assets/seo.png"/>
      <h5>SEO</h5>
    </div>
    <div>
      <img src="../assets/mobile.jpg"/>
      <h5>MOBILE APP</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
};
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';


.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @include desktop{
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  div{
    margin-bottom: 30px;
    text-align: center !important;
  }
}

img{
    height: 100px !important;
    
}

h5{
      text-align: center;
}
</style>
