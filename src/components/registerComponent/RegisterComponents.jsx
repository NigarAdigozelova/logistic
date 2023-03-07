import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import "./registerComponent.scss"

const RegisterComponents = () => {


  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      select: '+994',
      phoneNum: '',
      
    }
  });
  const onSubmit = data => {
    reset({ phoneNum: "" })

    console.log(data)
  }

  return (
    <div className='register'>
      <form onSubmit={handleSubmit(onSubmit)} className='registerForm' action="">
        <div className='registerInput'>

          <Controller
            name="select"
            control={control}
            render={({ field }) =>
              <select {...field} >
                 <option value="+994">+994</option>
                <option value="+1">+1</option>
                <option value="+372">+372</option>
                <option value="+52">+52</option>
               
              </select>}
          />

          <Controller
            name="phoneNum"
            control={control}
            render={({ field }) => <input {...field}
              type="tel" placeholder="Nömrənizi daxil edin"
            />}

          />
        </div>
        <button type="submit"> Qeydiyyatdan keç</button>
      </form>

    </div>
  )
}

export default RegisterComponents
