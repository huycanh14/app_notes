<template>
  <div id="app">
    <div class="content" id="content">
      <router-view/>
    </div>
    <Menu></Menu>
  </div>
</template>
<script>
    import Menu from "./views/layouts/Menu.vue"
    export default {
        components: {
            Menu
        }
        
    }
</script>

<style lang="scss" scoped>

</style>
