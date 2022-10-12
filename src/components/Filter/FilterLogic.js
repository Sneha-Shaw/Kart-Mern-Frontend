import { useState } from "react";

export const FilterLogic = () => {
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
    const [color, setColor] = useState(colorOptions[0])
    const [size, setSize] = useState(sizeOptions[0])
    const [type, setType] = useState(typeOptions[0])
    return{
        colorOptions,
        sizeOptions,
        typeOptions,
        color,
        setColor,
        size,
        setSize,
        type,
        setType
    }
}