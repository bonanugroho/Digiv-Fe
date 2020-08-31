import React from "react";
import { FormField } from "@components/element/form";
import Alert from "@components/element/alert";
import { Formik } from "formik";
import { loginValidation } from "../scheme/validation";


export default function FormLogin(props) {
	const {
		onSubmitLogin,
		errorLogin,
	} = props;

	return (
		<div className=' w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/2 xl:ml-64 content-login'>
			<div className='mx-auto w-full '>
				<div className=' mx-auto w-full'>
					<div className='py-4 px-8 text-black text-4xl font-bold text-white'>
						<h1>Login</h1>
					</div>
					<div className='px-8 text-black'>
						{errorLogin?.status && (
							<Alert message={errorLogin?.message} />
						)}
					</div>
					<div className='py-4 px-8'>
					
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={loginValidation}
							onSubmit={onSubmitLogin}>
							{({ values, resetForm, handleSubmit }) => (
								<form onSubmit={handleSubmit}>
									<FormField
										name='email'
										label='Email Address'
										placeholder='input Email'
										className='mb-4'
										withLabel={false}
									/>

									<FormField
										name='password'
										type='password'
										label='Password'
										placeholder='input Password'
										className='mb-4'
										withLabel={false}
									/>

									<div className='flex items-center justify-center mt-8'>
										<button
											className=' w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded'
											type='submit'>
											Login
										</button>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}
