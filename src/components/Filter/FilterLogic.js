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
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    const [type, setType] = useState([])

    // clear all filters
    const clearAll = () => {
        setColor([])
        setSize([])
        setType([])
    }

    return{
        colorOptions,
        sizeOptions,
        typeOptions,
        color,
        setColor,
        size,
        setSize,
        type,
        setType,
        clearAll
    }
}