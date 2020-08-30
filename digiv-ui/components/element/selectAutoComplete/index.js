import React, { useState, useRef, useEffect } from "react";
import Input from "@components/element/input";
import { connect } from "formik";

const SelectAutoComplete = (props) =>  {
	const {
		label,
		field,
		name,
		objectValue,
		placeholder,
		disabled ,
		onChange,
		formik,
		initValue,
		value,
		onSelectedOption,
		withLabel,
		...attr
	} = props;

	const selectBox = useRef();
	const selectedInputRef = React.createRef();
	const [optionData, setOptionData] = useState([]);
	const [isShowOption, setShowOption] = useState(false);
	const [valueAutocomplete, setValueAutocomplete] = useState({
        id:'',
        name:''
	});
	const handleClick = (e) => {
		setShowOption(true);
	};
	const handleDocumentClick = (e) => {
		const selectBoxElement = selectBox?.current;
		if (selectBoxElement && !selectBoxElement.contains(e.target)) {
			setShowOption(false);
		}
	};

	const onClickOption = (e,item,field) => {
        
        formik.setFieldValue(field, item.id)
        setShowOption(false);
        onSelectedOption(item)
        setValueAutocomplete(item)
	};

	const handleChange = (e) => {
		const searchKeyword = e.target.value;
        onChange(searchKeyword);
        setValueAutocomplete({...valueAutocomplete,name: searchKeyword})
	};
	useEffect(() => {
		document.addEventListener("click", handleDocumentClick);
	}, []);

	useEffect(() => {
		setOptionData(objectValue);
	}, [objectValue]);
	return (
		<div className='relative' ref={selectBox}>
			<input
				type='hidden'
				ref={selectedInputRef}
				value={valueAutocomplete.id ? valueAutocomplete.id : ""}
				readOnly
                name={name}
                {...field}
			/>
			<Input
				name={name}
                label={label}
                autoComplete='off'
                disabled={disabled}
                placeholder={placeholder}
				value={valueAutocomplete.name}
				withLabel={withLabel}
				onChange={(e) => handleChange(e)}
				onClick={(e) => !disabled ? handleClick(e) : null}
			/>
			{isShowOption && (
				<div className='max-height-200 overflow-y-auto absolute w-full bg-white shadow-2xl z-10'>
					<ul>
						{optionData?.length >= 1
							? optionData.map((item, index) => (
									<li
										key={index}
										onClick={(e) => onClickOption(e, item, name)}
										className=' cursor-pointer py-4 px-8 my-2  hover:bg-yellow-500'>
										{item.name}
									</li>
							  ))
							: null}
					</ul>
				</div>
			)}
		</div>
	);
}

export default connect(SelectAutoComplete)
