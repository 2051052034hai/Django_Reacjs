import React, { useState } from "react";
import styles from '../css/catProducts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from "react-bootstrap";
import AdvancedExample from "../compoments/Pagination"
import FetcherApi from "../loaderCompoments/FetcherApi";
import { useLocation } from "react-router-dom";
import ChangePrice from "../compoments/MainCompoments/ChangePrice"
import { useRef } from "react";

function CatProducts(){

    const [productCat, setProductCat] = useState([])
    const [namecat, setNameCat] = useState('')
    const ulUref = useRef()

    const [isMouseOver, setIsMouseOver] = useState(false);

    const location = useLocation();
    let catProductId = location.pathname.split('/categories/')[1]

    const handleCatProductLoaded = (data) => {
        setProductCat(data)
    }

    const handleMouseOver = () => {

        setIsMouseOver(true);
    }
    const handleMouseLeave = () => {
       

        setIsMouseOver(false);
    }
    
    
    const handleGetCatIdLoaded = (data) => {

        setNameCat(data.name)
    }

    return(
        <>
            <FetcherApi onCategoriesLoaded = {handleCatProductLoaded} typefetcher = "getProductsCat" productId = {catProductId}/>
            <FetcherApi onCategoriesLoaded = {handleGetCatIdLoaded} typefetcher = "getCategory" productId = {catProductId}/>
            <div className= {styles.allCat}>
                <div className= {styles.catLeft}>
                    <h1><FontAwesomeIcon icon="fa-solid fa-list" /> Danh Mục</h1>
                    <h3><FontAwesomeIcon icon="fa-solid fa-play" style={{color: "#d40c0c", fontSize:15}} /> {namecat} </h3>
                    <h1 className= {styles.hSecond}>BỘ LỌC TÌM KIẾM</h1>

                    <div className={styles.Insales}>
                        <h3>Theo Danh Mục:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Áo thun (100k)
                            <span className={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="python"/> Áo thun (100k)
                           
                        </label><br></br>
                        <label>
                             <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Áo thun (100k)
                           
                        </label><br></br>
                        <label>
                             <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Áo thun (100k)
                           
                        </label><br></br>
                    </div>

                    <div className={styles.Insales}>
                        <h3>Nơi Bán:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Hà Nội
                            <span className={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="python"/> TP.Hồ Chí Minh
                           
                        </label><br></br>
                        <label>
                             <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Thái Nguyên
                           
                        </label><br></br>
                        <label>
                             <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Vĩnh Phúc
                           
                        </label><br></br>
                    </div>
                   
                    <div className={styles.Insales}>
                        <h3>Tình Trạng:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Đã sử dụng
                            <span className={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span className={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="python"/> Mới
                           
                        </label><br></br>
                     
                    </div>
                    
                    <div className={styles.Insales}>
                        <h3>Đánh giá</h3>
                        <ul>
                            <li className={styles.fiveStart}>
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                            </li>
                            <li className={styles.fiveStart}>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star"/>
                                trở lên
                            </li>
                            <li className={styles.fiveStart}>
                            <   FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star" />
                                trở lên
                                
                            </li>
                            <li className={styles.fiveStart}>
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star" />
                                <FontAwesomeIcon  className={styles.active} icon="fa-solid fa-star" />
                                trở lên
                            </li>
                            
                        </ul>

                        <div className={styles.aboutPrice}>
                            <div className={styles.twoPrice}>
                                <input type="text" placeholder="₫ TỪ"/>
                                <hr className={styles.line} ></hr>
                                <input type="text" placeholder="₫ ĐẾN"></input>
                               
                            </div>
                            <div className={styles.button}> <button>ÁP DỤNG</button></div>
                        </div>
                    </div>
                    

                </div>
                    <div className={styles.carRight}>
                        <div className={styles.navRight}>
                            <h5>Sắp xếp theo</h5>
                            <div className={styles.hover}><span>Phổ biến</span></div>
                            <div className={styles.hover}><span>Mới nhất</span></div>
                            <div className={styles.hover}><span>Bán chạy</span></div>

                            <div 
                                className = {styles.choosePrice}
                                onMouseLeave={handleMouseLeave}
                            >

                                <div className={styles.spanAll} onMouseOver = {handleMouseOver}>
                                    <span >Giá </span>
                                    <span ><FontAwesomeIcon icon="fa-solid fa-angle-down" /></span>
                                </div>
                               
                                <ul 
                                    style={{opacity: isMouseOver ? '1': '0'}}
                                     ref = {ulUref} className={styles.showUl}>
                                    <li>Giá: Từ cao đến thấp</li>
                                    <li>Giá: Từ thấp đến cao</li>
                                </ul>
                            </div>

                            <div className = {styles.paginator}>
                                <span className={styles.spanWhite}>1/9</span>
                                <span><FontAwesomeIcon icon="fa-solid fa-angle-left" /> </span>
                                <span><FontAwesomeIcon icon="fa-solid fa-angle-right" /></span>
                               
                            </div>
                            
                        </div>

                        <div className = {styles.catProduct}>
                            {/* sử dụng vòng lặp for ở đây */}
                            {productCat.length > 0 ? (
                                <>
                                    {productCat.map((p, index) => {
                                       
                                    return (
                                        <div key={index}>
                                            <Card>
                                                <Card.Img variant="top" src={p.image} />
                                                <Card.Body>
                                                    <Card.Title className="titleName">{p.name}</Card.Title>
                                                    <Card.Text className="text-ellipsis" dangerouslySetInnerHTML={{ __html: p.description}}></Card.Text>
                                                    <Card.Text className={styles.unitPrice} > <ChangePrice unitPrice = {p.unitPrice} /> đ</Card.Text>
                                                    <Card.Body className={styles.bodyStar}>
                                                        <Card.Text className={styles.startActive}>
                                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                            </Card.Text>
                                                            <Card.Text>Đã bán 20</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className = {styles.enjoy}>Yêu thích</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                            )
                                        })
                                    }
                                </>
                            
                            ):null}
                            


                        </div>
                        <div className={styles.allPaginator}>
                            <AdvancedExample />
                        </div>
                      
                    </div>
            </div>
        </>
    )
}

export default CatProducts