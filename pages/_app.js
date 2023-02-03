import '../styles/globals.css'
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function App({ Component, pageProps }) {
  return(
      <>
        <Component {...pageProps} />

        <TawkMessengerReact
          propertyId="63dd0b264742512879114eda"
          widgetId="1gobn74nv"
      />
  </>)
}
