import React, { useState, useEffect } from "react";
import { FormField } from "@components/element/form";
import Alert from "@components/element/alert";
import digivApiServices from "@utils/httpRequest";
import { Formik } from "formik";
import { validationRegistration } from "../scheme/validation";
import debounce from "@utils/debounce";

export default function FormRegistration(props) {
	const { onSubmitReservation, errorReservation, dataUser } = props;
	const [userDataReservation, setUserDatareservation] = useState({
		email: "",
		password: "",
		nomer_telp: "",
		name: "",
	});

	useEffect(() => {
		if (dataUser) {
			setUserDatareservation({
				...userDataReservation,
				...dataUser,
			});
		}
	}, [dataUser]);



	return (
		<div className=' bg-grey-lightest w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/12'>
			<div className='mx-auto w-full '>
				<div className=' mx-auto rounded shadow  w-full'>
					<div className='py-4 px-8 text-black text-4xl font-bold text-white' >
						<h1>Daftar</h1>
					</div>
					<div className='px-8 text-black'>
						{errorReservation?.status && (
							<Alert message={errorReservation?.message} />
						)}
					</div>
					<div className='py-4 px-8'>
						<Formik
							initialValues={userDataReservation}
							validationSchema={validationRegistration}
							enableReinitialize={true}
							onSubmit={onSubmitReservation}>
							{({ values, resetForm, handleSubmit }) => (
								<form onSubmit={handleSubmit}>
									<FormField
										name='name'
										label='Nama'
										placeholder='Nama'
										className='mb-4'
										withLabel={false}
									/>

									<FormField
										name='email'
										label='Email Address'
										placeholder='input Email'
										className='mb-4'
										withLabel={false}
									/>
									<FormField
										name='nomer_telp'
										label='Nomer Telepon'
										type='numberphone'
										placeholder='Nomer Telepon'
										className='mb-4'
										withLabel={false}
									/>
									<FormField
										name='interest_car'
										label='merek mobil'
										placeholder='merek mobil yang diminati'
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
									<FormField
										name='confirmation_password'
										type='password'
										label='Password'
										placeholder='Confirmation Password'
										className='mb-4'
										withLabel={false}
									/>

									<div className='w-full mt-8'>
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
