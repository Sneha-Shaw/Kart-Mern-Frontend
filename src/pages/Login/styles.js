import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container:{
        width:"100%",
        height: "100vh",
        background:"rgba(0,0,0,0.25)",
        display:"flex",
        color:"white",
        padding:"1rem 0",
        fontSize:"2rem",
        alignItems:"center",
        flexDirection: "column",
        justifyContent:"center",
        "& a":{
            color:"black",
            // textDecoration:"none"
        }
        
    },
    formContainer:{
        width:"50%",
        display:"flex",
        justifyContent:"center",
        background: "#395B64",
        alignItems:"center",
        padding:"2rem",
        borderRadius:"1rem",
        flexDirection:"column",


    },
    form:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"2rem",
     
    
    },
    inputContainer:{
        width:"80%",
        display:"flex",
        // flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-around",
        padding:"1rem",
        "& label":{
            width:"0%",
            fontSize:"1.5rem",
            fontWeight:"bold",
            marginBottom:".5rem"
        },
        "& input":{
            width:"70%",
            height:"2rem",
            borderRadius:".5rem",
            border:"none",
            outline:"none",
            padding:".5rem",
            fontSize:"1.5rem"
        },
       
    
    },
    button:{
        width:"20%",
        borderRadius:".5rem",
        // padding:"5rem",
        fontSize:"1.8rem !important",
        background:"#395B64",
        color:"white",
        "&:hover":{
            background:"#395B64",
            color:"white",
        }
    },
}))