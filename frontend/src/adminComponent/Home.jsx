import { useDispatch } from "react-redux";
import { triggerAccount } from "../store/slices/switchSlice";
function Home(){
    const dispatch = useDispatch();
    function shoot(){
        dispatch(triggerAccount(false));
        alert("You arelog out successfully .....");
    }
    return(
        <>
            <div className="admin-home-page">
                    <h2>welcome back to admin panel</h2>
                    <p>In this panel , admin can easily control the whole GrocerEase easily 
                        and in a more efficient way . 
                        Admin can implement CRUD operation easily , moreover can add new admin/owner 
                        for the GrocerEase in future.
                        Admin can easily create or add new or delete existing product via beautiful UI.
                        User as well as Admin passwords are encrypted using Hash algorithm where 10 round of salt is 
                        applied . 
                    </p>
                    <button className="admin-btn" onClick={shoot}>Log me out now .....</button>
                </div>
        </>
    );
}
export default Home;