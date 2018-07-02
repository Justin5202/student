<template>
  <div class="content">
    <v-header :text="text"/>
    <router-view/>
    <v-tab :name="name"></v-tab>
  </div>
</template>

<script>
import vHeader from '@/components/header/index'
import vTab from '@/components/tabbar/index'

export default {
  components: {
    vHeader,
    vTab
  },
  computed: {
    text() {
      return this.$route.meta.name
    },
    name() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
