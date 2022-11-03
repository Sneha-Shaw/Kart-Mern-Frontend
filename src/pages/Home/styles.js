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
        color: "white",
        [theme.breakpoints.down("md")]: {
            padding: "2rem"
        }
    },
    textPart: {
        width: "50%",
        fontSize: "7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&>Button": {
            // borderRadius: "1rem",
            fontSize: "2rem",
            marginTop: "2rem",
        },
        [theme.breakpoints.down("md")]: {
            alignItems: "flex-start",
            width: "100%",
            fontSize: "2rem",
            // display: "none",
            "&>Button": {
                fontSize: "1.5rem",
                margin: "1rem 0",
            }
        }
    },
    imgPart: {
        width: "40%",
        padding: "2.1rem",
        [theme.breakpoints.down("md")]: {
            width: "115%",
            padding: "0",
            position: "relative"
        }
    },
    rectangle: {
        background: "#E7F6F2",
        width: "40rem",
        height: "60rem",
        borderRadius: "10%",
        // display: "none",
        [theme.breakpoints.down("md")]: {
           display: "none"
        }


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
        left: "66rem",
        display: "none"

    },
    img: {
        width: "91rem",
        position: "absolute",
        top: "8.1rem",
        right: "0",
        // display: "none",
        [theme.breakpoints.down("md")]: {
            width: "130%",
            top:"-1rem",
            left: "-2rem",
        }

    }
}
)
)