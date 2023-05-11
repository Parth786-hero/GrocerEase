import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
            <div className="admin-panel">
                <h2>admin panel</h2>
                <ul className="nav-items">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">add new admin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">add new Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">add product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fetch">view all products</NavLink>
                    </li>
            </ul>
            </div>
        </>
    );
}
export default Navbar;