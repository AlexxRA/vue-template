<template lang="pug">
.header.px-8
  Sidebar(v-model="drawer")
  v-app-bar(
    color="background",
    fixed,
    elevate-on-scroll,
  )
    v-app-bar-nav-icon(@click="drawer = true")
      v-icon(style="font-size: 35px;", color="primary") mdi-apps
    v-divider.header__divider(vertical, inset)
    v-toolbar-title.ml-4.h1.primary--text(data-cy="header__title") {{ this.title }}
    v-spacer
    v-divider.header__divider(vertical, inset)
    v-icon.ml-4.geodis-banner(fill="#3200E6") $logo

</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
   components: {
    Sidebar,
  },
  data: () => ({
    drawer: false,
    title: 'WELCOME TO MY APP'
  }),
}
</script>

<style lang="scss" scoped>
.header {
  & .geodis-banner {
    width: 105px;
    height: 37px;
  }
  &__divider {
    background: #404040;
    max-height: 35px;
    border-radius: 1px;
    opacity: 0.3;
  }
}
</style>