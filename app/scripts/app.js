import styles from '../styles/app.scss'
import documentReady from './document-ready'

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
  module.hot.accept()
}
