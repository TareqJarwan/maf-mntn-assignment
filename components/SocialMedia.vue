<template>
  <div class="app__social">
    <p>FOLLOW US</p>
    <img src="../assets/images/instgram-icon.svg" alt="instgram" />
    <img src="../assets/images/twitter-icon.svg" alt="twitter" />
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
};
</script>

<style>
.app__social {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  align-items: center;
  z-index: 10000;
}

.app__social p {
  font-family: "Roboto";
  font-style: normal;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  transform: rotate(90deg);
  margin-bottom: 5rem;
  transition: all 0.3s ease-in-out;
}

.app__social img {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 2000px) {
  .app__social img {
    width: 70px;
    height: 70px;

    margin: 0.5rem 0;
  }
}

@media screen and (max-width: 500px) {
  .app__social {
    display: none;
  }
}
</style>
