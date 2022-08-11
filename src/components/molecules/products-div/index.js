import React, {useEffect, useState} from "react";
import "./style.css"
import apiProducts from "../../../services/api"

import ProductCard from "../../atoms/product-card";

const ProductsDiv = () => {
    const [dataProducts,setDataProducts] = useState([]);

    useEffect (()=>{
        apiProducts.get("products").then(({data})=>{
            setDataProducts(data)
    })
    },[])

    // console.log(dataProducts["products"]);

    const getDataProducts = () => {
        return dataProducts["products"].map(item => 
        <ProductCard 
        title={item["title"]} 
        description={item["description"]}/>) 
    }

    

    return (
        <div className="ContainerProducts">
            {getDataProducts()}
        </div>
    )
}

export default ProductsDiv

