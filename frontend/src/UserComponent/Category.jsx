import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import {useDispatch} from 'react-redux';
import {add} from '../store/slices/categorySlice';

function Category(){
    const [bag , updateBag] = useState([]);
    const dispatch = useDispatch();
    async function fetchData(){
        const res = await fetch("/api/category" , {
            method : "GET",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            credentials : "include"
        });
        
        if(res.ok){
            const data = await res.json();
            dispatch(add(data));
            updateBag(data);
        }else{
          alert("Kindly switch onn the server ....");
        }
    }
    useEffect(()=>{
        fetchData();
        
    },[]);
    return(
        <>
            
            <div className="category-card container">
                {
                    bag.map((obj,id)=>{
                        return <CategoryCard key={id} {...obj}/>
                    })
                }
            </div>
        </>
    );
}
export default Category;