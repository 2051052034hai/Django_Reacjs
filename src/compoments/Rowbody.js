import React, { useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CardItem from '../compoments/CartItem'
import SliderSetting from '../globalSettings/sliderSetting'
import {Link} from 'react-router-dom'


function RowBodyCard({newProduct, category_name, category_id}) {
    
    const[newSetting, setNewSettings] = useState({})

    const settings = {
        slidesToShow: 6, // số lượng sản phẩm hien thi
        slidesToScroll: 3, // Số lượng sản phẩm được trượt khi bạn nhấp vào mũi tên trái/phải
        }; 

    // const [setting, newSetting] = useState();

    const handleLoadSetting = (data) => {
            setNewSettings(data);
 
    }
    
    // kiểm tra ở đây...
        return (
            <>
                <SliderSetting loadSetting = {handleLoadSetting} {...settings} />
                {newProduct.length > newSetting.slidesToShow ? (
                <>
                    <div className = "rowbodycard">

                    <div className = "nav_view">
                        <h1 className="title_Cate">{category_name}</h1>
                        <Link to={`/categories/${category_id}`} className="Link view_link"><h4 className="view_next">Xem thêm</h4></Link>
                    </div>
                  
                    <Slider {...newSetting}>
                    
                            { newProduct.map(p => {
                            p.unitPrice = p.unitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".").slice(0, -3);
        
                            return  <Link className="Link" to ={`/product/${p.id}`} key ={p.id}><CardItem item = {p}/></Link> 
                        })}
                    </Slider>
                    </div>
                </>
                ):null}
              
            </>
        )
}

export default  RowBodyCard;