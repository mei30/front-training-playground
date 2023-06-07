import { upperFirst } from 'lodash'
import { camelCase } from 'lodash'

export default {
  install(app: any) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]: [any, any]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      console.log(path, componentName)

      // export default
      app.component(`Base${componentName}`, module.default || module)
    })
  }
}
