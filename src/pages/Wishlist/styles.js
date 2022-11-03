import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%"
    },

    products: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        // gridGap: "2rem",
        padding: "2rem 0",
        // background: "#E7F6F2"
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: "1rem 0"
        }
    },



}
)
)