<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Top</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-alpha-e-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>End</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-car-hatchback</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Move</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SlideShow</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>

<style>
</style>
