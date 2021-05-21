const https = require('https');
import axios from 'axios'

export default function ({ store, req }) {
     // At request level
     const agent = new https.Agent({  
          rejectUnauthorized: false
     });
     try {
          return axios.get(`https://admin.floreriasumaq.pe/api/v1/list-products?categoria_slug=${req.url.split('/tienda/')[1]}`, { httpsAgent: agent })
               .then (res => {
                    store.commit('products/setProducts', res.data.data)
                    store.commit('products/setPagination', res.data.pagination)
                    store.commit('products/setTypeNivelCategory', 1)
                    store.commit('products/setDataCategoryNivel1', res.data.data_category[0])
               })
               .catch(error => {
                    console.log("error return ", error) 
               });
     } catch (error) {
          console.log(error)
     }

     // return axios.get(`https://admin.floreriasumaq.pe/api/v1/home`, { httpsAgent: agent })
     //      .then (res => {
     //           store.commit('generaldata/setMenuMain', res.data.data.menu)
     //           store.commit('generaldata/setTiendas', res.data.data.categories)
     //           store.commit('generaldata/setSliderHome', res.data.data.slider)
     //           store.commit('generaldata/setTiendaOcasion', res.data.data.special_occasion)
            
     //      })
     //      .catch(error => {
     //           // console.log(error);
     //      });
}