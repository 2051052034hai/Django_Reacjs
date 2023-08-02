
import React, { useRef, useState } from "react";
import styles from "../../css/register.module.css"
import { Link } from "react-router-dom";
import API, { endpoint } from '../../API';
import clsx from "clsx";


function  Register() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cofirmPass, setCofirmPass] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const refAvatar = useRef()

    const createUser = async (userData) => {
      console.log(userData)
      try {
       
        await API.post(endpoint['register'], userData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
            
            if (res.status === 201){
                console.log("tạo user thành công")
            }else
            {
              console.log("đăng kí thất bại")
            }

          
        }).catch(err => console.error(err))

      } catch (error) {
        console.error(error);
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      let avatar = refAvatar.current.files[0]
      if (password !== cofirmPass)
          return alert("Password bạn nhập không trùng khớp")    
      
      else{
        try {
          const userData = {
            username,
            password,
            email,
            address,
            avatar
          }
    
          await createUser(userData);
        } catch (error) {
          console.error(error);
        }
      }
    };
    
    return (
        <div className={styles.allRegister}>
           <form className={styles.allForms} onSubmit={handleSubmit} >
          <h3 className={styles.titleName}>Tạo tài khoản</h3>
          <div className="mb-3">
            <label>Tên Đăng Nhập: </label>
            <input
              
              type="text"
              className="form-control"
              placeholder="Tên đăng nhập..."
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Mật Khẩu:</label>
            <input
              
              type="password"
              value={password}
              className="form-control"
              placeholder="Nhập mật khẩu..."
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Nhập Lại mật khẩu:</label>
            <input
              value={cofirmPass}
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu..."
              autoComplete="new-password"
              onChange={(e) => setCofirmPass(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Địa chỉ: </label>
            <input
             value={address}
              type="text"
              className="form-control"
              placeholder="Nhập địa chỉ..." 
              onChange={(e) => setAddress(e.target.value)}
              />
          </div>
          <div className="mb-3">
            <label>Email: </label>
            <input
              value={email}
              type="email"
              className="form-control"
              placeholder="Nhập email..."
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="mb-3">
            <label>Chọn ảnh đại diện: </label>
            <input 
              name="avatar"
              className = {clsx(styles.files, "form-control")}
              type="file" 
              placeholder="Chọn ảnh"
              ref = {refAvatar}
              />
          </div>
        
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            Đăng ký
            </button>
          </div>
          <p className="forgot-password text-right">
          Đăng nhập <Link className={styles.Link}>bây giờ?</Link>
          </p>
        </form>
        </div>
    )
}

export default Register