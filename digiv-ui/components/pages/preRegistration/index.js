import React, { useState } from "react";
import "@styles/pages/preRegistration.scss";
import { auth, firebase } from "@helper/firebase";
import FormRegister from "./view/formRegister";
import FormReservation from "./view/FormReservation";
import digivApiServices from "@utils/httpRequest";
import ModalLoading from "@components/element/modalLoading";
import logoEve from "@assets/images/logo/logo-ave.png";

export default function PreRegistration() {
	const { digivApi } = digivApiServices();
	const [showModalLoading, setShowModalLoading] = useState(false);
	const [dataUser, setDataUser] = useState(null);
	const [errorRegistration, setErrorRegistration] = useState({});
	const [errorReservation, setErrorReservation] = useState({});

	const onClickSignInGoogle = () => {
		setShowModalLoading(true);

		const provider = new firebase.auth.GoogleAuthProvider();
		auth
			.signInWithPopup(provider)
			.then((result) => {
				const { user } = result;
				fetchCheckUser({
					name: user.displayName,
					email: user.email,
					nomer_telp: user.phoneNumber,
				});
				setShowModalLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setShowModalLoading(false);
			});
	};

	const onClickFacebook = () => {
		console.log("tes");
		const provider = new firebase.auth.FacebookAuthProvider();

		auth
			.signInWithPopup(provider)
			.then(function (result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				const token = result.credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(result);
				// ...
			})
			.catch(function (error) {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				const credential = error.credential;
				console.log(error);
				// ...
			});
	};

	const fetchCheckUser = async (values) => {
		setShowModalLoading(true);
		try {
			const checkUser = await digivApi.get(`api/user/${values.email}`);
			const {
				data: { data, status_code },
			} = checkUser;
			if (status_code === 104) {
				setDataUser({
					name: values.name,
					email: values.email,
					password: values.password,
				});
			} else {
				setErrorRegistration({
					status: true,
					message: "Username atau email sudah pernah digunakan ",
				});
			}
		} catch (error) {
			setErrorRegistration({
				status: true,
				message: "Error Occured please try again later",
			});
		} finally {
			setShowModalLoading(false);
		}
	};

	const onSubmitRegistration = async (values) => {
		fetchCheckUser(values);
	};

	const onSubmitReservation = async (values) => {
		setShowModalLoading(true);
		try {
			const checkUser = await digivApi.post(`api/auth/register`, {
				city_id: values.city,
				full_name: values.name,
				password: values.password,
				phone_no: values.nomer_telp,
				unit_id: values.interest_car,
				username: values.email,
			});
			const {
				data: { data, status_code },
			} = checkUser;
		} catch (error) {
			const data  = error.response?.data;
			let message = "error occured,pliss try again later";
			console.log(data)

			if (data) {
				const { status_code } = data;
				switch (status_code) {
					case 400:
						message = "Data Tidak Valid,check data anda";
						break;
					case 500:
						message = "Email anda sudah pernah terdaftar";
						break;
				}
			}
			setErrorReservation({
				status: true,
				message,
			});
		} finally {
			setErrorRegistration({
				status: true,
				message: "Error Occured please try again later",
			});
			setShowModalLoading(false);
		}
	};

	return (
		<div className='font-sans antialiased bg-grey-lightest w-full h-full'>
			<div className='w-full  grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
				<div className='w-12/12 p-16 xl:w-4/12 flex justify-center  lg:justify-start xl:justify-start'>
					<div>
						<img className='w-32 sm:w-32 md:w-48 lg:w-64 ' src={logoEve}></img>
					</div>
				</div>
				<div className='h-full  min-h-screen w-12/12 flex justify-center pre-registration__container-form lg:items-end lg:align-end  xl:items-end xl:align-end'>
					{dataUser ? (
						<FormReservation
							errorReservation={errorReservation}
							onSubmitReservation={onSubmitReservation}
							dataUser={dataUser}
						/>
					) : (
						<FormRegister
							onClickSignInGoogle={onClickSignInGoogle}
							onClickFacebook={onClickFacebook}
							onSubmitRegistration={onSubmitRegistration}
							errorRegistration={errorRegistration}
						/>
					)}
				</div>
			</div>
			<ModalLoading isShowLoading={showModalLoading} />
		</div>
	);
}
