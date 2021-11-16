import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux';
import Store from '../redux/Store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
