import React, {useContext} from "react";
import MenuBar from "../../components/atoms/menu-bar/index"
import ProductCard from "../../components/atoms/product-card";
import ProductsDiv from "../../components/molecules/products-div/index"

import {AuthContex, AuthContext} from "../../contexts/auth"

const Product = () => {
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return(
        <div>
            <MenuBar/>
            <h1>Página Produto</h1>
            {/* <ProductCard/> */}
            <button onClick={handleLogout}>logout</button>
            <ProductsDiv/>
        </div>
    )
}

export default Product