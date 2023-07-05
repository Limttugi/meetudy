import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

import '@/styles/reset.scss'
import '@/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}
