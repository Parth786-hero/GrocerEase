import { useSelector } from "react-redux";
function Practice(){
    const bag = useSelector((state)=>{
        console.log(state.category);
        return state.category;
    });
    console.log(bag);
    return(
        <>
           {
            bag.map(obj=>{
                console.log(obj);
            })
           }
        </>
    );
}
export default Practice;