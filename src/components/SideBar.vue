<template>
    <v-navigation-drawer v-model="drawer" color="#2B2B2B">
      <div class="pa-4">
          <v-img src="/p1.webp" width="150" height="150px" class="ml-9"></v-img>
      </div>
      <v-card  class="rounded-e-xl me" width="60" height="400" color="#545454"></v-card>
      <v-list class="top">
          <v-list-item v-for="(item, i) in navegationLinks" :key="i" :value="item" class="mb-5" color="#FF6259" variant="plain">
              <template v-slot:append="{isActive}">
               <div v-if="isActive" class="a"></div>
              </template>
              <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
              </template>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  import { ref } from 'vue'
    
  export default {
      name: 'SideBar',
      data() {
          return {
              drawer: null,
              navegationLinks: [
                  {text:"Dashboard", icon:"mdi-view-dashboard"},
                  {text:"Pedidos", icon:"mdi-cart"},
                  {text:"Produtos", icon:"mdi-package-variant-closed"},
                  {text:"Relatórios", icon:"mdi-file-chart"},
                  {text:"Logout", icon:"mdi-logout"}
              ],
              cards: ["Hoje","Amanhã"]
          } 
      }
  }
  </script>
  
 

<style scoped>

.v-list-item.v-list-item--active.v-list--link.border

.v-theme--light.text-red.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text {
    color: white !important;
}
  .top{
    margin-top: 60px;
  }
  .me{
    position: absolute;
    margin-top: 28px;
  }
  .v-locale--is-ltr .rounded-e-xl {
    border-top-right-radius: 44px !important;
    border-bottom-right-radius: 44px !important;
  }

  .a{
    top: 32%;
    left: 20.5%;
    position: absolute;
    height: 15px;
    width: 15px;
    background: linear-gradient(-90deg,#545454,#545454 50%,black 50%);
    border-radius: 50%;

  }

</style>