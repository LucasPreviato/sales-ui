<template>
  <v-app class="ma-n4 bg-light-green-darken-1">
    <v-container class="mx-7 mt-5 pl-4">
      <h4 class="mb-5">Filtros</h4>
      <v-list-item class="pl-0">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          placeholder="SKU"
          variant="outlined"
          rounded
          class="text-white"
        ></v-text-field>
      </v-list-item>
      <v-list-item class="pl-0">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          placeholder="Categoria"
          variant="outlined"
          rounded
          class="text-white"
        ></v-text-field>
      </v-list-item>
      <v-list-item class="pl-0">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          placeholder="Quantidade"
          variant="outlined"
          rounded
          class="text-white"
        ></v-text-field>
      </v-list-item>
    </v-container>
  </v-app>
</template>


<script>
export default {
  name: "ProductsFilters",
};
</script>