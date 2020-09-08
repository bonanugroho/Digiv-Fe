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
				
			</div>
		</div>
	);
}
