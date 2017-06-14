import '../styles/app.scss'
import documentReady from './document-ready'
import template from '../templates/index.hbs'
import data from './data'

documentReady(() => {
  document.body.innerHTML = template(data)
})




// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
  module.hot.accept()
}
