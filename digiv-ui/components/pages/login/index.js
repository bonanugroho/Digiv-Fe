import React, { useState, useContext } from "react";
import "@styles/pages/login.scss";
import FormLogin from "./view/formLogin";
import ModalLoading from "@components/element/modalLoading"
import logoEve from "@assets/images/logo/logo-ave.png";
import { useRouter } from "next/router";

export default function login() {
    const [showModalLoading, setShowModalLoading] = useState(false);
	const [errorLogin,setErrorLogin ] = useState({})
	const router = useRouter();

	const onLoginSubmit = (values) => {
		console.log(values)
		router.push("/main-hall");
	};

	return (
		<div className='font-sans antialiased bg-grey-lightest w-full h-full'>
			<div className='w-full  grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
				<div className='w-12/12 p-16 xl:w-4/12 flex justify-center  lg:justify-start xl:justify-start'>
					<div>
						<img className='w-32 sm:w-32 md:w-48 lg:w-64 ' src={logoEve}></img>
					</div>
				</div>
				<div className='h-full  min-h-screen w-12/12 flex justify-center login__container-form lg:items-end lg:align-end  xl:items-end xl:align-end'>
					<FormLogin onLoginSubmit={onLoginSubmit} errorLogin={errorLogin} />
				</div>
			</div>
			<ModalLoading isShowLoading={showModalLoading} />
		</div>
	);
}
