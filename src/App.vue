<template>
  <v-app id="inspire">
    <NavigationDrawer></NavigationDrawer>

    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
        <div>{{$store.state.index}}</div>
        <TransitionArrow></TransitionArrow>
        <Footer></Footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TransitionArrow from "./components/TransitionArrow";
import NavigationDrawer from "./components/NavigationDrawer";
import Footer from "./components/Footer";

export default {
  components: {
    NavigationDrawer,
    Footer,
    TransitionArrow
  },
  props: {
    source: String
  }
};
</script>