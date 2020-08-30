import React, { Fragment } from "react";
import classnames from "classnames";

export default function Input (props){
	const {
		label,
		className,
		type,
		placeholder,
		field,
		name,
		value,
		...attr
	} = props;

	const validateInput = (event) => {
		//when user unput enter
		if (event.keyCode == 13) return event.preventDefault();

		if (type === "number") {
			//not allowed when user input `e` and type number
			return event.keyCode == 69 ? event.preventDefault() : true;
		}
		return true;
	};

	const labelClasses = classnames(
		"block text-grey-darker text-sm font-bold mb-2",
		isMandatory ? "is-mandatory" : "",
	);

	return (
		<Fragment>
			<div className="w-full">
				<label className={labelClasses}>{label}</label>
				<input
					className='appearance-none border rounded w-full py-2 px-3 text-grey-darker'
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					{...attr}
					{...field}
				/>
			</div>

		</Fragment>
	);
};

