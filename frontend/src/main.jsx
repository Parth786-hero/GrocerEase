import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './UserComponent/Main';
import { Provider } from 'react-redux';
import store from './store/index';
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Provider store = {store}>
    <Main/>
</Provider>);