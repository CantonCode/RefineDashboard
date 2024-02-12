import { useLogin } from '@refinedev/core';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'

const client_id = '291759158182-5e197e02fjl498hf85t64rq54ido4hq0.apps.googleusercontent.com'

function LoginButton(){
    const { mutate: login } = useLogin<any>();
    
    const onSuccess = async(res:any)=>{
        console.log(res)
        console.log(res.tokenId)
        if(res){
            login({token:res.tokenId});
        }
    }

    const onFailure= (res:any)=>{
        console.log("Login Failed:",res)
    }

    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={client_id}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn={true}
            />  
        </div>
    )
}

    
export default LoginButton