import React, {useContext} from "react";
import MenuBar from "../../components/atoms/menu-bar/index"
import ProductsDiv from "../../components/molecules/products-div/index"


const Product = () => {
    return(
        <div>
            <MenuBar/>
            <ProductsDiv/>
        </div>
    )
}

export default Product