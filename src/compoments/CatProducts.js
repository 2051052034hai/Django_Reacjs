import React from "react";
import styles from '../css/catProducts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from "react-bootstrap";
import AdvancedExample from "../compoments/Pagination"

function CatProducts(){

    return(
        <>
            <div className= {styles.allCat}>
                <div className= {styles.catLeft}>
                    <h1><FontAwesomeIcon icon="fa-solid fa-list" /> Danh Mục</h1>
                    <h3><FontAwesomeIcon icon="fa-solid fa-play" style={{color: "#d40c0c", fontSize:15}} /> Thời Trang Nam</h3>
                    <h1 className= {styles.hSecond}>BỘ LỌC TÌM KIẾM</h1>

                    <div className={styles.Insales}>
                        <h3>Theo Danh Mục:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Áo thun (100k)
                            <span class={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="python"/> Áo thun (100k)
                           
                        </label><br></br>
                        <label>
                             <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Áo thun (100k)
                           
                        </label><br></br>
                        <label>
                             <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Áo thun (100k)
                           
                        </label><br></br>
                    </div>

                    <div className={styles.Insales}>
                        <h3>Nơi Bán:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Hà Nội
                            <span class={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="python"/> TP.Hồ Chí Minh
                           
                        </label><br></br>
                        <label>
                             <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Thái Nguyên
                           
                        </label><br></br>
                        <label>
                             <span class={styles.checkmark}></span>
                            <input type="checkbox" name="language" value="java"/> Vĩnh Phúc
                           
                        </label><br></br>
                    </div>
                   
                    <div className={styles.Insales}>
                        <h3>Tình Trạng:</h3>
                        <label>
                           
                            <input type="checkbox" name="language" value="javascript"/> Đã sử dụng
                            <span class={styles.checkmark}></span>
                        </label><br></br>
                        <label>
                            <span class={styles.checkmark}></span>
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

                            <div className = {styles.choosePrice}>
                                <span>Giá </span>
                                <span><FontAwesomeIcon icon="fa-solid fa-angle-down" /></span>
                            </div>

                            <div className = {styles.paginator}>
                                <span className={styles.spanWhite}>1/9</span>
                                <span><FontAwesomeIcon icon="fa-solid fa-angle-left" /> </span>
                                <span><FontAwesomeIcon icon="fa-solid fa-angle-right" /></span>
                               
                            </div>
                            
                        </div>

                        <div className = {styles.catProduct}>
                            <div>
                             <Card>
                                <Card.Img variant="top" src="\khoahoc.jpg" />
                                <Card.Body>
                                    <Card.Title className="titleName">khoa hoc</Card.Title>
                                    <Card.Text className="text-ellipsis" dangerouslySetInnerHTML={{ __html: "mua he"}}></Card.Text>
                                    <Card.Text className="price"> 50000 đ</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                             <Card>
                                <Card.Img variant="top" src="\khoahoc.jpg" />
                                <Card.Body>
                                    <Card.Title className="titleName">khoa hoc</Card.Title>
                                    <Card.Text className="text-ellipsis" dangerouslySetInnerHTML={{ __html: "mua he"}}></Card.Text>
                                    <Card.Text className="price"> 50000 đ</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>


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