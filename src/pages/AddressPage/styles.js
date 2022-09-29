import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        padding: "0 8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&>h1": {
            fontSize: "2rem",
            fontWeight: "600",
            margin: "2rem 0",
        },
    },
    yourAddress: {
        padding: "2rem 0",
        borderTop: ".1rem solid rgba(0,0,0,.4)",
        borderBottom: ".1rem solid rgba(0,0,0,.4)",
        fontSize: "1.6rem",
        lineHeight: "2.5rem",
        "&>Button": {
            margin: "1rem 0",
            width: "20%",
            backgroundColor: "#395B64",
        },
        "& > div": {
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > button": {
                width: "50%",
                margin: "0 1rem",
                backgroundColor: "#f5f5f5",
                color: "black"
            },
        },
    },
    newAddress: {
        padding: "2rem 0",
        fontSize: "1.6rem",
        lineHeight: "2.5rem",
        "& > h1": {
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
            fontWeight: "600",
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        "& > div": {
            margin: "1rem 0",
            "& > label": {
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                fontWeight: "600",
            },
            "& > input": {
                width: "100%",
                padding: "0.5rem",
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                border: "1px solid #000",
                borderRadius: "5px",
            },
            "& > select": {
                width: "100%",
                padding: "0.5rem",
                fontSize: "1.6rem",
                lineHeight: "2.5rem",
                border: "1px solid #000",
                borderRadius: "5px",
            },

        },
        "& > button": {
            width: "50%",
            margin: "1rem auto",
            fontSize: "1.6rem",
        },
    },

}))