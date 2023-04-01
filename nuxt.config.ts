// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  alias: {
    '~~': resolve(__dirname),
    '@@': resolve(__dirname),
    '~': resolve(__dirname),
    '@': resolve(__dirname),
    assets: resolve(__dirname, 'assets'), // (unless you have set a custom `dir.assets`)
    static: resolve(__dirname, 'static'), // (unless you have set a custom `dir.static`)
    '@components': resolve(__dirname, 'components'),
    '@env': resolve(__dirname, 'env'),
    '@pages': resolve(__dirname, 'pages'),
    '@static': resolve(__dirname, 'lib/static'),
    '@type': resolve(__dirname, 'type'),
    '@utils': resolve(__dirname, 'utils'),
    '@store': resolve(__dirname, 'composables/store'),
    '@svg': resolve(__dirname, 'static/img/svg'),
  },
  build: {
    transpile: ['vuetify'],
  },
  components: true,
  imports: {
    dirs: ['composables/store/*/store.ts'],
  },
  modules: ['@pinia/nuxt', '@vue-macros/nuxt'],
  reactivityTransform: true,
  ssr: false,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/mixins.scss";',
        },
      },
    },
  },
});
