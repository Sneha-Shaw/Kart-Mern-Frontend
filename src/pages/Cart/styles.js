import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
       
    },
    cart:{
        "&>h1":{
            fontSize: '3rem',
            fontWeight: '600',
            margin: '2rem',
        },
    },
    cartItem: {
        width: "80%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: "auto",
        textAlign: 'left',
       
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
    price: {
        fontSize: '2.5rem',
        padding: "2rem 0"
    },
    description: {
        fontSize: '1.5rem',
        padding: "0 0 2rem 0"
    },
    cartItemQuantity:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        margin: '1rem 0',
        '& button':{
            fontSize: '2rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            outline: 'none',
        },
        '& p':{
            fontSize: '2rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            outline: 'none',
        },
    
    },
    cartItemRemoveBtn:{
        fontSize: '1.5rem !important',
        padding: '.5rem 4rem !important',
        background: "rgba(0,0,0,0.75) !important"
    }
}))