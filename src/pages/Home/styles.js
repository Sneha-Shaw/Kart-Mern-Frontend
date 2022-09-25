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
        textAlign: "left"
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
        top: "12rem",
        left: "66rem"
    },
    img: {
        width: "100rem",
        position: "absolute",
        top: "1rem",
        right: "0"
    },
    filterContainer:{
        width: "50%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem 0",
        margin: "auto"
    },
    sort:{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&>select":{
            width: "50%",
            padding: "1rem",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            border: "none"
        }
    },
    filter:{
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&>select":{
            width: "50%",
            padding: "1rem",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            border: "none"

        }
    }
}
)
)