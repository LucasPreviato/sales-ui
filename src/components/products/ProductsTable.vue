<template>
  <v-row>
    <v-col cols="3" class="d-flex ma-n4">
      <v-app class="ma-n4 bg-light-green-darken-1">
        <v-container class="mx-7 mt-5 pl-1">
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
    </v-col>
    <v-col cols="9" class="d-flex pl-12">
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
            <td :colspan="columns.length">{{ item.name }}</td>
          </tr>
        </template>
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon size="small" class="me-2" @click="editItem(item)"
            >mdi-pencil</v-icon
          >
          <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "ProductsTable",
  setup() {
    // Definindo variáveis reativas
    const products = ref({ total: 0, showing: 0, result: [] });
    const isLoading = ref(false);

    // Token de acesso para a API
    const accessToken = "eb9f169326c6f76cf839aa88ddaf2487639f64d3";

    // Cabeçalho da tabela

    const headers = [
      {
        title: "SKU",
        align: "start",
        sortable: false,
        value: "Product.sku",
      },
      { title: "Nome", value: "Product.name" },
      { title: "Preço", value: "Product.price" },
      { title: "Estoque", value: "Product.quantity" },
      { title: "Ações", value: "actions", sortable: false },
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
    };
  },
};
</script>

<style scoped></style>
