import{ memo, useEffect } from "react";

function SliderSetting({loadSetting,slidesToShow, slidesToScroll, autoplay}) {

    const settings = {
        arrows: true,
        dots: true, // Hiển thị chấm chỉ số
        infinite: true, // Vô hạn lặp lại trình trượt
        slidesToShow: slidesToShow, // số lượng sản phẩm hien thi
        autoplaySpeed: 2000, // Tốc độ trượt tự động (ms)
        slidesToScroll: slidesToScroll, // Số lượng sản phẩm được trượt khi bạn nhấp vào mũi tên trái/phải
        autoplay: autoplay,
        }; 
    useEffect(()=> {
        loadSetting(settings)
    }, [])
    
    return null
}

export default memo(SliderSetting);