import elementUiValidators from './element-ui'
export default {
  install (vueApp, varName = '$validators') {
    Object.defineProperty(vueApp.config.globalProperties, varName, {
      get() {
        return {
          ...elementUiValidators
        }
      }
    })
  }
}
