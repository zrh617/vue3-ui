import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            // @ts-ignore
            close()
          }
        },
        ok,
        cancel,
        closeOnClickOverlay
      }, {
        title, content
      })
    }
  })
  app.mount(div)
}
