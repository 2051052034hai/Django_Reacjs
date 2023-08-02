import React from "react";
import styles from '../../css/footer.module.css'

function Footer(){

    return (
        <>
        <div className={styles.allFooter}>
            <div className = {styles.footitems}>
                <h2>Hỗ trợ khách hàng</h2>
                <ul>
                    <li>Các câu hỏi thường gặp</li>
                    <li>Gửi yêu cầu hỗ trợ</li>
                    <li>Hưỡng dẫn đặt hàng</li>
                    <li>Phương thức vận chuyển</li>
                    <li>Chính sách đổi trả</li>
                    <li>Hướng dẫn mua trả góp</li>
                </ul>
            </div>
            <div className = {styles.footitems}>
                <h2>Về cửa hàng</h2>
                <ul>
                    <li>Giới thiệu</li>
                    <li>Tuyển dụng</li>
                    <li>Chính sách bảo mật</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Ưu đãi doanh nghiệp</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className = {styles.footitems}>
                <h2>Hợp tác</h2>
                <ul>
                    <li>Bảo vệ người mua</li>
                    <li>Tuyển dụng</li>
                    <li>Giải quyết khiểu nại</li>
                    <li>Hướng dẫn người mua</li>
                    <li>Ưu đãi doanh nghiệp</li>
                    <li>Quy chế hoạt động</li>
                </ul>
            </div>
            <div className = {styles.footitems}>
                <h2>Kết nối với chúng tôi</h2>
                <ul>
                    <li>Bảo vệ người mua</li>
                    <li>Tuyển dụng</li>
                    
                </ul>
            </div>
        </div>
        <div className={styles.hr}><hr/></div>
        <div className={styles.titlefooter}><h3>@ Bản quyền thuộc về NTN | thiết kế bởi NTN</h3></div>
        </>
        
    )
}

export default Footer