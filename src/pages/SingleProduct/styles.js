import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: "flex",
        // height: "100vh",
        justifyContent: "space-around",
        // alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
    left: {
        flex: 1,
        display: "flex",
        height: "90vh",
        flexDirection: "row-reverse",
        // alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2rem",
            flexDirection: "column",
            height: "unset",

        },
    },
    imgContainer: {
        width: "80%",
        height: "100%",
        // borderRadius: "3rem",
        margin: "1rem",
        // overflow: "hidden",
        border: "1px solid rgb(0,0,0,0.2)",
        [theme.breakpoints.down("md")]: {
        width: "95%",
        }

    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    imageOption: {
        width: "10%",
        marginTop: "1.5rem",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
    },
    imageContainer: {
        width: "100%",
        // height: "100%",
        flex: 1,
        margin: "1rem 0rem",
        border: "1px solid rgb(0,0,0,0.2)",
        // borderRadius: "2rem",
        cursor: "pointer",
        overflow: "hidden",
       
    },

    right: {
        flex: 1,
        display: "flex",
        padding: "6rem 1rem",
        [theme.breakpoints.down("md")]: {
            flex: "unset",
            marginBottom: "2rem",
            flexDirection: "column"
        },
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        // marginBottom: "1rem",
    },
    price: {
        fontSize: "2rem",
        fontWeight: "bold",
        // marginBottom: "1rem",
        color: "#395B64"
    },
    Actions: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        marginBottom: "1rem",
        flexDirection: "column",
        width: "70%",
        "&>Button": {
            margin: '2rem auto',
            padding: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#395B64',
            width: '30%',
            color: '#fff',
            "&:hover":{
                backgroundColor: '#2f4a51',
            }

        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            "&>Button":{
                width: "80%"
            }
        }
    },
    details: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            alignItems: "center"
        }
    },
    sizes: {
        // display: "flex",
        alignItems: "center",
        paddingTop: "5rem",

        "&>h3": {
            fontSize: "1.8rem",
            fontWeight: "bold",
            paddingRight: "1rem",
        },
        "& select": {
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            border: "1px solid rgb(0,0,0,0.2)",
            borderRadius: "0.5rem",
            outline: "none",
            marginTop: "1rem",

        }
    },
    divider: {
        margin: "1rem 0rem",
        width: "95%",
        height: "1px",
        backgroundColor: "#e0e0e0",
    },
    productInstruction: {
        paddingTop: "2rem",
        "& >ul": {
            padding: "0",
            "& >li": {
                fontSize: "1.7rem",
                fontWeight: "bold",
                paddingRight: "1rem",
                lineHeight: "2",

            }
        },
      
    },
    productDescription: {
        padding: "3rem",
        "&>h1": {
            fontSize: "2.5rem",
            fontWeight: "bold",
            paddingRight: "1rem",
        },
        "&>p": {
            fontSize: "1.7rem",
            paddingRight: "1rem",
            lineHeight: "2",
        }
    },
    reviewSection: {
        display: "flex",
        padding: "3rem",
        "&>h1": {
            fontSize: "2.5rem",
            fontWeight: "bold",
            paddingRight: "1rem",
        },
        [theme.breakpoints.down('md')]:{
            display: "none"
        }
    },
    starContainer: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: "35%",
        fontSize: "1.5rem",
        "&>h3": {
            fontSize: "1.5rem",
            fontWeight: "bold",
            paddingRight: "1rem",
        },
    },
    reviewCount: {
        display: "flex",
        padding: "1rem 0",
    },
    starProgress: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
    },
    progress: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        margin: "0.5rem 0",
        "&>h4": {
            paddingRight: "1rem"
        },
        "&>p": {
            paddingLeft: "1rem"
        }
    },
    progressBar: {
        width: "70%",
        height: "1.5rem",
        border: "1px solid rgb(0,0,0,0.2)",
    },
    progressFill: {
        // width: "100%",
        height: "100%",
        backgroundColor: "#395B64",
        // borderRadius: "0.5rem",
    },
    WriteReview: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "&>input": {
            width: "80%",
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            border: "1px solid rgb(0,0,0,0.2)",
            borderRadius: "0.5rem",
            outline: "none",
            margin: "1rem auto",
        },
        "&>button": {
            fontSize: "1.2rem",
            width: "20%",
            margin: "0 auto",
        }

    },
    showReview: {
        width: "60%"
    },
    reviewHeader: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        flexDirection: "column",
    },
    reviewUser: {
        display: "flex",
        alignItems: "center",
        "&>img": {
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            marginRight: "1rem",
        },
    },
    reviewUserName: {
        display: "flex",
        fontSize: "1.5rem",
        alignItems: "center",

    },
    circle: {
        width: ".8rem",
        height: ".8rem",
        borderRadius: "50%",
        backgroundColor: "#395B64",
        margin: "0 1rem"
    },
    reviewRating: {
        paddingLeft: "4rem",
    },
    reviewBody: {
        width: "80%",
        fontSize: "1.5rem",
        padding: "1rem 0rem",

    },

}))