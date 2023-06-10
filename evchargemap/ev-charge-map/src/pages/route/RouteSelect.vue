<template>
    <q-page id="routeSelect">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                Select Route
            </q-toolbar-title>
            <q-btn flat round dense icon="more_vert" />
        </q-toolbar>

        <div class="q-pa-md form-style">
            <div class="text-h6 q-pb-md">
                Where would you like to go?
            </div>
            <q-input outlined stack-label label="From">
                <template v-slot:append>
                    <q-icon name="close"></q-icon>
                </template>
            </q-input>
            <q-input class="q-pt-md" outlined stack-label label="To">
                <template v-slot:append>
                    <q-icon name="close"></q-icon>
                </template>
            </q-input>

            <div class="q-pt-md">
                <q-btn color="black" class="full-width" label="Search"></q-btn>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});

</script>
<style lang="scss">
#routeSelect {
    .form-style {
        margin: 0 auto;
        max-width: 500px;
        height: calc(100vh - 180px);
    }

}
</style>
