import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
    },
    orderContainer: {
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#F5F5F5',
    },
    orderHeader: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
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
    },
    orderBody: {
        width: "80%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    details: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '1rem',
        '& h3': {
            fontSize: '2rem',
            fontWeight: '800',
        },
    },
    price:{
        fontSize: '2.5rem',
        padding: "2rem 0"
    },
    description:{
        fontSize: '1.5rem',
        padding: "0 0 2rem 0"
    }


}))