import { useState } from "react"

export const HomeLogic = () => {
    const colorOptions = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink"
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
        typeOptions

    }
}