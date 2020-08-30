import React from "react";
import classnames from "classnames";
import { Field } from "formik";
import { Input } from "@digivfe/react-component-libs";

const FormField = (props) => {
	const {
		Tag = Field,
		name,
		inputType = "input",
		className,
		objectValue = [],
		label,
		disabled = false,
		...attr
	} = props;

	const classes = classnames(className, "field");

	const ElementInput = (props) => {
		const { type } = props;
		switch (type) {
			case "input":
			case "hidden":
			case "password":
			default:
				return <Input {...props} />;
		}
	};

	return (
		<Tag
			name={name}
			render={(fieldProps) => {
				const { field, form } = fieldProps;

				return (
					<div className={classes}>
						<ElementInput
							label={label}
							type={inputType}
							disabled={disabled}
							name={name}
							{...field}
							{...attr}
						/>
						{form.errors[field.name] && form.touched[field.name] ? (
							<p className='text-xs mt-1 text-red-600'>{form.errors[field.name]}</p>
						) : null}
					</div>
				);
			}}
		/>
	);
};

export default FormField;
