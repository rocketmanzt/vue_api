import api from '../../fetch/api'
import * as types from '../types'

const state = {
  List: [],
  searchKey: {
    page: 0,
    limit: 20
  },
  scroll: true
}

const actions = {
  getProductList ({ commit }, params = {}) {
    commit(types.COM_LOADING_STATUS, true)
    api.ProductList(params)
      .then(res => {
        let scb = params.scb
        scb && scb(res)
        commit(types.COM_LOADING_STATUS, false)
        commit(types.GET_PRODUCT_LIST, res)
      })
  }
}
const mutations = {
  [types.GET_PRODUCT_LIST] (state, res) {
    state.List = res.data
  }
}

const getters = {
  List: state => state.List
}

export default {
  state,
  actions,
  getters,
  mutations
}
