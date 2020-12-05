<template>
  <div id="nav">
    <!-- {{ $store.state.storage.accessToken }} -->
    {{ $t('message.hello') }}
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="changeLanguage('zh_CN')">zh_CN</button>
    <button @click="changeLanguage('en_US')">en_US</button>
    <button></button>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$store.commit('storage/setLanguage', lang)
      this.$i18n.locale = lang
    }
  },
  mounted() {
    console.log(this)
    // 持久化
    // this.$store.commit('storage/setAccessToken', 'token')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
