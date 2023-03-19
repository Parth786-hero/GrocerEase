function Header(){
    return(
        <>
            <div className="nav-bar container">
                <h2 className="logo">Grocer<span style={{color : "#44bd32" , fontWeight : 600 }}>Ease</span></h2>
                <div className="delivery-time">
                    <p>deliver in 7.5 minutes</p>
                </div>
                <div className="header-input-field">
                    <p className="text1 t">Search "vegetable"</p>
                    <p className="text2 t">Search "paneer"</p>
                    <i className="fa-solid glass fa-magnifying-glass"></i>
                    {/* <input type="text" value=""/> */}
                    <p className="dummy"></p>
                </div>
                <p className="login-btn">login</p>
                <div className="cart-btn">
                    <button>
                        <p><i className="fa-solid cart-icon fa-cart-shopping"></i></p>
                        <p>my cart</p>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Header;