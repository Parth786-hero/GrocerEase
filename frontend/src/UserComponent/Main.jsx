import Header from './Header';
import NewBrand from './NewBrand';
import Category from './Category';
import Product from './Product';
import Login from './Login';
import Footer from '../Footer';
import Checkout from './Checkout';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Main(){
    const [productBag , updateProduct] = useState([]);
    const categoryBag = useSelector(state=>state.category);
    const authenticateRes = useSelector(state=>state.authenticate);
    const cartPageShow = useSelector(state=>state.cartPage);
    // console.log(cartPageShow);
    // alert(authenticateRes);
    async function getProducts(){
        const res = await fetch("/api/product" ,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
            Accept : "application/json",
            credentials : "include",
        });
        if(res.ok){
            const data = await res.json();
            updateProduct([...data]);
            
        }else{
            alert("Turn on server to get all the products .....");
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);
    return(
        <>
            {
                authenticateRes ? <Login/> : ""
            }
            {
                cartPageShow ? <Checkout/> : ""
            }
            <Header/>
            <NewBrand/>
            <Category/>
            {
                categoryBag.map((obj , id)=>{
                    let cnt = 0;
                    return productBag.map((mp , id)=>{
                        if(mp.category === obj.name){
                            cnt++;
                            if(cnt > 1){
                                return;
                            }
                            return  <Product key={id} {...obj}/>
                        }
                    })
                })
            }

            <Footer/>
            
        </>
    );
}
export default Main;