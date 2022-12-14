import React from 'react'
import { SingleProductLogic } from './SingleProductlogic'
import { Button, Rating } from '@mui/material';
import useStyles from "./styles";


const SingleProduct = () => {
  const classes = useStyles();
  const {
    product,
    show,
    setShow,
    addToWishHandler,
    addToCartHandler,
  } = SingleProductLogic();

  const changeImage = (featureimg) => {
    setShow(featureimg)
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.imgContainer}>
            <img src={show} alt="" className={classes.img} />
          </div>
          <div className={classes.imageOption}>

            {
              product?.featureimg.map((currentImg) => (
                <div className={classes.imageContainer}>
                  <img src={currentImg} alt="" className={classes.img} onMouseOver={() => changeImage(currentImg)} />
                </div>
              ))
            }
          </div>

        </div>
        <div className={classes.right}>
          <div className={classes.details}>
            <h1 className={classes.title}>{product?.title}</h1>
            <div className={classes.divider}></div>
            <p className={classes.price}><span style={{ color: "black" }}>Price: </span>₹{product?.price}</p>

            {/* <div className={classes.sizes}>
              <h3>Size:</h3>
              <select className={classes.select}>
                <option value="not selected" >Select</option>
                {
                  product?.size.map((currentSize, index) => (
                    <option value={currentSize} key={index}>{currentSize}</option>
                  ))
                }
              </select>
            </div> */}
            <div className={classes.productInstruction}>
              <ul>
                <li>100% Cotton</li>
                <li>Machine wash</li>
                <li>Imported</li>
              </ul>
            </div>

          </div>

          <div className={classes.Actions}>


            <Button variant="contained" color="primary" className={classes.button} onClick={addToCartHandler}>
              Add to Cart
            </Button>

            <Button variant="contained" color="primary" className={classes.button} onClick={addToWishHandler}>
              Add to Wishlist
            </Button>


          </div>

        </div>
      </div>
      <div className={classes.productDescription}>
        <h1>Product Details</h1>
        <p><span style={{ fontWeight: "bold" }}>Manufacturer:</span>{product?.manufacturer}</p>
        <p><span style={{ fontWeight: "bold" }}>ASIN:</span>{product?.asin}</p>
        <p><span style={{ fontWeight: "bold" }}>Item model number:</span>{product?.itemModelNumber}</p>
        <p><span style={{ fontWeight: "bold" }}>Country of Origin:</span>{product?.countryOfOrigin}</p>
        <p><span style={{ fontWeight: "bold" }}>Manufacturer:</span>{product?.manufacturer}</p>
        <p><span style={{ fontWeight: "bold" }}>Packer:</span>{product?.packer}</p>
        <p><span style={{ fontWeight: "bold" }}>Item Weight:</span>{product?.itemWeight}</p>
        <p><span style={{ fontWeight: "bold" }}>Item Dimensions LxWxH:</span>{product?.itemDimensions}</p>
        <p><span style={{ fontWeight: "bold" }}>Generic Name:</span>{product?.genericName}</p>
      </div>
      <div className={classes.reviewSection}>
        <div className={classes.starContainer}>
          <h1>Reviews</h1>
          <div className={classes.stars}>
            <Rating
              name="simple-controlled"
              style={{ color: '#185694', fontSize: "1.8rem" }}
              precision={0.5}
            // value={courses && courses.rating}
            // onChange={(newValue) => {
            //   setRating(newValue);
            // }}
            />
            <div className={classes.reviewCount}>
              <p>4.5 &nbsp;</p>
              <p>out of 5</p>
            </div>
            <div className={classes.starProgress}>
              <div className={classes.progress}>
                <h4>5 star</h4>
                <div className={classes.progressBar}>
                  <div className={classes.progressFill} style={{ width: "80%" }}></div>
                </div>
                <p>80%</p>
              </div>
              <div className={classes.progress}>
                <h4>4 star</h4>
                <div className={classes.progressBar}>
                  <div className={classes.progressFill} style={{ width: "10%" }}></div>
                </div>
                <p>10%</p>
              </div>
              <div className={classes.progress}>
                <h4>3 star</h4>
                <div className={classes.progressBar}>
                  <div className={classes.progressFill} style={{ width: "5%" }}></div>
                </div>
                <p>5%</p>
              </div>
              <div className={classes.progress}>
                <h4>2 star</h4>
                <div className={classes.progressBar}>
                  <div className={classes.progressFill} style={{ width: "2%" }}></div>
                </div>
                <p>2%</p>
              </div>
              <div className={classes.progress}>
                <h4>1 star</h4>
                <div className={classes.progressBar}>
                  <div className={classes.progressFill} style={{ width: "3%" }}></div>
                </div>
                <p>3%</p>
              </div>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.WriteReview}>
              <input type="text" placeholder="Write a review" />
              <Button variant="contained" color="primary" className={classes.button}>
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.showReview}>
          <div className={classes.review}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewUser}>
                <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" />
                <div className={classes.reviewUserName}>
                  <h3>Jane Doe</h3>
                  <div className={classes.circle}></div>
                  <p>1 day ago</p>
                </div>
              </div>
              <div className={classes.reviewRating}>
                <Rating
                  name="simple-controlled"
                  style={{ color: '#185694', fontSize: "1.8rem" }}
                />
              </div>
            </div>
            <div className={classes.reviewBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.

              </p>
            </div>

          </div>
          <div className={classes.review}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewUser}>
                <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" />
                <div className={classes.reviewUserName}>
                  <h3>Jane Doe</h3>
                  <div className={classes.circle}></div>
                  <p>1 day ago</p>
                </div>
              </div>
              <div className={classes.reviewRating}>
                <Rating
                  name="simple-controlled"
                  style={{ color: '#185694', fontSize: "1.8rem" }}
                />
              </div>
            </div>
            <div className={classes.reviewBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.

              </p>
            </div>

          </div>
          <div className={classes.review}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewUser}>
                <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" />
                <div className={classes.reviewUserName}>
                  <h3>Jane Doe</h3>
                  <div className={classes.circle}></div>
                  <p>1 day ago</p>
                </div>
              </div>
              <div className={classes.reviewRating}>
                <Rating
                  name="simple-controlled"
                  style={{ color: '#185694', fontSize: "1.8rem" }}
                />
              </div>
            </div>
            <div className={classes.reviewBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.

              </p>
            </div>

          </div>
          <div className={classes.review}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewUser}>
                <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" />
                <div className={classes.reviewUserName}>
                  <h3>Jane Doe</h3>
                  <div className={classes.circle}></div>
                  <p>1 day ago</p>
                </div>
              </div>
              <div className={classes.reviewRating}>
                <Rating
                  name="simple-controlled"
                  style={{ color: '#185694', fontSize: "1.8rem" }}
                />
              </div>
            </div>
            <div className={classes.reviewBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae.

              </p>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default SingleProduct