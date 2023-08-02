import React, { useState } from "react";
import FetcherApi from '../../loaderCompoments/FetcherApi';
import RowBodyCard from '../Rowbody' 
import { useLocation} from 'react-router-dom';
import DetailProduct from "../DetailProduct";
import {Route, Routes} from 'react-router-dom'
import Cart from'../../compoments/MainCompoments/Cart'
import Login from '../ALLFormCompoments/Login'
import Register from '../ALLFormCompoments/Register'
import CatProducts from '../../compoments/CatProducts'

export const CardComponent = () => {
  const[products, setProducts] = useState([])
  const[Categories, setCategory] = useState([])

  const location = useLocation();



  const hiddenPaths = ['/product/', '/Cart', '/Login', '/Register', '/categories/'];

  let typePath;
  
  let checkPath = hiddenPaths.some(path => {
      typePath = path
      return location.pathname.includes(path)
    })

  if (checkPath) { 

    switch(typePath){
      case '/product/':
          let id = location.pathname.split(`${typePath}`)[1];
          return (
            <Routes>
              <Route path ={`${typePath}${id}`} element = {<DetailProduct />}/>
            </Routes>
          ); // Ẩn component nếu nằm trên đường định tuyến được chỉ định
      case '/categories/':
            let cat_id = location.pathname.split(`${typePath}`)[1];
            return(
              <Routes>
              <Route path ={`${typePath}${cat_id}`} element = {<CatProducts />}/>
            </Routes>
            );
      case '/Cart':
          return (
            <Routes>
              <Route path ={`${typePath}`} element = {<Cart />}/>
            </Routes>
          );
      
      case '/Login':
        return (
          <Routes>
            <Route path ={`${typePath}`} element = {<Login />}/>
          </Routes>
        );         
      case '/Register':
        return (
          <Routes>
            <Route path ={`${typePath}`} element = {<Register />}/>
          </Routes>
        )
          default:
              console.error("lỗi typePath invalid...")
    }
  }
  

  const handleProductLoaded = (data) => {
      setProducts(data.results)
  }
  const handleCategoryLoaded = (data) => {
        setCategory(data)
        
  }

  return (
      <>
      <div className="AllsBodyCards">
       <FetcherApi onCategoriesLoaded = {handleProductLoaded} typefetcher = "products"/>
       <FetcherApi onCategoriesLoaded = {handleCategoryLoaded} typefetcher = "categories"/>
        {Array.isArray(products) && products.length > 0 && (
          
          Categories.map(c => {
            // cần xử lý thêm logic khi loại sản phẩm không tồn tại
            //// viết logic thêm tại đây.........
            ////..........
            let newProduct = products.filter(p => {
              //
              return p.category_id===c.id.toString()
            });

            return <RowBodyCard key={c.id} newProduct = {newProduct} category_name={c.name} category_id={c.id}/>
            
          })
          
        )}
          
        </div>
      </>
  )

};

