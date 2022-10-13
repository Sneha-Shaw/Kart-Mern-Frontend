import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
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
}));