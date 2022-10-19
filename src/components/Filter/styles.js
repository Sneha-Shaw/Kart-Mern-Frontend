import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    filterContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
    },
    filter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        
    },
    filterTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000",
    },
    filterColor: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        // alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000",
    },
    filterColorTitle: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000",
    },
    filterColorOptions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000"

    },
    filterColorOption: {
        width: "80%",
        padding: "0.5rem",
        display: "flex",
        // justifyContent: "space-between",
    },
    checkbox: {
        width: "2rem",
        height: "2rem",
        marginRight: "3rem"
    }

  
}));