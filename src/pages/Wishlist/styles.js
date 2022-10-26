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
    },



}
)
)