// storage持久化
export default {
  namespaced: true,
  state: {
    accessToken: ''
  },
  actions: {},
  mutations: {
    setAccessToken: (state, accessToken) => {
      state.accessToken = accessToken
    }
  }
}