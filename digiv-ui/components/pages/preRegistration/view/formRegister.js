import React from "react";
import { FormField } from "@components/element/form";
import Alert from "@components/element/alert";
import { Formik } from "formik";
import { validationRegsitration } from "../scheme/validation";
import iconGoogle from "@assets/images/icon/google.png"
import iconFacebook from "@assets/images/icon/facebook.png"

export default function FormRegistration(props) {
	const {
		onClickSignInGoogle,
		onClickFacebook,
		onSubmitRegistration,
		errorRegistration,
	} = props;

	return (
		<div className=' w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/2 content-reservation'>
			<div className='mx-auto w-full '>
				<div className=' mx-auto w-full'>
					<div className='py-4 px-8 text-black text-4xl font-bold text-white'>
						<h1>Daftar sekarang</h1>
					</div>
					<div className='px-8 text-black'>
						{errorRegistration?.status && (
							<Alert message={errorRegistration?.message} />
						)}
					</div>
					<div className='py-4 px-8'>
						<div className='flex items-center justify-between mt-4 mb-8'>
							<div
							 	className="w-full flex"
							>
								<button
									className=' mr-2 w-full w-auto bg-white  py-2 px-4 rounded text-base flex'
									onClick={onClickFacebook}
									type='submit'  >
									<img src={iconFacebook} className="mr-4"/>
									Facebook
								</button>
							</div>
							<div className="w-full flex">

								<button
									className='ml-2 w-full w-auto bg-white  py-2 px-4 rounded text-base flex'
									onClick={onClickSignInGoogle}
									type='submit'>
										<img src={iconGoogle} className="mr-4"/>
									Google
								</button>
							</div>
						</div>
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={validationRegsitration}
							onSubmit={onSubmitRegistration}>
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
											Daftar
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
