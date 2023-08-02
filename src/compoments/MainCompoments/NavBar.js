
import React, { useState } from "react";
import FetcherApi from '../../loaderCompoments/FetcherApi';
import styles from '../../css/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { userContext } from '../../MyContex';
import { useContext } from "react";

function Header() {

  const [user, dispatch] = useContext(userContext)
  const [categories, setCategories] = useState([])

  const counts = useSelector((state) => state.count)
  const location = useLocation();

  const handleCategoriesLoaded = (data) => {
    setCategories(data)
  }

  const logout = () => {
    dispatch({
        "type": "logout"
    })
}

  let userInfo = (
    <>
      <div>
              <Link to="/Register" className="Link">
                <span>Đăng Ký</span>
              </Link>
            </div>
            <div>
              <Link to="/Login" className="Link">
                <span>Đăng Nhập</span>
              </Link>
            </div>
    </>
  )

  if (user !== null)
    userInfo = (
      <>
        <Link to="/" className="nav-link text-success">
          <img alt={user.username} src={user.image} width="40" className="rounded-circle" />
           <span style={{color: "white",marginLeft: 5}}>chào {user.username}!</span>
        </Link>
        <button style={{marginLeft:10}} onClick={logout} className="btn btn-success"> Đăng xuất</button>
      </>
    )

  return (
    <>
      <FetcherApi onCategoriesLoaded={handleCategoriesLoaded} typefetcher="categories" />
      <div className={styles.headerAll}>
        <div className={styles.headItems}>
          <div className={styles.fullTitle}>

            <Link className={styles.HomeLink} to={"/"}>
              <h1 className={styles.iconApp}>
                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
              </h1>
              <h1 className={styles.titleApp}>
                SalesApp
              </h1>
            </Link>

          </div>
          <div className={styles.middleInput}>
            <div className={styles.itemSreach}>
              <input className={styles.search} type="text" placeholder="Tìm kiếm tại đây..." />
              <button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
            </div>

          </div>
          {counts <= 0 ? (
            <div className={styles.cartCount}>
              <span className={styles.cartIcon}>
                <Link to="/Cart"><FontAwesomeIcon icon="fa-solid fa-cart-plus" style={{ color: "#ffffff", }} /></Link>
              </span>
            </div>
          ) :
            (
              <div className={styles.cartCount}>
                {location.pathname.includes('/Cart') ? (
                  <span className={styles.cartIcon}>
                    <Link to="/Cart"><FontAwesomeIcon icon="fa-solid fa-cart-plus" style={{ color: "#ffffff", }} /></Link>
                  </span>
                ) : (
                  <span className={styles.cartIcon}>
                    <Link to="/Cart"><FontAwesomeIcon icon="fa-solid fa-cart-plus" shake style={{ color: "#ffffff", }} /></Link>
                  </span>
                )}


                <span className={styles.counts}>
                  {counts}
                </span>
              </div>

            )}



          <div className={styles.allLogin}>
            {userInfo}
          </div>

        </div>
        <div className={styles.allList}>
          <ul className={styles.listCategory}>
            {
              categories.map(c => (
                <li key={c.id}>* {c.name}</li>
              ))
            }


          </ul>
        </div>

      </div>
    </>
  );
}

export default Header