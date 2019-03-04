<template>
  <v-app>
    <v-container align-center>
      <v-layout
        row
        align-content-center
        justify-space-between
        style="height: 50px;"
      >
        <div class="name">
          ::/rangga_adhitya
        </div>
        <div class="nav-menu">
          <nuxt-link to="#">
            Home
          </nuxt-link>
          <span class="separator">/</span>
          <nuxt-link to="#">
            About Me
          </nuxt-link>
          <span class="separator">/</span>
          <nuxt-link to="#">
            Contact
          </nuxt-link>
        </div>
      </v-layout>
      <v-content>
        <v-layout row wrap justify-center style="padding-top: 40px;">
          <nuxt />
        </v-layout>
      </v-content>
    </v-container>
    <v-footer height="100px">
      <v-layout row wrap justify-center>
        <a href="http://instagram.com/denev3">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            size="lg"
            :style="{ color: '#555d6d' }"
          />
        </a>
        <div class="separator"></div>
        <a href="http://facebook.com/kurai.ikari">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="lg"
            :style="{ color: '#555d6d' }"
          />
        </a>
        <div class="separator"></div>
        <a href="http://github.com/deneuv34">
          <font-awesome-icon
            :icon="['fab', 'github']"
            size="lg"
            :style="{ color: '#555d6d' }"
          />
        </a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cousine:400,700|Roboto+Slab:700&subset=latin-ext');

.name {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  opacity: 0.8;
}
.separator {
  margin: 7.5px;
}

a {
  text-decoration: none;
  color: #555d6d;
}

a::after {
  text-decoration: none;
}

a:hover {
  color: black;
}

div.container {
  text-align: center;
}
.nav-menu {
  font-family: 'Cousine', monospace;
  font-size: 16px;
  color: #555d6d;
}
.separator {
  color: #536dfe;
}
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
