import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Body from "./components/Body";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <StrictMode>
    <Body/>
  </StrictMode>
  </Provider>,
)
