import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    filterContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        // padding: "2rem 0",
        margin: "auto"
    },
    // sort: {
    //     // width: "50%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     "&>select": {
    //         width: "50%",
    //         padding: "1rem",
    //         borderRadius: ".5rem",
    //         fontSize: "1.5rem",
    //         border: "none"
    //     }
    // },
    filter: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&>select": {
            width: "50%",
            padding: "1rem",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            border: "none",
            outline: "none"

        }
    },
}));