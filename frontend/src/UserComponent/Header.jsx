import { useDispatch, useSelector } from "react-redux";
import {change} from '../store/slices/authenticateSlice';
import { show } from "../store/slices/cartPage";
function Header(){
    // const state = useSelector(state=>state.amount);
    const productList = useSelector(state=>state.product);
    // console.log(productList);
    
    const dispatch = useDispatch();
    function trigger(){
        dispatch(change(true));
    }
    function trigger2(){
        dispatch(show(true));
    }
    return(
        <>
            <div className="nav-bar container">
                <h2 className="logo">Grocer<span style={{color : "#44bd32" , fontWeight : 600 }}>Ease</span></h2>
                <div className="delivery-time">
                    <p>deliver in 7.5 minutes</p>
                </div>
                <div className="header-input-field">
                    <p className="text1 t">Search "vegetable"</p>
                    <p className="text2 t">Search "paneer"</p>
                    <i className="fa-solid glass fa-magnifying-glass"></i>
                    {/* <input type="text" value=""/> */}
                    <p className="dummy"></p>
                </div>
                <p className="login-btn" onClick={trigger}>login</p>
                <div className="cart-btn">
                    <button onClick={trigger2}>
                        <p><i className="fa-solid cart-icon fa-cart-shopping"></i></p>
                        {
                            productList.length  ? <div className="my-bill">
                                <p><span style={{color : "white"}}>{productList.length}</span> items</p>
                                <p>in cart </p>
                            </div> : <p>my cart</p>
                        }
                    </button>
                </div>
            </div>
        </>
    );
}
export default Header;