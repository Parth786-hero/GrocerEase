import Navbar from "./Navbar";
import NewAdmin from "./NewAdmin";
import NewCategory from "./NewCategory";
import NewProduct from "./NewProduct";
import Fetch from "./Fetch";
import Home from "./Home";
import {Route , Routes} from 'react-router-dom';

function Index(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/admin" element={<NewAdmin/>}/>
                <Route exact path="/product" element={<NewProduct/>}/>
                <Route exact path="/fetch" element={<Fetch/>}/>
                <Route exact path="/category" element={<NewCategory/>}/>
            </Routes>
            
        </>
    );
}
export default Index;