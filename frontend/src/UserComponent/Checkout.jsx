import { useDispatch } from "react-redux";
import { hide } from "../store/slices/cartPage";
function Checkout(){
    const dispatch = useDispatch();
    function trigger(){
        dispatch(hide(false));
    }
    function shoot(){
        dispatch(hide(false));
    }
    return(
        <>
            <div className="check-out-page">
                <div className="check-out-card">
                    <div className="checkout-heading">
                        <h2>My Cart</h2>
                        <i className="fa-solid fa-xmark" style={{fontSize : "32px", cursor : "pointer"}} onClick={trigger}></i>
                    </div>
                    <div className="checkout-info">
                        <div className="empty-cart-page">
                            <p>It seems as if your cart is empty right now .....</p>
                            <button onClick={shoot}>start shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Checkout;