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
        <q-route-tab to="/auth" icon="login" label="Login" />
        <q-route-tab to="/route" icon="directions" label="Routes" />
        <q-route-tab to="/map" icon="explore" label="Map" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
