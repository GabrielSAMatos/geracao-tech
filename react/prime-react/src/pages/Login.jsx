import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
        


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {register, handleSubmit} = useForm();

    function logar(dados){
        console.log(dados);
    }

    return ( 
        <>
            <div className='bg-blue-500 h-screen flex align-items-center justify-content-center px-3'>
                <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-0 p-3 border-round-md'>
                    <h3 className='text-center text-4xl'>Welcome!</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText
                    id='email' 
                    type='email'
                    placeholder='email@email.com'
                    className='mb-3 w-full'
                    {...register('email', {required: true})}
                    />

                    <label htmlFor="password" className='block uppercase font-bold text-sm mb-1'>Password</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon 
                                className={`pi ${showPassword ? 'pi-eye':'pi-eye-slash'} cursor-pointer`}
                                onClick={() => setShowPassword(!showPassword)}
                                />
                            <InputText 
                                id='password'
                                placeholder='**********'
                                className='w-full'
                                {...register('password', {required: true})}

                                type={showPassword ? 'text':'password'}
                            />
                        </IconField>
                    </div>

                    <Button 
                        label="Enter" 
                        type='submit'
                        className='w-full'
                    />
                </form>
            </div>
        </>
     );
}
 
export default Login;