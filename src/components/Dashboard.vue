<template>
  <div>
    <v-text-field
      density="compact"
      placeholder="Pesquise pelo SKU ou Nome"
      append-inner-icon="mdi-magnify"
      variant="outlined"
      rounded
      class="text-grey mx-8"
    ></v-text-field>
    <v-toolbar color="transparent" class="pr-1 mt-n7">
      <v-toolbar-title class="text-white">Categorias</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="text-caption text-white">Ver mais</span>
      <v-btn
        density="compact"
        color="grey"
        icon="mdi mdi-chevron-right-box"
      ></v-btn>
    </v-toolbar>
    <h6 class="text-white ml-4 mt-n4">
      <span class="text-red">10+ novas</span> categorias adicionadas essa semana
    </h6>
    <div class="d-flex justify-space-evenly mt-4" color="transparent">
      <v-avatar
        color="#605850"
        size="70"
        v-for="(product, index) in products.result"
        :key="index"
      >
      <v-img
          v-if="product.photos && product.photos.length > 0"
          :src="product.photos[0].url"
          width="10px%"
          height="10px"
        ></v-img>
      </v-avatar>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "Dashboard",

  setup() {
    const products = ref({ total: 0, showing: 0, result: [] });
    const isLoading = ref(false);

    const fetchProducts = async () => {
      isLoading.value = true;

      const delay = 3000;

      await new Promise(resolve => setTimeout(resolve, delay));

      try {
        const response = await axios.get("https://api.plugg.to/products", {
          headers: {
            Authorization: `Bearer 19bad9f89552473f98616d583f25c0b1025d5684`,
          },
        });
        console.log("Produtos da API:", response.data);
        products.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      isLoading,
    };
  },
};

</script>

<style scoped></style>
