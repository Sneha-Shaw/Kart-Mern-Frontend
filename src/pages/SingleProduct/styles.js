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
        margin: "1rem 0rem",
        border: "2px solid #e0e0e0",
        borderRadius: "2rem",
        cursor: "pointer",
        // padding: "0.5rem",
        overflow: "hidden"
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
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#395B64"
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
    colors: {
        display: "flex",
        width: "30%",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        "&>h3": {
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
    },
    colorContainer:{
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
        // flexDirection: "row",
    },
    colorOption: {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        flex:  1,
        border: "1px solid #e0e0e0",
        cursor: "pointer",
        margin: "0.5rem",
    },

    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "&>p": {
            fontSize: "1.5rem",
            fontWeight: "bold",
        }
    },
    margin: {
        backgroundColor: '#e0e0e0',
        padding: '0.5rem',
        margin: '1.5rem',
        cursor: "pointer",
        "&:hover": {
            boxShadow: '0 0 .3rem 0 rgba(0,0,0,0.2)'
        },
    },
    description: {
        fontSize: "1.2rem",
        marginBottom: "1rem",
    },

    sizeOption:{
        border: "1px solid #e0e0e0",
      
        padding: ".5rem 1rem",
        fontSize: "1.5rem",
        cursor: "pointer",
    },
    sizeContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
       
    },
    sizes: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
        "&>h3": {
            fontSize: "1.5rem",
            fontWeight: "bold",
            paddingRight: "1rem",
        },
    },
   
    
}))