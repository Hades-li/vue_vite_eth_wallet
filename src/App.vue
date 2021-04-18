<template>
  <layout></layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './layout/index.vue'

export default defineComponent({
  name: "App",
  components: {
    Layout
    // HelloWorld
  }
})
</script>

