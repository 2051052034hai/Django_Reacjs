import React, { useRef } from "react"
import { useLocation } from "react-router-dom";
import FetcherApi from "../loaderCompoments/FetcherApi";
import { useState } from "react";
import styles from '../css/detailProduct.module.css'
import ImageGallery from '../compoments/ImageGallery'
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {add_cart, count_Cart} from "./AllCart/Actions"
import {useDispatch} from "react-redux"

function DetailProduct(){

    const [product, setProduct] = useState({})
    const [count, setCount] = useState(1)
    const countRef = useRef()

    const dispatch = useDispatch();

    const location = useLocation();
    let productId = location.pathname.split('/product/')[1]


    const images = [
        '/static/sg-11134201-22110-gp9d4kjul6jvbc_tn (2).jpg',
        '/static/sg-11134201-22110-gp9d4kjul6jvbc_tn (5).jpg',
        '/static/sg-11134201-22110-gp9d4kjul6jvbc_tn (6).jfif',
        '/static/sg-11134201-22110-gp9d4kjul6jvbc_tn (5).jpg',
        
        // Thêm các đường dẫn ảnh khác nếu cần
      ];

    const handleCategoriesLoaded = (data) => {
        
        data.unitPrice = data.unitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".").slice(0, -3);
        setProduct(data)
    }

    const handleAddCart = () => {

        dispatch(add_cart(product, product.id, +countRef.current.value))
        dispatch(count_Cart(+countRef.current.value))
       
    }

    const handlePrev = () =>{

        (count <= 1) ? setCount(1):setCount(count-1) 

    }

    const handleNext = (unitsInStock) =>{

       return () => {

            if(count >= unitsInStock)
            {
                alert("Bạn không dược nhập quá số lượng tồn kho !")
            }else{
                setCount(count + 1)
            }
           
       }
    }

    const handleChangeInput = (value) => {
        const regex = /^\d*$/; // Chỉ cho phép nhập các giá trị số không âm

        if (regex.test(value)) {
             setCount(value)
          }
      
    }

    const handleOlurInput = (unitsInStock) => {
       return () => {

        if(count > unitsInStock)
        {
            alert("Bạn không dược nhập quá số lượng tồn kho !")
            setCount(1)
        }else{
            if(count === 0)
                 setCount(1)
            else
                setCount(+count)
            
        }

       }
    }

    return (
        <>
            <FetcherApi onCategoriesLoaded = {handleCategoriesLoaded} typefetcher = "getProduct" productId = {productId}/>
            <div className={styles.allDetail}>
                <div className= {clsx(styles.items, styles.mainImg)}>
                    <div> 
                    {product.image !== undefined ? (
                        <ImageGallery Imgmain = {product.image} images = {images} />
                    ):null}
                    </div>
                </div>
                <div className={styles.allRight}>
                    <h2 className={styles.titleName}><span className={styles.like}>Yêu thích</span> {product.name}</h2>
                    <h4 className={styles.price}>{product.unitPrice} đ</h4>
                    <div className={styles.allFlex}>
                        <div className={styles.deal}>
                            <span className={styles.title} >Deal Sốc</span> 
                            <div className={styles.info}><span >Mua để nhận quà</span></div>
            
                        </div>
                        <div className={styles.deal}>
                            <span className={styles.title}>Bảo hiểm</span>
                            <div className={styles.info}><span>Bảo hiểm thời trang</span></div> 
                          
                        </div>
                        <div className={styles.deal}>
                            <span className={styles.title}>Tồn kho: </span>
                            <div className={styles.info}><span>{product.unitsInStock} cái</span></div> 
                          
                        </div>
                        <div>
                            <h3 className={styles.title}>Size</h3>
                            <div className={styles.type}>
                                <div><span>M</span></div>
                                <div><span>L</span></div>
                                <div><span>XL</span></div>
                                <div><span>2XL</span></div>
                            </div>
                        </div>
                        <div>
                            <h3 className={clsx(styles.title, styles.count)}>Số lượng</h3>
                            <div className={styles.mainInput}>
                                <button onClick={handlePrev} >-</button>
                                <input 
                                    className="nospin" 
                                    type="number" 
                                    onChange={(e) => handleChangeInput(e.target.value)} 
                                    ref = {countRef} value={count} 
                                    onBlur={handleOlurInput(product.unitsInStock)}
                                />
                                <button onClick={handleNext(product.unitsInStock)}>+</button>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.cart} onClick={handleAddCart} type = "text"><FontAwesomeIcon className={styles.cartIcon} icon="fa-solid fa-cart-shopping" />Thêm vào giỏ hàng</button>
                            <button className={styles.buy} type = "text">Mua ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct