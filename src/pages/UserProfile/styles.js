import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('md')]:{
           flexDirection: "column"
            
        }
    },
    settingsContainer: {
        width: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        [theme.breakpoints.down('md')]:{
            width: "100%",
        padding: '2rem 0',

        }
    },
    inputContainer: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        // height: '4rem',
        "&>input": {
            border: '2px solid #ccc',
            width: '100%',
            outline: 'none',
            padding: '2rem',
            fontSize: '1.8rem',
            marginBottom: '2rem',
            borderRadius: '2rem',
        },
        [theme.breakpoints.down('md')]:{
            width: "70%",
            alignItems: "center"
        }
    },
    inputLabel: {
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: 'rgba(0,0,0,0.6)',
    },
    profilePicture: {
        width: '8rem',
        height: '8rem',
        position: 'relative',
        fontSize: "2rem",
        // margin: 'auto',
        // paddingBottom: "2rem",
        // "&>img": {
        //     width: '100%',
        //     height: '100%',
        //     objectFit: 'cover',
        //     borderRadius: '50%',

        // },
        // "&>div": {
        //     position: 'absolute',
        //     bottom: '4rem',
        //     right: '2rem',
        //     transform: 'translate(50%,50%)',
        //     width: "4rem",
        //     height: "4rem",
        //     borderRadius: "50%",
        //     backgroundColor: "#000",
        //     color: "#fff",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     cursor: "pointer",
        // },
    },
    profilePictureButton:{
        position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            transform: 'translate(50%,50%)',
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
    },
    button:{
        fontSize: "1.8rem !important"
    }
}))