import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    details: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "center",
        textAlign: "left",
        padding: "1rem 0",
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
            fontSize: "1.1rem",
            background: "#395B64"
        }

    },
    title: {
        fontSize: "2rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
    price: {
        fontSize: "2.5rem",
        padding: " 0 2rem",
        fontWeight: "bold",
        color: "#395B64"
    },
   
}));