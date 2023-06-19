<template>
    <q-page id="accountDetails">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                My Details
            </q-toolbar-title>
        </q-toolbar>

        <q-scroll-area class="form-style">
            <div class="q-pa-md q-gutter-md">
                <div class="text-h6">Update Your Details</div>

                <q-input outlined stack-label label="Email">
                    <template v-slot:append>
                        <q-icon name="close"></q-icon>
                    </template>
                </q-input>
                <q-input outlined stack-label label="Password">
                    <template v-slot:append>
                        <q-icon name="close"></q-icon>
                    </template>
                </q-input>

                <div class="text-yellow-10 text-bold q-mt-md">Note: This email is readonly</div>

                <q-input outlined stack-label readonly label="Email" />
                <div>
                    <q-btn label="Update Details" color="black" size="lg" class="full-width"></q-btn>
                </div>
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
#accountDetails {
    .form-style {
        margin: 0 auto;
        max-width: 500px;
        height: calc(100vh - 180px);
    }
}
</style>
