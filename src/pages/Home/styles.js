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
            width: "100%",
            fontSize: "2rem",
            padding: "1rem 0",
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
            display: "none"
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

    },
    img: {
        width: "91rem",
        position: "absolute",
        top: "8.1rem",
        right: "0",
        // display: "none",
        [theme.breakpoints.down("md")]: {
            width: "130%",
            top: "-1rem",
            left: "-2rem",
        }

    },
    cardsContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        flexDirection: "column",
        '& h3': {
            fontSize: "3rem",
        }
    },
    cards: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem 0",

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        }
    },
    card: {
        width: "25%",
        height: "70rem",
        margin: "0 2rem",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            margin: "1rem 0",
        }
    },
    details: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        '& h4': {
            fontSize: "2rem",
        }

    },
    shop: {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 0",
        fontSize: "1.6rem",
        '& svg': {
            fontSize: "2.4rem",
            cursor: "pointer",
            color: "black",
        }
    }
}
)
)