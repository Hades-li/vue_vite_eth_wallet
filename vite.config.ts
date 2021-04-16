import {defineConfig, mergeConfig, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
/*export default {
  plugins: [
    vue(),
    eslint()
  ]
}*/
export default defineConfig(({mode}) => {
  let config: UserConfig = {
    plugins: [
      vue()
    ]
  }

  if (mode === 'development') {
   config = mergeConfig(config, {
      plugins: [
        eslint()
      ]
    }, true)
  } else {
    config = mergeConfig(config, {}, true)
  }

  return config
})
