import { Field } from 'formik';
import React from 'react';

interface RadioButtonProps {
	label:string
	value:string
	name:string
}


const RadioCard: React.FC<RadioButtonProps> = ({ label, value, name }) => (
	<Field name={name}>
		{({ field }:any) => (
			<label
				className={`cursor-pointer border rounded-lg p-4 flex items-center justify-center ${field.value === value ? 'border-blue-700 bg-blue-300' : 'border-gray-300'
					}`}
			>
				<input
					type="radio"
					{...field}
					value={value}
					checked={field.value === value}
					className="hidden"
				/>
				<span className="text-center">{label}</span>
			</label>
		)}
	</Field>
);

const RadioCardComponent = React.memo(RadioCard);
export default RadioCardComponent;
