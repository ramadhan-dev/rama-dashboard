import { ErrorMessage } from 'formik';
import React from 'react';
import Select from 'react-select';

interface ISelect {
	wrapperClass?: string
	value:any
	onChange:(e:any) => void
	selectOptions:any[]
	name:string
	title:string
}


const SelectComponent: React.FC<ISelect> = ({ wrapperClass = 'mt-5', onChange, selectOptions = [], value, name, title }) => {
	return (
		<div className={wrapperClass}>
			<label>{title}</label>
			<Select
				value={value}
				onChange={(e:any) => onChange(e)}
				options={selectOptions}
				isClearable
				name={name}
			/>
			<ErrorMessage name={name} component="div" className="text-red-500" />
		</div>
	)

}

export default SelectComponent
