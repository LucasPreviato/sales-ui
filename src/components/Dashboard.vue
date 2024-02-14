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
        v-for="(product, index) in displayedProducts"
        :key="index"
      >
        <v-img
          v-if="product.Product.photos && product.Product.photos.length > 0"
          :src="product.Product.photos[0].url"
          height="80"
        />
      </v-avatar>
    </div>
    <v-toolbar color="transparent" class="pr-1 mt-n2">
      <v-toolbar-title class="text-white">Produtos Populares</v-toolbar-title>
      <v-spacer />
      <span class="text-caption text-white">Ver mais</span>
      <v-btn
        density="compact"
        color="grey"
        icon="mdi mdi-chevron-right-box"
      ></v-btn>
    </v-toolbar>
    <h6 class="text-white ml-4 mt-n4">
      <span class="text-red">20+ novos</span> produtos adicionadas essa semana
    </h6>
    <div class="d-flex justify-space-evenly mt-4" color="transparent">
      <v-card
        color="transparent"
        v-for="(product, index) in displayedProducts"
        :key="index"
      >
        <v-img
          v-if="product.Product.photos && product.Product.photos.length > 0"
          :src="product.Product.photos[0].url"
          height="70"
          class="imag"
        />
        <v-card class="mt-n10" width="160" color="#303030">
          <v-card-item class="text-center">
            <v-card-title class="mt-10">
              {{ product.Product.name }}
            </v-card-title>
            <v-card-subtitle>
              <span class="me-1">Preço</span>
            </v-card-subtitle>
            <v-card-title>
              {{ product.Product.brand }}
            </v-card-title>
          </v-card-item>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-icon color="yellow" icon="mdi mdi-star" size="small"/>
              <div class="text-grey ms-4">
              <h6></h6>  
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { computed } from "vue";

export default {
  name: "Dashboard",

  setup() {
    const products = ref({ total: 0, showing: 0, result: [] });
    const currentPage = ref(1);
    const itemsPerPage = 5;
    const isLoading = ref(false);
    const isSearching = ref(false);
    const searchedProducts = ref([]);

    const fetchProducts = async () => {
      isLoading.value = true;

      const delay = 3000;

      await new Promise((resolve) => setTimeout(resolve, delay));

      try {
        const response = await axios.get("https://api.plugg.to/products", {
          headers: {
            Authorization: `Bearer e9da48da607f4426f94d2403eb90ad5a56114bca`,
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

    const displayedProducts = computed(() => {
      return products.value.result.slice(0, itemsPerPage);
    });

    return {
      products,
      isLoading,
      displayedProducts,
    };
  },
};
</script>

<style scoped>
.mRigth {
  margin-right: 100px;
}

.mLeft {
  margin-left: 90px;
}

.v-list {
  background: transparent !important;
}

.imag {
  z-index: 9999 !important;
}
</style>
