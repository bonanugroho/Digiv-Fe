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
		isMandatory,
		value,
		disabled,
		withLabel,
		...attr
	} = props;

	const labelClasses = classnames(
		"block text-grey-darker text-sm font-bold mb-2",
		isMandatory ? "is-mandatory" : "",
	);

	return (
		<Fragment>
			<div className="w-full">
				{withLabel ?? (
						<label className={labelClasses}>{label}</label>
				)}
			
				<textarea
					className=' w-full h-20 px-4 resize-none border rounded focus:outline-none focus:shadow-outline'
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					{...attr}
					{...field}
				/>
			</div>

		</Fragment>
	);
};

