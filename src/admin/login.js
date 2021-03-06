import React,{useState} from 'react'
import TextInput from "../components/TextInput/TextInput";
import TextPassword from "../components/Password/Password";
import { useHistory,Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Login() {

	const history = useHistory();
	const[email,setEmail]=useState();
	const[password,setPassword]=useState();
	const [signedIn, setSignedIn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState('');

	const handleSubmit =async (e) =>{
	// if(e)
	// 	e.preventDefault();


	// let payload = {
	// 		email: email,
	// 		password: password,
	// 	};
 //      let err = validate(payload);
 //      setErrors(err);
 //         setLoading(true);

 //     await AuthService.userLogin(email, password).then(
 //        () => {
 //          history.push("/user-vendors");
 //          window.location.reload();
 //        }).catch(e => {
 //      setErrors(e)
 //    });

}

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            User Login
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} autoComplete="new-password">
              <TextInput
                	id="email"
        					labelText="Email"
        					onChange={(e => setEmail(e.target.value))}
        					value={email}
        					name="email"
                  invalid={errors.email}
                  invalidText={errors.email}
					
              />

              <div className="mt-6">
                <TextPassword
                  id="password"
					labelText="Password"
					onChange={e => setPassword(e.target.value)}
					value={password}
					name="password"
					autoComplete="new-password"
           			invalid={errors.password}
                  	invalidText={errors.password}

                />
              </div>

                
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button type="submit" width="full" >
                    Sign in
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
	)
}

export default Login