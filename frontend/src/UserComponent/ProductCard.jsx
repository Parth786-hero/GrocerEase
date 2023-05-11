import { useState } from "react";
import {useDispatch} from 'react-redux';
import { add , remove} from "../store/slices/productSlice";
function ProductCard({name,img,price,num,unit}){
    const dispatch = useDispatch();
    const [state , updateState] = useState(false);
    const [number , updateNumber] = useState(0);
    function trigger(e){
        const myItem = {name , img, price , num , unit , number};
        
        if(e.target.textContent === "add"){
            dispatch(add(myItem));
            updateState(true);
            updateNumber(number+1);
            
        }
        if(e.target.classList[1] === "minus"){
            if(number === 1){
                updateState(false);
                dispatch(remove());
                updateNumber(0);
            }else{
                dispatch(remove());
                updateNumber(number-1);
            }
        }
        if(e.target.classList[1] === "plus"){
            dispatch(add(myItem));
            updateNumber(number+1);
        }
        
    }
    
    return(
        <>
            <div className="product-card">
                        <div className="img-box">
                            <img src={img} alt="later onnn" />
                        </div>
                        <div className="text-box">
                            <h4>{name}</h4>
                            <p style={{color : "rgba(0, 0, 0, 0.91)"}}>{num} {unit}</p>
                            <div className="price-and-btn">
                                <p id='price'>₹{price}</p>
                                <button className='product-btn' onClick={trigger}>
                                    {
                                        state ? <div className="btn-add-sub">
                                                    <p><i className="fa-solid minus fa-minus"></i></p>
                                                    <p className="num">{number}</p>
                                                    <p><i className="fa-solid plus fa-plus"></i></p>
                                                </div> 
                                                    : 
                                                <span style={{color : "#44bd32"}}>add</span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
        </>
    );
}
export default ProductCard;