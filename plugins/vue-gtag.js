// import Vue from 'vue';
// import VueGtag from 'vue-gtag';


// export default ({ app }) => {
//     const getGDPR = localStorage.getItem('GDPR:accepted');

//     Vue.use(VueGtag, {
//         config: { id: 'GTM-NXF9K2Z' },
//         appName: 'Sumaq',
//         bootstrap: getGDPR === 'true',
//         enabled: getGDPR === 'true',
//         pageTrackerScreenviewEnabled: true
//     }, app.router);
// }

import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "GTM-NXF9K2Z" },
  bootstrap: false
});