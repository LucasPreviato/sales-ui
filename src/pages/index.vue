<template>
    <v-app is="inspire" :style="{background: $vuetify.theme.themes.light.colors.primary}">
        <SideBar />
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="8">
                    <Dashboard />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="js" setup>
import Dashboard from '@/components/Dashboard.vue';
import SideBar from '@/components/SideBar.vue';

</script>



<style scoped>

.mRigth {
    margin-right: 100px;
}

.mLeft {
    margin-left: 90px;
}

.v-list{
    background: transparent !important;
}

.imag{
    z-index: 9999 !important;

}


</style>