import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);