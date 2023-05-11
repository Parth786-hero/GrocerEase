import { useState } from "react";

function NewCategory(){
    const [bag , updateBag] = useState({name : "" , imgUrl : ""});
    async function postData(e){
        e.preventDefault();
        if(!check(bag)){
            alert("Kindly fill both the fields ....");
        }else{
            
            const {name , imgUrl} = bag;
            const res = await fetch("/api/category" , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({name , imgUrl})
            });
            
            if(res.ok){
                alert("new Category is added successfully .... 👍");
                updateBag({name : "" , imgUrl : ""});
            }else{
                alert("Server side error hai bro ...");
            }
        }
    }
    function trigger(e){
        const {name , value} = e.target;
        updateBag({...bag , [name] : value});
    }
    function check({name , imgUrl}){
        if(!name || !imgUrl){
            return false;
        }
        return true;
    }
    return(
        <>
            <div className="container category-form">
                <form method="POST" onSubmit={postData}>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="enter the category name '&' separated or single ...." 
                            name="name"
                            value = {bag.name}
                            onChange={trigger}
                        />
                    </div>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="enter the image url ..."
                            name="imgUrl"
                            value= {bag.imgUrl}
                            onChange={trigger}
                        />
                    </div>
                    <input type="submit" value="add new category"/>
                </form>
            </div>
        </>
    );
}
export default NewCategory;