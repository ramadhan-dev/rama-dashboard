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

const customStyles = {
	container: (provided: any) => ({
		...provided,
	}),
	control: (provided: any) => ({
		...provided,
		borderColor: '#3B82F6',
		boxShadow: 'none',
		'&:hover': {
			borderColor: 'darkblue',
		},
	}),
	menu: (provided: any) => ({
		...provided,
		zIndex: 9999,
	}),
	option: (provided: any, state: { isSelected: any; }) => ({
		...provided,
		backgroundColor: state.isSelected ? '#3B82F6' : 'white',
		color: state.isSelected ? 'white' : 'black',
		'&:hover': {
			backgroundColor: 'lightblue',
		},
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: 'black',
	}),
};

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
				styles={customStyles}
			/>
			<ErrorMessage name={name} component="div" className="text-red-500" />
		</div>
	)

}

export default SelectComponent
