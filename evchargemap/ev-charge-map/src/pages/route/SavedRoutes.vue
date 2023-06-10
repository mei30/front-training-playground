<template>
    <q-page id="savedRoutes">
        <q-toolbar class="bg-teal-8 text-white">
            <q-toolbar-title>
                Saved Routes
            </q-toolbar-title>
            <q-btn flat round dense icon="add" size="20px" />
        </q-toolbar>

        <div class="title-section">
            <div class="text-h6 q-mx-sm">
                Select one of your routes
            </div>
        </div>

        <div class="text-center q-pt-lg">
            <q-btn flat round dense icon="add_circle_outline" size="33px" color="black" />
            <div class="text-h6">Add some Routes!</div>
            <div class="text-subtitle1">This is where you can add your moust favorite or common routes</div>
        </div>

        <q-scroll-area class="q-pa-md list">
            <q-list>
                <q-item>
                    <q-item-section top avatar="">
                        <q-avatar color="green" text-color="white" icon="directions"></q-avatar>
                    </q-item-section>

                    <q-item-section side top>
                        <q-item-label>A cool new road</q-item-label>
                        <q-item-label caption>
                            <div class="q-px-sm"><b>From</b>: this is from section </div>
                            <div class="q-px-sm"><b>To</b>: this is from section </div>
                            <div class="q-px-sm"><b>Search Radius</b>: 3</div>
                        </q-item-label>
                    </q-item-section>

                    <q-item-section side bottom>
                        <q-btn class="q-ma-sm" label="Got to map" color="green" size="sm" />
                        <q-btn class="q-mx-sm" label="Delete" color="red" size="sm" />
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />

            </q-list>
        </q-scroll-area>

    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});

</script>
<style lang="scss">
#savedRoutes {
    .title-section {
        padding: 12px 10px 8px 10px;
        max-width: 500px;
        margin: 0 auto;
    }

    .list {
        margin: 0 auto;
        max-width: 500px;
        height: calc(100vh - 180px);
    }
}
</style>
