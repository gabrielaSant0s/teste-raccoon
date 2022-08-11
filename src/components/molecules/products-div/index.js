import React, {useEffect, useState} from "react";
import "./style.css"
import apiProducts from "../../../services/api"

import ProductCard from "../../atoms/product-card";

const ProductsDiv = () => {
    const [dataProducts,setDataProducts] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect (()=>{
        apiProducts.get("products").then(({data})=>{
            setDataProducts(data)
    })
    },[])

    const pages = Math.ceil(dataProducts["products"]?.length/itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = dataProducts["products"]?.slice(startIndex, endIndex)
    
    
    const arrayNumbers = []
    for (let index = 0; index < pages; index++) {
        arrayNumbers.push(index)   
    }
    

    return (
        <>
        <div className="containerProducts">
           {currentItens?.map((item) => (
                <div className="cards"><ProductCard title={item["title"]} description={item["description"]}/></div>
            ))}
        </div>
        <div className="containerPagination">
            {arrayNumbers.map((i, index) =>{
                return <button className="pagination" value={index} onClick={(e) => setCurrentPage(e.target.value)}>{index+1}</button>
            })}
        </div>
        </>
    )
}

export default ProductsDiv