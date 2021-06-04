const https = require('https');
import axios from 'axios'

export default function ({ store }) {
     // At request level
     const agent = new https.Agent({  
          rejectUnauthorized: false
     });

     return axios.get(`https://admin.floreriasumaq.pe/api/v1/home`, { httpsAgent: agent })
          .then (res => {
               // store.commit('generaldata/setMenuMain', res.data.data.menu)
               store.commit('generaldata/setTiendas', res.data.data.categories)
               store.commit('generaldata/setSliderHome', res.data.data.slider)
               store.commit('generaldata/setTiendaOcasion', res.data.data.special_occasion)
            
          })
          .catch(error => {
               // console.log(error);
          });
}