import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signUpUser } from '../../redux/actions/userAction';


export const RegisterLogic = () => {
    const { error, userInfo } = useSelector((state) => state.signUpUser)


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[name,setName]=useState();
    const[mobile,setMobile]=useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    }, [error])



    useEffect(() => {
        if (userInfo) {
            navigate(`/home`)
        }
    }, [userInfo,navigate])


    const signupHandler = () => {
        if (email && password && name && mobile) {
            dispatch(signUpUser(name,email, password,mobile))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields',
            })
        }
    }


    return {
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        mobile,
        setMobile,
        signupHandler
    }
}