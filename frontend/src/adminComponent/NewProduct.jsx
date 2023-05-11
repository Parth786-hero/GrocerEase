import { useState } from 'react';
import {useSelector} from 'react-redux';
import Category from '../UserComponent/Category';
// import {add} from '../store/slices/productSlice';
// import {useDispatch} from 'react-redux';
function NewProduct(){
    // const dispatch = useDispatch();
    const bag = useSelector(state=>state.category);
    const [data , updateData] = useState({name : "" , price : "" , img : "" ,num : "", unit : "" , category : ""});
    function trigger(e){
        const {name , value} = e.target;
        updateData({...data , [name] : value});
    }
    function check({name , price , img ,unit , category,num}){
        if(!name || !price || !img || !unit || !category || !num){
            return false;
        }
        return true;
    }
    async function postData(e){
        e.preventDefault();
        if(check(data)){
            const {name , price , img , num , unit , category} = data;
            const res = await fetch("/api/product" , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({name , price , img ,num, unit , category})
            });
            if(res.ok){
                alert("product added successfully ..... 💯");
                updateData({name : "" , price : "" , img : "" ,num : "" , unit : "" , category : ""});
                // dispatch(add(data));
            }else{
                alert("Server side error ....");
            }
            
        }else{
            alert("Please fill all the fields ....");
        }
    }
    return(
        <>
            
            <div className="product-form container">
                <form method="POST" onSubmit={postData}>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="enter the name of the product"
                            name="name"
                            value={data.name}
                            onChange={trigger}
                        />
                    </div>
                    <div className="field">
                        <input 
                            type="number" 
                            placeholder="enter the price of the product"
                            name="price"
                            value={data.price}
                            onChange={trigger}
                            />
                    </div>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="enter url of the image ..."
                            name="img"
                            value={data.img}
                            onChange={trigger}
                            />
                    </div>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="enter the quantity of the product ..."
                            name="num"
                            value={data.num}
                            onChange={trigger}
                            />
                    </div>
                    <div className="field">
                        <select name="unit" value={data.unit} onChange={trigger}>
                            <option value="kg">kg</option>
                            <option value="gm">gm</option>
                            <option value="liter">liter</option>
                            <option value="ml">ml</option>
                            <option value="pcs">pcs</option>
                        </select>
                    </div>

                    <div className="field">
                        <select name="category" value={data.category} onChange={trigger}>
                            {
                                bag.map((obj,id)=>{
                                    return <option key = {id} value={obj.name}>{obj.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <input type="submit" value="add new product ..."/>
                </form>
            </div>
            <Category/>
        </>
    );
}
export default NewProduct;