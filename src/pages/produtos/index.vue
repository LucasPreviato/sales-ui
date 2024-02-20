<template>
  <v-app
    is="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <v-main>
        <v-container>
            <v-row>
            <v-col cols="12" sm="8">
              <ProductsTable />
            </v-col>
            </v-row>
        </v-container>
    </v-main>

  </v-app>
</template>

<script>
import ProductsTable from "@/components/products/ProductsTable.vue";
export default {
  name: "Products",
};
</script>

<style></style>
