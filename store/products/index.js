export const state = () => ({
     listProducts: {
          products: null,
          pagination: null,
          typeNivelCategory: 1,
          dataCategoryNivel1: null,
          dataCategoryNivel2: null,
          subCategories: null,
          banners: null
     }
 })

export const mutations = {
     setProducts(state,payload){
          state.listProducts.products = payload
     },
     setPagination(state,payload){
          state.listProducts.pagination = payload
     },
     setTypeNivelCategory(state,payload){
          state.listProducts.typeNivelCategory = payload
     },
     setDataCategoryNivel1(state,payload){
          state.listProducts.dataCategoryNivel1 = payload
     },
     setDataCategoryNivel2(state,payload){
          state.listProducts.dataCategoryNivel2 = payload
     },
     setUpdateCurrentPage(state,payload){
          state.listProducts.pagination.current_page = payload
     },
     setUpdateProducts(state,payload){
          state.listProducts.products = payload
     },
     setSubCategories(state,payload){
          state.listProducts.subCategories = payload
          state.listProducts.subCategories.push({"id": null, "title": "Selecciona", slug:'', "link": '', description:''})
     },
     setBanners(state,payload){
          state.listProducts.banners = payload
     },
}
export const actions = {
     async updateProducts({ commit, state }){
          let page = state.listProducts.pagination.current_page
          console.log(state.listProducts.dataCategoryNivel1)
          let slug = state.listProducts.dataCategoryNivel1.slug
          let _url = `/list-products?categoria_slug=${slug}&page=${page}`
          if (state.listProducts.typeNivelCategory === 2){
               let slug2 = state.listProducts.dataCategoryNivel1.sub_categorias[0].slug
               _url = `https://admin.floreriasumaq.pe/api/v1/list-products?categoria_slug=${slug}&subcategoria_slug=${slug2}&page=${page}`
          }
          try {
               // console.log(_url)
               await this.$axios.$get(_url)
                    .then (res => {
                         console.log(res)
                         commit('setUpdateProducts', res.data)
               })
          } catch (error) {
               console.log(error)
          }finally{
               console.log('final')
          }
          
     }
}
export const getters = {
     getProducts(state){
          return state.listProducts.products
     },
     getPagination(state){
          return state.listProducts.pagination
     },
     getTypeNivelCategory(state){
          return state.listProducts.typeNivelCategory
     },
     getDataCategoryNivel1(state){
          return state.listProducts.dataCategoryNivel1
     },
     getDataCategoryNivel2(state){
          return state.listProducts.dataCategoryNivel2
     },
     getSubCategories(state){
          return state.listProducts.subCategories
     },
     getBanners(state){
          return state.listProducts.banners
     },
}
