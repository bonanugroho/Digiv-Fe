import React, { useState, useContext } from "react";
import "@styles/pages/registration.scss";
import { auth, firebase } from "@helper/firebase";
import { useRouter } from "next/router";

import FormRegistration from "./view/formRegistration";
import digivApiServices from "@utils/httpRequest";
import ModalLoading from "@components/element/modalLoading";
import { ModalAlert, ModalContext } from "@components/element/modal";

import logoEve from "@assets/images/logo/logo-ave.png";

export default function Registration() {
	const [showModalLoading, setShowModalLoading] = useState(false);
	const [errorRegistration, setErrorRegistration] = useState({});

	const onSubmitRegistration = async (values) => {
		fetchCheckUser(values);
	};

	return (
		<div className='font-sans antialiased bg-grey-lightest w-full h-full'>
		
			<div className='w-full  grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
				<div className='w-12/12 p-16 xl:w-4/12 flex justify-center  lg:justify-start xl:justify-start'>
					<div>
						<img className='w-32 sm:w-32 md:w-48 lg:w-64 ' src={logoEve}></img>
					</div>
				</div>
				<div className='h-full  min-h-screen w-12/12 flex justify-center registration__container-form lg:items-end lg:align-end  xl:items-end xl:align-end'>
					<FormRegistration
						onSubmitRegistration={onSubmitRegistration}
						errorRegistration={errorRegistration}
					/>
				</div>
			</div>
			<ModalLoading isShowLoading={showModalLoading} />
		</div>
	);
}
