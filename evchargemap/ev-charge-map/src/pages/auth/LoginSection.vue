<template>
    <q-page id="registrationPage">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                Register
            </q-toolbar-title>
        </q-toolbar>

        <q-scroll-area class="q-pa-md form-style">
            <div class="text-center">
                <q-img height="60px" width="60px" src="/favicon.ico"></q-img>
                <div>Ev Charge Map</div>
            </div>

            <div class="q-pa-md q-gutter-md">
                <div class="text-center">Register and get more extra features!</div>

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
                <div>
                    <q-btn label="register" color="black" size="lg" class="full-width"></q-btn>
                </div>

                <div class="q-px-md q-mt-xl text-center">
                    <div class="q-mb-md">Don't you have an account?</div>
                    <q-btn color="teal" rounded label="Register Here" to="/auth/register"></q-btn>
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
#registrationPage {
    .form-style {
        margin: 0 auto;
        max-width: 500px;
        height: calc(100vh - 180px);
    }
}
</style>
