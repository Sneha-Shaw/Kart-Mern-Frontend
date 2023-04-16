
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        background: "#395B64",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        padding: "1rem 0",
        fontSize: "2rem",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
    },
    offer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign:"center",
        '& h4': {
            width:"30%",
            fontSize: "3rem",
            margin: "2rem 0",
            [theme.breakpoints.down("md")]: {
                width: "70%",
            }
        },
        '& input': {
            width: "25%",
            fontSize: "1.5rem",
            padding: "1.3rem",
            border: "none",
            borderRadius: "0.5rem",
            outline: "none",
            [theme.breakpoints.down("md")]: {
                width: "70%",
            },
        },
        '& button': {
            fontSize: "1.5rem",
            margin: "1rem",
            background: "#F2B705",
            color: "black",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            '&:hover': {
                background: "black",
                color: "#F2B705",
            }
        },
       
    },
    footer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },

    footerLeft: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        listStyle:"none",
        '& h4': {
            fontSize: "2rem",
            margin: "2rem 0",
        },
        '& li': {
            fontSize: "1.8rem",
            margin: "1.3rem 0",
        },
        '& a': {
            textDecoration: "none",
            color: "white",
            transition: "all 0.3s ease-in-out",
            '&:hover': {
                color: "#F2B705",
            }
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            alignItems: "center",
        },
    },
    footerRight: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        listStyle:"none",
        '& h4': {
            fontSize: "2rem",
            margin: "2rem 0",
        },
        '& li': {
            fontSize: "1.8rem",
            margin: "1.3rem 0",
        },
        '& a': {
            textDecoration: "none",
            color: "white",
            transition: "all 0.3s ease-in-out",
            '&:hover': {
                color: "#F2B705",
            }
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            alignItems: "center",
        },

    },
    hr:{
        width:"99%",
        height:"1px",
        background:"white",
        margin:"2rem 0"
    },
}))