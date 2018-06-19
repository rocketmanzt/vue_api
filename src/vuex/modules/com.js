import * as types from '../types'

const state = {
  loading: false,
  leftNavStatus: false,
  footerStatus: true,
  showAlert: false,
  alertMsg: ''
}

const actions = {
  setLoadingState ({ commit }, status) {
    commit(types.COM_LOADING_STATUS, status)
  },
  setNavState ({ commit }, status) {
    commit(types.COM_NAV_STATUS, status)
  },
  setFooterState ({ commit }, status) {
    commit(types.COM_FOOTER_STATUS, status)
  },
  showAlert ({commit}, status) {
    commit(types.COM_SHOW_ALERT, status)
  },
  alertMsg ({commit}, str) {
    commit(types.COM_ALERT_MSG, str)
  }
}
const mutations = {
  [types.COM_LOADING_STATUS] (state, status) {
    state.loading = status
  },
  [types.COM_NAV_STATUS] (state, status) {
    state.leftNavStatus = status
  },
  [types.COM_FOOTER_STATUS] (state, status) {
    state.footerStatus = status
  },
  [types.COM_SHOW_ALERT] (state, status) {
    state.showAlert = status
  },
  [types.COM_ALERT_MSG] (state, str) {
    state.alertMsg = str
  }
}

const getters = {
  loading: state => state.loading,
  footerStatus: state => state.footerStatus,
  showToast: state => state.showToast,
  showAlert: state => state.showAlert,
  alertMsg: state => state.alertMsg
}
export default {
  state,
  actions,
  mutations,
  getters
}
