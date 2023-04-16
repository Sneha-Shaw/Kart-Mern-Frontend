import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        '& h1': {
            fontSize: "10rem",
        },
        '& h2': {
            fontSize: "3rem",
        }
    }
}))