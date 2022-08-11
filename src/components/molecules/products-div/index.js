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


    return (
        <div className="containerProducts">
           {dataProducts["products"]?.map((item) => (
                <div className="cards"><ProductCard title={item["title"]} description={item["description"]}/></div>
            ))}
        </div>
    )
}

export default ProductsDiv