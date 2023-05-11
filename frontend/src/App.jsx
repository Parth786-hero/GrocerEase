import Admin from './adminComponent/Admin';
import Main from './UserComponent/Main';
import { useSelector } from 'react-redux';
function App(){
    const state = useSelector(state=>state.switch);
    return(
        <>
            {
                state?<Admin/> : <Main/>
            }
        </>
    )
}
export default App;