<template lang="pug">
v-main.px-10
  v-progress-linear(    
    :active="reload"
    color="white",
    absolute,
    top
  )
  v-row
    v-col
      h1 INDEX HOME ROUTE
      p this is the home component, route /


</template>

<script>

export default {
  data () {
    return {
      reload: false
    }
  }
}
</script>
