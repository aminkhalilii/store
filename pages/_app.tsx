import '@/styles/globals.css'
import '@/styles/browser-styles.css'

import { store } from '@/store'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Loading from "@/components/loading/Loading";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()


  return (
      <Provider store={store}>
        <Component {...pageProps} />
        {!asPath.includes('/products?category') ? <Loading /> : null}
      </Provider>
  )
}
