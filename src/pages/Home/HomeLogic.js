import { useState } from "react"

export const HomeLogic = () => {
    const colorOptions = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Purple",
        "Pink"
    ]
    const sizeOptions = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]
    const typeOptions = [
        "Tops",
        "Bottoms",
        "Shoes",
        "Accessories",
        "Dresses",
        "Jackets"
    ]
    const products =[
        {"name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
        {"name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
        {"name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
        {"name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
        {"name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
        {"name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg"},
    ]
    const [color, setColor] = useState(colorOptions[0])
    const [size, setSize] = useState(sizeOptions[0])
    const [type, setType] = useState(typeOptions[0])

    return {
        color,
        colorOptions,
        setColor,
        size,
        setSize,
        type,
        setType,
        sizeOptions,
        typeOptions,
        products

    }
}