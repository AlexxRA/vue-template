<template lang="pug">
v-app
  div
    v-main.banner
      Header
      router-view(style="margin-top: 56px;")
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>