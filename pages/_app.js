import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import '../css/main.css'
import { useEffect } from "react"
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp