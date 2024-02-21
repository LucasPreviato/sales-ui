<template>
  <v-app
    is="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <v-main>
      <v-container class="ml-3">
        <v-row>
          <v-col cols="3" class="d-flex pl-0 ml-0">
            <ProductsFilters />
          </v-col>
          <v-col cols="9" class="pl-0 ml-0">
            <v-data-table
              v-model:expanded="expanded"
              density="compact"
              :headers="headers"
              :loading="isLoading"
              :items="products.result"
              class="text-white bg-grey-darken-3"
              show-expand
            >
              <template v-slot:expanded-row="{ columns, item }">
                <tr>
                  <td :colspan="columns.length">
                    <v-data-table
                      :headers="variationHeaders"
                      :items="item.Product.variations"
                      :loading="isLoading"
                      class="text-white bg-grey-darken-3"
                      item-key="id"
                      hide-default-footer
                    ></v-data-table>
                  </td>
                </tr>
              </template>
              <template v-slot:loading>
                <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon size="small" class="me-2" @click="editItem(item)"
                  >mdi-pencil</v-icon
                >
                <v-icon size="small" @click="deleteItem(item)"
                  >mdi-delete</v-icon
                >
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

import ProductsFilters from "@/components/filters/ProductsFilters.vue";

export default {
  name: "ProductsPage",

  setup() {
    // Definindo variáveis reativas
    const expanded = ref([]);
    const products = ref({ total: 0, showing: 0, result: [] });
    const isLoading = ref(false);

    // Token de acesso para a API
    const accessToken = "65220ddb978d6747934239a0a64d8baa061428c5";

    // Cabeçalho da tabela

    const headers = [
      {
        title: "SKU",
        align: "start",
        sortable: false,
        value: "Product.sku",
      },
      { title: "Nome", value: "Product.name", align: "start" },
      { title: "Preço", value: "Product.price", align: "start" },
      { title: "Estoque", value: "Product.quantity", align: "start" },
      { title: "Ações", value: "actions", sortable: false, align: "start" },
      { title: "Variações", key: "data-table-expand", align: "center" },
    ];

    const variationHeaders = [
      { title: "SKU", value: "sku", align: "start", sortable: false },
      { title: "Nome", value: "name" },
      { title: "Preço", value: "price" },
      { title: "Quantidade", value: "quantity" },
      // Adicione mais cabeçalhos conforme necessário
    ];

    // Função para buscar os produtos
    const fetchProducts = async () => {
      isLoading.value = true;

      // Simulando um atraso de 3 segundos
      const delay = 3000;
      await new Promise((resolve) => setTimeout(resolve, delay));

      try {
        // Fazendo a requisição GET para a API
        const response = await axios.get("https://api.plugg.to/products", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Exibindo os produtos na console
        console.log("Produtos da API:", response.data);
        // Atualizando os produtos na variável reativa
        products.value = response.data;
      } catch (error) {
        // Lidando com erros na busca dos produtos
        console.error("Erro ao buscar produtos:", error);
      } finally {
        // Finalizando a operação de busca
        isLoading.value = false;
      }
    };

    // Chamando a função fetchProducts quando o componente é montado
    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      isLoading,
      headers,
      variationHeaders,
      expanded,
    };
  },
};
</script>

<style></style>
