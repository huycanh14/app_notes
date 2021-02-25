<template>
  <div id="app">
    <router-view/>
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
