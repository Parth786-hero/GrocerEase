import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import ProductCard from './ProductCard';

function Product({name}){
    // const bag = useSelector(state=>state.category);
    const [productBag , updateProduct] = useState([]);
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
    function trigger(){
        alert("hello ....");
    }
    useEffect(()=>{
        getProducts();
    },[]);

    return(
        <>
            <div className="product-bag">
                <h2 className="product-heading">{name}</h2>
                <div className="product-card-father">
                    {
                        productBag.map((obj,id)=>{
                            
                            if(obj.category === name){
                                return <ProductCard key = {id} {...obj}/>;
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default Product;