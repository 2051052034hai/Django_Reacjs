import React, {useMemo, useRef, useContext, useEffect} from "react"
import {useSelector} from "react-redux"
import styles from "../../css/cart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import {delete_Cart, prev_Cart, next_Cart, update_cart, blur_cart, check_out, delete_bills} from "../AllCart/Actions"
import { Link } from "react-router-dom"
import { userContext } from "../../MyContex"
import API, { endpoint} from "../../API";


 const Cart = () => {
    
    const cartState = useSelector((state) => state.products)
    const Bills = useSelector((state) => state.billDetail)

    const dispatch = useDispatch()
    const inputRef = useRef()
    const [user] = useContext(userContext)

    const total = useMemo(() => {
        return cartState.reduce((acc, product) => {
          return acc + product.unitPrice * product.quantity;
        }, 0);
      }, [cartState]);

    // Các hàm xử lý
    const replacetoString = (newString) => {

        return newString.toLocaleString("en-US", { minimumFractionDigits: 3 });
    }   
    const newTotal = replacetoString(total)

    const handleDelete = (index, quantity) => {
        
        return () => {
           
            dispatch(delete_Cart(index, quantity))
        }
    }
    
    const handlePrev = (index) =>{

        return () => {
            
            if(cartState[index].quantity <= 1)
            {
                // sẽ cập nhật hiện thanh hỏi khách hàng có muốn xoá sản phẩm tại đây...
                return null;
               
            }else{
                dispatch(prev_Cart(index))
            }
            
        }
    }

    const handleNext = (index, unitsInStock, quantity) => {
        
        return () => {
            if(quantity >= unitsInStock)
                alert("Bạn không được nhập quá số lượng tồn kho của sản phẩm!")
            else{
                dispatch(next_Cart(index))
            }
        }
    }
  
    const handeleChangeInput = (value, index) => {
        if(value >= 1|| value === "")
            dispatch(update_cart(+value, index))
    }

    const handleOnblur = (index, unitsInStock, quantity) => {
        return () => {

            if(quantity > unitsInStock) {
                alert("Bạn không được nhập quá số lượng tồn kho của sản phẩm!")
                dispatch(blur_cart(index, unitsInStock))
            }
            if(cartState[index].quantity === "") {
                dispatch(blur_cart(index, 1))
                
            }
           
        }
    }

    const handleCheckOut = (userId, newTotal) => {
        
        return () => {
            newTotal = newTotal*1000
            dispatch( check_out(cartState, userId, newTotal))
          
        }
        
    }
        

    useEffect(() => {

        const createBill = async (billData) => {
            try {
              await API.post(endpoint['bill'], {
                bill: billData.bill,
                bill_details: billData.bill_details,
              }).then((res) => {
                if (res.status === 201) {
                  console.log("thanh toán thành công");
                } else {
                  console.log("thanh toán thất bại");
                }
              }).catch(err => console.error(err));
            } catch (error) {
              console.error(error);
            }
          };

        if(cartState.length < 1 && Object.keys(Bills).length !== 0)
        {
            createBill(Bills)
            dispatch(delete_bills())

        }
            
      }, [Bills]);

    if(cartState.length > 0) {
    return (
        <>
            <div className={styles.allCart}>
                <div className={styles.titleH1}>
                    <h1>Giỏ Hàng</h1>
                </div>
                
            <div className={styles.listProduct}>
                <table className={styles.tables}>
                    <thead>
                    <tr className={styles.firtsTr}>
                        <th>Sản Phẩm</th>
                        <th></th>
                        <th>Giá Bán</th>
                        <th>Số Lượng</th>
                        <th>Thành Tiền</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                    
                    
                    {
                        cartState.map((c,index) => {
                            
                            let subtotal = (parseInt(c.unitPrice) * c.quantity)
                            subtotal = replacetoString(subtotal)

                            return (
                                <tr key={index} className={styles.tr}>
                                <td className = {styles.firtTd}>
                                    <div className={styles.imgProduct}>
                                        <img src = {c.image} alt="ảnh không tồn tại" />
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titles}>
                                        <h4>{c.name}</h4>
                                        <h5>Color:</h5>
                                        <h5>Vận chuyển: </h5>
                                        <h5 onClick={handleDelete(index, c.quantity)} className={styles.remote}>Xoá</h5>
                                    </div>
                                </td>
                                <td className={styles.price}>{c.unitPrice} đ</td>
                                <td >
                                    <div className={styles.quantity}>
                                     
                                    <button onClick={handlePrev(index)} ><FontAwesomeIcon icon="fa-solid fa-caret-left" /></button>
                                    <input 
                                        onChange={(e) => handeleChangeInput(e.target.value, index)} 
                                        className="nospin" ref={inputRef} 
                                        type="number" 
                                        value={c.quantity} 
                                        onBlur={handleOnblur(index, c.unitsInStock, c.quantity)}
                                        />
                                    <button onClick = {handleNext(index, c.unitsInStock, c.quantity)}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
                                       
                                    </div>
                                </td>
                                <td className={styles.sub}>{subtotal} đ</td>
                            </tr>
                            )
                        })
                    }
                   
                   
                    </tbody>
                   
                </table>
            </div>

            <div className={styles.bottomCart}>
                <div>
                <div className = {styles.total}>
                        <h3>Tổng Tiền: <span>{newTotal} đ </span></h3>
                    </div>
                    <div className = {styles.checkButton}>
                       <Link to= "/">
                            <button className = {styles.buttonFirst}>Tiếp tục mua sắm</button>
                        </Link> 
                        {user != null ? 
                        <button onClick = {handleCheckOut(user.id, newTotal)} className = {styles.buttonSecond}>Thanh toán</button>:
                        <Link to = "/Login" className = {styles.linkSeconnd}>
                            <button className = {styles.buttonSecond}>Đăng nhập để thanh toán</button>
                            </Link>
                        }
                        
                    </div>
                    </div>
                </div>
              
            </div>
        </>
    )
    }else{
        
       return (
            <div className={styles.allEmpty}>
                <div className={styles.emptyDiv}>
                    <div className={styles.mainImg}>
                        <img src="/static/cart-empty.png" alt="ảnh này không tồn tại" />
                    </div>
                    <div>
                        <h5 className={styles.titleEmpty}>Giỏ hàng của bạn còn trống</h5>
                    </div>
                    <div className={styles.button}>
                        <Link to ="/">
                            <button type = "text" >Mua sắm ngay</button>
                        </Link>
                    </div>
                </div>
            </div>
       )
    }
}



export default Cart