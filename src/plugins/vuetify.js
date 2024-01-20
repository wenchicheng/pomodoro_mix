/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        primary: '#81C784',
        secondary: 'rgba(220, 237, 200, 1)',
        error: '#FF5252',
        info: '#2196F3',
        success: '#CCFF90',
        warning: '#FDD835',
        background: '#FFEBEE'
      }
    }
  }
})
