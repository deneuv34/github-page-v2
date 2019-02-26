<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 1}`"
      flat
      style="border-radius: 8px; text-align: left;"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${number * 5 + 10}`"
        :lazy-src="`https://picsum.photos/500/300?image=${number * 5 + 10}`"
        class="grey lighten-2"
        height="200px"
        style="border-radius: 8px 8px 0px 0px;"
      />
      <div class="post-content">
        <span class="post-title">{{ posts[0].title }}</span>
        <p class="post-body">
          {{ posts[0].body }}
        </p>
      </div>
    </v-card>
  </v-hover>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab|Lato:700&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Cousine:400,700&subset=latin-ext');

.post-body {
  font-family: 'Roboto Slab', serif;
  color: black;
  opacity: 0.5;
}
.post-content {
  padding: 12px;
}

.post-title {
  font-family: 'Lato', sans-serif;
  font-size: 30px;
}
</style>

<script>
export default {
  name: 'ArticleCard',
  props: ['number'],
  data() {
    return {
      posts: [
        {
          title: 'In incididunt occaecat est anim esse cupidatat.',
          body:
            'Voluptate voluptate ea sint aliquip excepteur exercitation cupidatat commodo aute. Id elit sit do fugiat cillum esse id sit. Eiusmod sint sunt consequat ea Lorem fugiat amet elit nulla excepteur nostrud amet.',
          author: 'Rangga Adhitya',
          created_at: '2019-02-10',
          image:
            'https://static1.squarespace.com/static/55b1f88ae4b0a18248916f3f/t/5afa6b23758d4621615999ab/1526360893977/IMG_4939.jpg?format=1000w'
        }
      ]
    }
  }
}
</script>
