<template lang="pug">
v-navigation-drawer.my-navigation-drawer(
  width="250",
  dark,
  color="#1772f3",
  fixed,
  v-bind="{ value }"
  @input="$emit('input', $event)"
)
  v-layout(column fill-height)
    v-list.py-0(dense)
      v-list-item.title__logo.justify-center
        v-icon.title__close(@click="$emit('input', false)") mdi-close
      template(v-for="category in data")
        v-list-item(
          :to="category.url",
          link
          active-class="g-list-item--is-active"
        )
          v-list-item-icon.justify-center.align-center
            v-icon {{category.icon}}
          v-list-item-title {{category.label}}
    v-spacer
    v-list.px-0(dense)
</template>


<script>
export default {
  name:'sidebar',
  props: {
    value: {
      type: Boolean
    }
  },
  data (){
    return {
      data: [
        {
          label:"Products",
          icon:"mdi-earth",
          url:"/product"
        },
        {
          label:"Users",
          icon:"mdi-pencil",
          url:"/user"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-navigation-drawer {
    & .v-navigation-drawer__image {
      opacity: 0.7;
    }
    .title__logo {
      margin-top: 10px;
      margin-bottom: 10px;
      .title__close {
        position: absolute;
        top: -2px;
        right: 30px;
      }
    }

    .g-list-item--is-active {
      .v-icon {
        height: 8px;
        width: 8px;
        visibility: visible;
      }
    }
    
  }
</style>