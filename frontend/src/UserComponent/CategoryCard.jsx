// import { useSelector } from "react-redux";
function CategoryCard({name , imgUrl}){
    
    return(
        <>
            <div className="cat-name">
                <div className="img">
                    <img src={imgUrl} alt="later on" />
                </div>
                <p>{name}</p>
            </div>
        </>
    );
}
export default CategoryCard;