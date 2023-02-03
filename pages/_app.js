import '../styles/globals.css'
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return(
      <>
          <Toaster
              position="bottom-center"
              reverseOrder={false}
          />
        <Component {...pageProps} />

        <TawkMessengerReact
          propertyId="63dd0b264742512879114eda"
          widgetId="1gobn74nv"
        />
  </>)
}
