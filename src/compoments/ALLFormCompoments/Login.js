import React from "react";
import styles from "../../css/login.module.css"
import { Link } from "react-router-dom";
import API, { endpoint, authAPI } from "../../API";
import { useState, useContext } from "react";
import cookie from "react-cookies";
import LoadingUser from "../ALLFormCompoments/Loading"
import { Navigate } from "react-router-dom";
import  {userContext} from "../../MyContex"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, dispatch] = useContext(userContext)
  const [Loading, setLoading] = useState(false)

    const handleLogin = (evt) => {
      evt.preventDefault();

      const process = async () => {
        try{
          console.log("username:", username)
          console.log("password:", password)
          console.log(endpoint['login'])

          let res = await API.post(endpoint['login'], {
            "username": username,
            "password": password,
            "client_id":"U6mnEL94xlOgNbE3apMh83Y8GgEEQ4hpAhRFYslg",
            "client_secret":"3TqbmFtGjH6hn7rR6ZnF2TW4mkvbWwnHlbNGYYri02zrYTcmm3iHbAds79kTOCSGRnc6NP1PrgS10fBLtR1aXf3AFiGGV4nxZh6uxBkP0YykKJ26e8Kbjbu2brOowmVf",
            "grant_type": "password",
          },  
         )
          
          console.log("res:", res.data)
          cookie.save('access-token', res.data.access_token)
          let user = await authAPI().get(endpoint['current-user'])
          cookie.save('current-user', user.data)

          dispatch({
            "type" :"login",
            "payload" : user.data
          })

        } catch {
          
        } finally{
            setLoading(false)
            // console.log("Đăng nhập thành công... ")

        }
      }

     if (username === "" || password === "")
            // setErr("Phải nhập username và password!")
            alert("phải nhập username và password!")
        else {
            setLoading(true)
            process()
        }

}
    if (user !== null)
      return <Navigate to="/" />

    return (
        <div className={styles.allLogin}>
            <form onSubmit={handleLogin}  className={styles.allForms}>
          <h3 className={styles.titleName}>Mua sắm tại đây</h3>
          <div className="mb-3">
            <label>Tên Đăng Nhập: </label>
            <input
              value={username}
              type="text"
              className="form-control"
              placeholder="Tên đăng nhập..."
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label>Mật Khẩu:</label>
            <input
              value={password}
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu..."
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
              
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Nhớ mật khẩu
              </label>
            </div>
          </div>
          <div className="d-grid">
            {Loading?<LoadingUser />:<button type="submit" className="btn btn-primary">Đăng Nhập</button>}
          
          
          </div>
          <p className="forgot-password text-right">
            Bạn quên <Link className={styles.Link}>mật khẩu?</Link>
          </p>
        </form>
        </div>
        
      )
}

export default Login;