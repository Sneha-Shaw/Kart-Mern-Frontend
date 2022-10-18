import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4rem",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
    left: {
        flex: 1,
        display: "flex",
        height: "100%",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2rem",
        },
    },
    imgContainer:{
        width: "80%",
        border: "1px solid #e0e0e0",
        borderRadius: "2rem",
        margin: "1rem",
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    imageOption: {
        display: "flex",
        
        flexDirection: "column",
        justifyContent: "space-between",
        width: "20%",
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    imageContainer: {
        flex: 1,
        height: "100%",
        margin: "1rem 0rem",
        border: "2px solid #e0e0e0",
        borderRadius: "2rem",
        cursor: "pointer",
        padding: "0.5rem",
    },

    right: {
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
    },
    Actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        "&>Button": {
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '30%',
            color: '#fff',
            "&:hover": {
                backgroundColor: '#395B64',
            }
        
        }
    },
    quantityContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "20%",
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    margin: {
        backgroundColor: '#e0e0e0',
        padding: '0.5rem',
        margin: '1.5rem',
        cursor: "pointer",
        "&:hover": {
            boxShadow: '0 0 .3rem 0 rgba(0,0,0,0.2)',
        },
    },
    description: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
    },


   
    
}))