import { useState } from 'react';
import {change} from '../store/slices/authenticateSlice';
import { useDispatch } from 'react-redux';
import { triggerAccount } from '../store/slices/switchSlice';
function Login(){
    const [bag , updateBag] = useState({number : "" , password : ""});
    const dispatch = useDispatch();
    function shoot(e){
        if(e.target.classList.contains("authenticate-user") || e.target.classList.contains("new-user")){
            dispatch(change(false));
        }
    }
    function trigger(e){
        e.preventDefault();
    }
    async function postData(){
        try{
            const {number,password} = bag;
            if(!number || !password){
                alert("Please fill Both the fields bro ...");
            }else{
                const res = await fetch("/api/admin" , {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({number , password})
                })
                if(res.ok){
                    alert("Welcome back Parth .....");
                    updateBag({number : "" , password : ""});
                    dispatch(triggerAccount(true));
                    dispatch(change(false));
                }else{
                    alert("It seems as if you are not admin .....")
                }
            }
        }catch(e){
            console.log(e);
            alert("go to server console to view the error ...");
        }
        
    }
    function fireUp(e){
        // const {number , password} = bag;
        const name = e.target.name;
        const value = e.target.value;
        updateBag({...bag , [name] : value});
    }
    return(
        <>
            <div className="authenticate-user" onClick={shoot}>
                <div className="authenticate-card">
                    <h2>user authentication</h2>
                    
                    <form onSubmit={trigger}>
                        <p className="login-info">
                        Enter your phone number and <br/>password to Login ...
                        </p>
                        <div className="field">
                            <input 
                                type="number" 
                                placeholder="enter your phone number ....."
                                name="number"
                                value={bag.number}
                                onChange={fireUp}
                            />
                        </div>
                        <div className="field">
                            <input 
                                type="password" 
                                placeholder="enter your password ...."
                                name="password"
                                value={bag.password}
                                onChange={fireUp}
                            />
                        </div>
                        <div className="btn-access">
                            <button onClick={postData}>I am admin</button>
                            <button>I am customer</button>
                        </div>

                        <p className="new-user" onClick={shoot}>
                            new customer ?
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;