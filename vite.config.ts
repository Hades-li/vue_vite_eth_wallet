import {defineConfig, mergeConfig, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'
import babel from "@rollup/plugin-babel"
import path from 'path'
// import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import polyfillNode from "rollup-plugin-node-polyfills"
import replace from '@rollup/plugin-replace'
import legacy from '@vitejs/plugin-legacy'
import babelVite from 'vite-babel-plugin'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import inject from '@rollup/plugin-inject'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  let config: UserConfig = {
    resolve: {
      alias: {
        '/@/': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      globals(),
      vue(),
      commonjs(),
    ],
    define: {
      'process.env.NODE_DEBUG': "'development'"
    },
    build: {
      rollupOptions: {
        plugins: [
          // polyfillNode()
        ]
      }
    }
  }

  if (mode === 'development') {
    config = mergeConfig(config, {
      plugins: [
        eslint(),
      ]
    }, true)
  } else {
    config = mergeConfig(config, {}, true)
  }

  return config
})
