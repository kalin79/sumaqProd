const https = require('https');
import axios from 'axios'

export default function ({ store }) {
     // At request level
     const agent = new https.Agent({  
          rejectUnauthorized: false
     });

     return axios.get(`https://admin.floreriasumaq.pe/api/v1/home`, { httpsAgent: agent })
          .then (res => {
               store.commit('generaldata/setSliderEspecial', res.data.data.slider)
               
          })
          .catch(error => {
               // console.log(error);
          });
}