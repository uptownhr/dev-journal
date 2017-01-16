const isProd = process.env.NODE_ENV === 'production'

console.log(isProd, process.env)

module.exports = {
  dev: !isProd,
  head: {
    titleTemplate: '%s - Dev Journal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    { src: '~assets/index.scss', lang: 'sass' }
  ]
}