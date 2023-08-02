import React, { useState } from "react";
import styles from '../css/detailProduct.module.css'

function ImageGallery({Imgmain, images}){

    const[selectedImage, setSelectedImage] = useState(Imgmain)
    images[0] = Imgmain

    const handleImageMouse = (image) => {  
            setSelectedImage(image)
    }
    
    return(
      
        <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
            
                <img src={selectedImage} alt="ảnh không tồn tại" />
              
            </div>
 
          <div className={styles.thumbnailImages}>
            {images.map((image, index) => (
              <img
                key={index}
                className={styles.thumbnailImg}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onMouseEnter={() => handleImageMouse(image)}
              />
            ))}
          </div>
        </div>
      
      );

}

export default ImageGallery