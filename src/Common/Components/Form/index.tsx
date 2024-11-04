import { ErrorMessage, Field } from "formik";
import React from "react";

interface FormFieldProps {
	label:string
	name:string
}

const FormField: React.FC<FormFieldProps> = React.memo(({ label, name }) => {
	console.log("🚀 ~ constFormField:React.FC<FormFieldProps>=React.memo ~ name:", name)
	console.log("🚀 ~ constFormField:React.FC<FormFieldProps>=React.memo ~ name:", label)
	return (
		<div className="mb-4">
			<label htmlFor={`${name}-field`} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
			<Field id={name} name={name} className="default-form" />
			<ErrorMessage name={name} component="div" id={`${name}-error`} className="text-red-500 text-xs mt-1" />
  </div>
	)
})

export default Object.assign(FormField, {});
