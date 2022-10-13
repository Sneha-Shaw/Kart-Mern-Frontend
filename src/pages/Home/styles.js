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
    productSection: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "5rem 0",
        background: "white",
        flexDirection: "column",
    },
    products: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#E7F6F2",
        margin: "2rem 0",
    
    },
    header: {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5rem",
        margin: "auto",
        "&>h3":{
            fontSize: "3rem",
            paddingTop: "2rem"
        },
        "&>Button":{
            fontSize: "2rem",
            marginTop: "2rem"
        }
    },
    cards: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        // gridGap: "2rem",
        padding: "2rem 0",

        // background: "#E7F6F2"
    },
}
)
)