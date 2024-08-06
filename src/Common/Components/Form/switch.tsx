import React from 'react';


interface SwitchProps {
	label:string
	name:string
	value:boolean
	onClick: () => void
}

const CustomSwitch: React.FC<SwitchProps> = ({ label, value, onClick, name }) => {

	return (

		<div className="mb-4">
			<label htmlFor={`${name}-field`} className="block text-gray-700 text-sm font-bold mb-2">
				{label}
			</label>
			<button
				type="button"
				className={`relative inline-flex items-center  h-6 rounded-full w-11 ${value ? 'bg-blue-600' : 'bg-gray-200'}`}
				onClick={() => onClick()}
			>
				<span
					className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`}
				/>
			</button>
		</div>
	);
};

export default CustomSwitch;

