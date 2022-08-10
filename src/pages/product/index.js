import React from "react";
import MenuBar from "../../components/atoms/menu-bar/index"
import ProductCard from "../../components/atoms/product-card";


const Product = () => {
    return(
        <div>
            <MenuBar/>
            <h1>Página Produto</h1>
            <ProductCard/>
        </div>
    )
}

export default Product