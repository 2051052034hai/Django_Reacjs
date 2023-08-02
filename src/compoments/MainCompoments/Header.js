import styles from '../../css/header.module.css'
import React, {useState} from 'react'
import clsx from 'clsx'
import SliderSetting from '../../globalSettings/sliderSetting'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';

function Header(){
    

    const location = useLocation();
    const hiddenPaths = ['/product/', '/categories/' ,'/Cart', '/Login', '/Register'];

    if (hiddenPaths.some(path => location.pathname.includes(path)))  {
      return null
    }

    
    const[newSetting, setNewSettings] = useState({})

    const settings = {
        slidesToShow: 1, // số lượng sản phẩm hien thi
        slidesToScroll: 1, // Số lượng sản phẩm được trượt khi bạn nhấp vào mũi tên trái/phải
        autoplay: true,
        }; 

    // const [setting, newSetting] = useState();

    const handleLoadSetting = (data) => {
            setNewSettings(data);
 
    }

    return(
        <>
             <SliderSetting loadSetting = {handleLoadSetting} {...settings} />
            <div className={styles.titleImage}>
                
                    <div className={styles.imgSales}>
                    <Slider {...newSetting}>
                        <div><img alt="ảnh này không tồn tại" src = "/static/anh-cua-hang-thoi-trang-12.jpg"/></div>
                        <div><img alt="ảnh này không tồn tại" src = "/static/anh-cua-hang-thoi-trang-12.jpg"/></div>
                        <div><img alt="ảnh này không tồn tại" src = "/static/anh-cua-hang-thoi-trang-12.jpg"/></div>
                    </Slider>
                </div>
                <div className={clsx(styles.twoImg)} >
                    <div><img alt="ảnh này không tồn tại" src = "/static/Dep-long-lay-voi-top-10-shop-thoi-trang-tai-Tien-Giang-cung-bat-mi-6.jpg"/></div>
                    <div><img alt="ảnh này không tồn tại" src = "/static/Dep-long-lay-voi-top-10-shop-thoi-trang-tai-Tien-Giang-cung-bat-mi-6.jpg"/></div>
                </div>
            </div>
        </>
        
    )
}

export default Header