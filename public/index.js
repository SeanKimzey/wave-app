/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  mounted: function() {
    var wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#42f462",
      progressColor: "purple",
      splitChannels: true,
      height: 35
      // barWidth: 50
    });

    wavesurfer.load("a.mp3");
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
