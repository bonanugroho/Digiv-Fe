import * as yup from "yup";
import MESSAGES from "@constants/message.constant";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationRegsitration = yup.object().shape({
	email: yup
		.string()
		.email(MESSAGES.WRONG_EMAIL_FORMAT)
		.required(MESSAGES.REQUIRED_FIELD),
	password: yup.string().required(MESSAGES.REQUIRED_FIELD),
});

export const validationReservationSchema = yup.object().shape({
	email: yup
		.string()
		.email(MESSAGES.WRONG_EMAIL_FORMAT)
		.required(MESSAGES.REQUIRED_FIELD),
	name: yup.string().required(MESSAGES.REQUIRED_FIELD),
	nomer_telp: yup
		.number(MESSAGES.ALPHABET_ONLY)
		.required(MESSAGES.REQUIRED_FIELD),
	province: yup.string().required(MESSAGES.REQUIRED_FIELD),
	city: yup.string().required(MESSAGES.REQUIRED_FIELD),
	interest_car: yup.string().required(MESSAGES.REQUIRED_FIELD),
	password: yup.string().required(MESSAGES.REQUIRED_FIELD),
});
