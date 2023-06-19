<template>
    <q-page id="accountMenu">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                Account Menu
            </q-toolbar-title>
        </q-toolbar>

        <div class="text-h6 text-center q-pt-md">
            <q-avatar color="green" size="60px">JD</q-avatar>
            <div>John Doe</div>
        </div>

        <div class="menu q-pt-xl">
            <q-separator inset></q-separator>
            <q-list>
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-avatar color="primary" text-color="white" icon="account_box" rounded />
                    </q-item-section>

                    <q-item-section class="text-body1">My Details</q-item-section>
                    <q-item-section side>
                        <q-icon name="arrow_right" size="35px" />
                    </q-item-section>
                </q-item>
            </q-list>

            <q-list>
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-avatar color="red" text-color="white" icon="logout" rounded />
                    </q-item-section>

                    <q-item-section class="text-body1">Logout</q-item-section>
                    <q-item-section side>
                        <q-icon icon="arrow_right" size="35px" />
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});

</script>
<style lang="scss">
#accountMenu {
    .menu {
        margin: 0 auto;
        max-width: 500px;
    }
}
</style>
