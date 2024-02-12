import { GoogleLogin } from '@react-oauth/google';
import { useLogin } from '@refinedev/core';

function LoginButton(){
    const { mutate: login } = useLogin<any>();
    
    const onSuccess = async(res:any)=>{
        console.log(res)
        if(res){
            login({token:res.credential});
        }
    }

    const onFailure= (res:any)=>{
        console.log("Login Failed:",res)
    }

    return(
            <GoogleLogin
            onSuccess={res =>{
                onSuccess(res)
            }}
            onError={() => {
                console.log('Login Failed');
              }}
            />  
    )
}

    
export default LoginButton