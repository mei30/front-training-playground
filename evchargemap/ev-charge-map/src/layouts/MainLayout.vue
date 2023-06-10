<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-teal">
      <q-toolbar>
        <q-toolbar-title> Ev Charge Map </q-toolbar-title>
        <q-btn dense flat round icon="login" />
      </q-toolbar>
    </q-header>
    <q-footer elevated class="bg-teal">
      <q-tabs class="text-light">
        <q-tab name="/auth" icon="login" label="Login" />
        <q-tab name="/route" icon="directions" label="Routes" />
        <q-tab name="/map" icon="explore" label="Map" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
