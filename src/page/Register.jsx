import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const {createNewUser,updateUserProfile,setUser}=useContext(AuthContext);
    const navigate=useNavigate()
    const [error, setError]=useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
         const form=new FormData(e.target)
        const name=form.get('name')
        if(name.length<5){
          setError({...error, name:"Must be more the  5 character long"})
          return

        }
        const email=form.get('email')
        const photo=form.get('photo')
        const password=form.get('password')
        console.log({name,photo,email,password})
        createNewUser(email,password)
        .then(result=>{
            const user=result.user;
            setUser(user)
            updateUserProfile({displayName:name ,photoURL:photo})
            .then(()=>{
              navigate("/")

            }).catch((error)=>{
              console.log(error)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }
    return (
        <div className="hero bg-base-200 min-h-screen mt-10 ">
       
         
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold my-5 text-center">Register your account !</h1>
          <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
            </div>
            {error.name&&(
               <label className="label text-xs text-red-500">
               {error.name}
             </label>
            )

            }
             <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
           
          </form>
        </div>
      </div>
    );
};

export default Register;