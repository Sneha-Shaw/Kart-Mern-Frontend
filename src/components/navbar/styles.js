// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        width: "100%",
        background: "#000",
        display: "flex",
        color: "white",
        padding: "1.6rem",
        fontSize: "2rem"
    },
    logo: {
        fontSize: "3rem",
        width: "30%"
    },
    nav: {
        width: "70%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
        
    },
    list: {
        listStyle: "none",
        display: "flex",
        alignItems: "center"
    },
    listItem:{
        padding: "0 4rem",
        color: "white",
        textDecoration: "none"
    }
}))