const _ = require('lodash')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          "100": "#f2d7d8",
          "200": "#f3b8bc",
          "300": "#f399a5",
          "400": "#f0667f",
          "500": "#ea3a66",
          "600": "#e1175a",
          "700": "#d10f4a",
          "800": "#bb0c3f",
          "900": "#a20c36",
        },
      }
    }
  },
  variants: {},
  plugins: [
    ({ addUtilities, config, e }) => {
      const maxScreenSizeUtilities = _.map(config('theme.screens'), (value, key) => {
        return {
          [`.${e(`max-w-screen-${key}`)}`]: {
            "max-width": `${value} !important`
          }
        }
      })

      addUtilities(maxScreenSizeUtilities)
    }
  ]
}
