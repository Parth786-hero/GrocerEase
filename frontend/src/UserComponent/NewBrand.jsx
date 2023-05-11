import img1 from '../images/img1.png';
function NewBrand(){
    return(
        <>
            <div className="container">
                <div className="new-brand">
                    <div className="box1">
                        <h2 style={{color : "white"}}>The most expensive <span style={{color :"white"}}>liquor .</span></h2>
                        <p> an alcoholic drink typically made from fermented grapes. Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process. Different varieties of grapes and strains of yeasts are major factors in different styles of wine. </p>
                        <button className="white-btn">order now</button>
                    </div>
                    <div className="box2">
                        <img src="https://thewhisky.s3.ap-south-1.amazonaws.com/sites/default/files/whiskey-indian-iris-single-malt-blended-scotch.png" alt="icon" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewBrand;