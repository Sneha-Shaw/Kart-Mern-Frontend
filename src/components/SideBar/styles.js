import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '20%',
        minHeight: '95vh',
        backgroundColor: '#2C3333',
        // padding: '1rem',
        "&>ul": {
            width: "100%",
            listStyle: 'none',
            paddingTop: "5rem",
            margin: 0,
            fontSize: "2rem",
            "&>li": {
                padding: '1rem 3rem',
                margin: "1rem 0",
                // width: "100%",
                cursor: 'pointer',
                "&:hover": {
                    backgroundColor: '#395B64',
                    color: "white",
                },
                "&>a": {
                    textDecoration: 'none',
                    width: "100%",
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    "&:hover": {
                        color: 'white'
                    }
                }
            }
        },
        [theme.breakpoints.down('md')]: {
            // display: "none"
            width: '100%',
            minHeight: 'unset',
            // height: "10%",
            "& ul": {

                display: "flex",
                flexDirection: 'row',
                paddingTop: "0rem",
                justifyContent: "center",
                "& li": {
                    "& a": {
                        "& p": {
                            display: "none"
                        }
                    }
                }
            }
        }

    }
}))