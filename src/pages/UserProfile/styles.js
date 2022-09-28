import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
    },
    settingsContainer: {
        width: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',

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
    },
    inputLabel: {
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: 'rgba(0,0,0,0.6)',
    },
    profilePicture: {
        width: '15rem',
        height: '15rem',
        position: 'relative',
        margin: 'auto',
        "&>img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',

        },
        "&>div": {
            position: 'absolute',
            bottom: '4rem',
            right: '3rem',
            transform: 'translate(50%,50%)',
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
        },
    },
    button:{
        fontSize: "1.8rem !important"
    }
}))