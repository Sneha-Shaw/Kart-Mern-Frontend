import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"
        }
    },
    orderContainer: {
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#F5F5F5',
        [theme.breakpoints.down('md')]: {
            padding: "2rem 0"
        }
    },
    orderHeader: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        background: '#fff',
        padding: '0.5rem',
        '& input': {
            border: 'none',
            outline: 'none',
            marginLeft: '0.5rem',
        },
    },
    filter: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        width: "10rem",
        background: '#fff',
        // borderRadius: '5px',
        padding: '0.5rem',
        '& select': {
            border: 'none',
            outline: 'none',
            marginLeft: '0.5rem',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: "1rem"
        }
    },
    orderBody: {
        width: "80%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            width: "95%",

        }
    },
    card: {
        margin: "2rem 4rem !important",
        display: "flex !important",
        alignItems: "center",
        width: "100% !important",
        height: "25rem !important",
        // background: "#395B64 !important",
        background: "white !important",
        // color: "white !important",
        position: "relative",
        [theme.breakpoints.down('md')]: {
            margin: "2rem 0rem !important",
            flexDirection: "column",
            padding: "2rem"

        }
    },
    title: {
        cursor: "pointer",
        paddingTop: "2rem",
        color: "#395B64"
    },
    details: {
        width: "60%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // padding: '3rem !important',
        // background: "#395B64 !important",
        height: "100% !important",
        '& h3': {
            fontSize: '2rem',
            fontWeight: '800',
        },
        [theme.breakpoints.down('md')]: {

        }
    },
    price: {
        fontSize: '2.5rem',
        padding: "2rem 0"
    },
    description: {
        fontSize: '1.5rem',
        padding: "0 0 2rem 0"
    },
    cardImg: {
        width: "25rem !important",
        height: "100% !important",
        [theme.breakpoints.down('md')]: {
            width: "30rem !important"
        }
    },

    cardActions: {
        // background: "#395B64 !important",
        // width: "10rem !important",
        // height: "100% !important",
        position: "absolute",
        top: "0",
        right: "0",
        [theme.breakpoints.down('md')]: {
            top: "-1rem",
            right: "-1rem"
        }
    }


}))