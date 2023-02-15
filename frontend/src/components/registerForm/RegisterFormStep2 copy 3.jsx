import { useForm } from "react-hook-form";

const RegisterFormStep2 = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({

    });

    const onSubmit = (data) => {
        <div>Data{data}</div>
        console.log(data);
    }



    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <br />

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('password', {
                })} />
                {errors.password && <p>{errors.password.message}</p>}

            </div>

            <br />
            <br />

            <div>
                <label>Repetir contraseña</label>
                <input
                    type="password"
                    name="confirmPassword"
                    
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <br />
            <br />
            <br />
            <br />

        </form>
    </div>
}

export default RegisterFormStep2;