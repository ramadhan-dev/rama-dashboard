
import { ErrorMessage, Field } from "formik";

interface TextAreaProps {
	label: string
	name: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, name }) => {
	return (
		<div className="mb-4">
			<label htmlFor={`${name}-field`} className="block text-gray-700 text-sm font-bold mb-2">
				{label}
			</label>
			<Field as="textarea" id={name} name={name} className="default-form" />
			<ErrorMessage name={name} component="div" id={`${name}-error`} className="text-red-500 text-xs mt-1" />
		</div>
	)
}

export default Object.assign(TextArea, {});
