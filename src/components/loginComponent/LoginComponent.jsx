import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { submitForm } from '../../reducers/registerSlice';
import "./login.scss"

const LoginComponent = () => {
  const { register, handleSubmit, reset  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(submitForm(data))
    reset()
   
    
    console.log(data)
  };
  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)} acintion="">
        <div className='inputs'>
          <input {...register("phone", { required: true, maxLength: 20 })} type="text" placeholder='Nömrənizi daxil edin' />
          <input {...register("password", { required: true, maxLength: 20 })} type="text" placeholder='Şifrəniz' />
        </div>
        <button>Giriş et</button>
        <span> <a href="">Şifrəni unutdum</a></span>
      </form>

    </div>
  )
}

export default LoginComponent
