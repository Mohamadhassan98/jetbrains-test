import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as lab from 'vuetify/lib/labs/components';
import colors from 'vuetify/lib/util/colors';
import { fa as persian } from 'vuetify/locale';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components: {
      ...components,
      ...lab,
    },
    directives,
    blueprint: md3,
    ssr: false,
    defaults: {
      global: {
        hideDetails: 'auto',
      },
      VTextField: {
        density: 'compact',
        variant: 'outlined',
      },
      VSelect: {
        density: 'compact',
        variant: 'outlined',
      },
      VFileInput: {
        density: 'compact',
        variant: 'outlined',
      },
      VTextarea: {
        density: 'compact',
        variant: 'outlined',
      },
      VAutocomplete: {
        density: 'compact',
        variant: 'outlined',
      },
      VCheckbox: {
        density: 'compact',
      },
      VCardActions: {
        VBtn: {
          block: true,
        },
      },
      VDataTableRow: {
        VBtn: {
          variant: 'text',
        },
      },
      VDataTableFooter: {
        prevIcon: '$next',
        nextIcon: '$prev',
        firstIcon: '$last',
        lastIcon: '$first',
      },
    },
    locale: {
      locale: 'fa',
      messages: { fa: persian },
      rtl: {
        fa: true,
      },
    },
    theme: {
      defaultTheme: localStorage.getItem('theme') || 'light',
      variations: {
        colors: [
          'primary',
          'secondary',
          'accent',
          'info',
          'warning',
          'error',
          'success',
          'text',
          'background',
        ],
        lighten: 5,
        darken: 4,
      },
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: colors.blue.lighten3,
            secondary: colors.purple.lighten3,
            error: colors.red.base,
            warning: colors.orange.lighten1,
            'on-warning': colors.shades.white,
            info: colors.lightBlue.lighten1,
            'on-info': colors.shades.white,
            success: colors.green.lighten1,
            accent: colors.grey.darken3,
            text: colors.shades.white,
            background: colors.grey.darken3,
          },
        },
        light: {
          dark: false,
          colors: {
            primary: colors.blue.darken2,
            secondary: colors.purple.base,
            error: colors.red.darken2,
            warning: '#ed6c02',
            'on-warning': colors.shades.white,
            info: colors.lightBlue.darken2,
            success: colors.green.darken3,
            accent: colors.grey.lighten3,
            text: colors.shades.black,
            background: colors.grey.lighten3,
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
