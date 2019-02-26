<template>
  <div>
    <v-layout row justify-center>
      <h1 class="tagline">
        Hello, I'm Rangga. I develop web app at somewhere.
      </h1>
    </v-layout>
    <v-layout row justify-center>
      <nuxt-link style="text-decoration: none;" to="#">
        <div class="more-button">
          More About Me
        </div>
      </nuxt-link>
    </v-layout>
    <section />
    <v-container grid-list-lg fluid>
      <div style="text-align: left;">
        <h1 class="stories">
          :/Stories
        </h1>
      </div>
      <v-layout row wrap>
        <v-flex v-for="n in 6" :key="n" sm4 xs4>
          <ArticleCard :number="n" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700|Lato:700&subset=latin-ext');

section {
  height: 100px;
}
.stories {
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
  margin-bottom: 15px;
  opacity: 0.8;
}
.tagline {
  font-family: 'Lato', sans-serif;
  font-size: 45px;
  width: 700px;
}

.more-button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  margin-top: 40px;
  color: #fff;
  background-color: #651fff;
  border-radius: 8px;
  padding: 20px 20px 20px 20px;
}
</style>
