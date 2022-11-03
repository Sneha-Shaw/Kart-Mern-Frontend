
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    MainContainer: {
        width: "100%",
        background: "#395B64",
        display: "flex",
        color: "white",
        // padding: "1rem 0",
        // fontSize: "2rem",
        alignItems: "center"

    },
    container: {
        width: "100%",
        background: "#395B64",
        display: "none",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        alignItems: "center"

    },
    left: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginLeft: "3rem"
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "0 1rem"
    },
    categories: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem",
        "& h4": {
            margin: "0 1rem",
            cursor: "pointer"
        }
    },
    right: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "3rem"
    },
    search: {
        width: "40%",
        display: "flex",
        alignItems: "center",
        background: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        color: "black",
        "& input": {
            border: "none",
            outline: "none",
            width: "100%"
            // marginLeft: "0.5rem"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem",
       
    },
    icon:{
        margin: "0 1rem",
        cursor: "pointer",
        color: "white",
        textDecoration: "none",
    }

}))