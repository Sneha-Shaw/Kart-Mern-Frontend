import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%"
    },
    introContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        color: "white"
    },
    textPart: {
        width: "50%",
        fontSize: "7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "left"
        "&>Button":{
            borderRadius: "10rem",
            fontSize: "2rem",
            marginTop: "2rem"
        }
    },
    imgPart: {
        width: "40%",
        padding: "2.1rem"
    },
    rectangle: {
        background: "#E7F6F2",
        width: "40rem",
        height: "60rem",
        borderRadius: "10%",


    },
    offer: {
        background: "#A5C9CA",
        borderRadius: "2.5rem 2.5rem .5rem 2.5rem",
        padding: "2rem",
        lineHeight: "1.5",
        fontSize: "2rem",
        width: "15%",
        color: "black",
        position: "absolute",
        top: "10rem",
        left: "66rem"
    },
    img: {
        width: "91rem",
        position: "absolute",
        top: "7rem",
        right: "0"
    },
    filterContainer: {
        width: "50%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem 0",
        margin: "auto"
    },
    sort: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&>select": {
            width: "50%",
            padding: "1rem",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            border: "none"
        }
    },
    filter: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&>select": {
            width: "50%",
            padding: "1rem",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            border: "none"

        }
    },
    products: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        // gridGap: "2rem",
        padding: "2rem 0",

        background: "#E7F6F2"
    },


    details: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "center",
        textAlign: "left",
        padding: "2rem 0",
        background: "#A5C9CA",
        lineHeight: "2",
        "&>Button": {
            padding: "2rem"

        }

    },
    priceContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&>Button": {
            marginRight: "5rem",
            fontSize: "1.5rem",
            background: "#395B64"
        }

    },
    title: {
        fontSize: "3rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
    price: {
        fontSize: "4rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
    wish:{
        // position: "absolute",
        // top: "1rem",
        // left: "37rem",
        fontSize: "3rem !important",
    }

}
)
)