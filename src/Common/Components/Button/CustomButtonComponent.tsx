interface CustomButtonComponentProps {
	onClick: () => void
	title: string
	className?:string
}
const CustomButtonComponent: React.FC<CustomButtonComponentProps> = ({ title, onClick, className= '' }) => {
	return (
		<button
			type="button"
			className={`pointer ${className}`}
			onClick={onClick}
		>
		{title}
		</button>
	)
}


export default Object.assign(CustomButtonComponent, {});
