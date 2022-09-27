
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        background: "#395B64",
        display: "flex",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        alignItems: "center"

    },
    logo: {
        fontSize: "3rem",
        width: "30%",
        paddingLeft: "3rem"
    },
    nav: {
        width: "70%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"

    },
    list: {
        listStyle: "none",
        display: "flex",
        alignItems: "center"
    },
    listItem: {
        padding: "0 4rem",
        color: "white",
        textDecoration: "none"
    },
    search: {
        display: "flex",
        background: "white",
        width: "30%",
        borderRadius: "3rem",
        color: "black",
        alignItems: "center",
        padding: ".5rem"
    },
    searchInput: {
        background: "transparent",
        border: "none",
        outline: "none",
        padding: ".5rem 1rem",
        width: "100%",


    },

}))