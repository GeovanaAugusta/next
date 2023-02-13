// import '@/styles/globals.css'

import Maincontainer from "@/components/MainContainer";

export default function App({ Component, pageProps }) {
  return (
    <Maincontainer> 
  <Component {...pageProps} />
  </Maincontainer>
  )
}
