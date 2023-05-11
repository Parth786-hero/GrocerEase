import { useSelector } from "react-redux";

function Footer(){
    const bag = useSelector(state=>state.category);
    // console.log(bag);
    const links = ["about" , "privacy" , "partner" , "carrers" , "terms" ,"express" , "blog" , "faqs" , "seller" , "press" , "security" , "spotlight" , "lead" , "mobile" , "warehouse"];
    return(
        <>
            <div className="container footer">
                <div className="sub-footer">
                    <div className="box1">
                        <h3>useful links</h3>
                        <div className="box1-data">
                            {
                                links.map((txt , id)=>{
                                    return <p style={{color : "gray"}} key={id}>{txt}</p>
                                })
                            }
                        </div>
                    </div>
                    <div className="box2">
                    <h3>categories <span style={{fontWeight : "400" , color : "#44bd32" , "textTransform" : "lowercase" , fontSize : "16px" , display : "inline-block" , marginLeft : "5px"}}>see all</span></h3>
                        <div className="box2-data">
                        {
                            bag.slice(0 , 25).map((obj , id)=>{
                                return <p key={id} style={{color : "gray"}}>{obj.name}</p>
                            })
                        }
                        </div>
                    </div>
                </div>
                <p className="footer-para">
                “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                </p>
            </div>
        </>
    );
}
export default Footer;