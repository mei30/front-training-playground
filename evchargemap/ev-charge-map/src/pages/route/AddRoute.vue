<template>
    <q-page id="addRoute">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                Add Route
            </q-toolbar-title>
            <q-btn flat round dense icon="favorites" color="red" />
        </q-toolbar>

        <q-scroll-area class="q-pa-md form-style">
            <div class="text-h6 q-pb-md">
                Save your favorite routes!
            </div>
            <span class="text-body1 q-pd-md">Please pick a name for this route</span>
            <q-input outlined stack-label label="Name">
                <template v-slot:append>
                    <q-icon name="close"></q-icon>
                </template>
            </q-input>

            <div class="text-body1 q-pt-lg">Save your favorite route</div>
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
                <q-btn color="black" class="full-width" label="Save Route"></q-btn>
            </div>
        </q-scroll-area>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});

</script>
<style lang="scss">
#addRoute {
    .form-style {
        margin: 0 auto;
        max-width: 500px;
        height: calc(100vh - 180px);
    }
}
</style>
