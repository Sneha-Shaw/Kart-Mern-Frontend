import { useState } from "react"

export const HomeLogic = () => {

    const products = [
        {
            "name": "T-shirt by someone from india", "price": "200",
            "img": ["https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg",
                "https://itizen-production.s3.amazonaws.com/uploads/image_asset/image/24105975/1599483624.249624"],
            "id": 1, "desc": "lorem ipsum lorem ipsum",
            "color": ["red", "blue", "green", "black", "#fff", "#ef0f0f"],
            "size": ["S", "M", "L", "XL", "XXL"]
        },
        {
            "name": "T-shirt by someone from US", "price": "500",
            "img": ["https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg",
                "https://itizen-production.s3.amazonaws.com/uploads/image_asset/image/24105975/1599483624.249624"],
            "id": 2, "desc": "lorem ipsum lorem ipsum",
            "color": ["red", "black", "#fff", "#ef0f0f"],
            "size": ["S", "M", "L", "XL", "XXL"]
        },
        {
            "name": "T-shirt by someone from UK", "price": "800",
            "img": ["https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg",
                "https://itizen-production.s3.amazonaws.com/uploads/image_asset/image/24105975/1599483624.249624"],
            "id": 3, "desc": "lorem ipsum lorem ipsum",
            "color": ["red", "blue", "green", "#ef0f0f"],
            "size": ["S", "M", "L", "XL", "XXL"]
        },
       
    ]


    return {

        products

    }
}