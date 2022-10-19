import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        padding: "1rem",
    },
    left: {
        width: "20%",
        height: "100%",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "1rem",
    },
    right: {
        width: "100%",
        height: "100%", 
        padding: "1rem",
        borderRadius: "1rem",
    },
    cards: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        // gridGap: "2rem",
    },

}));