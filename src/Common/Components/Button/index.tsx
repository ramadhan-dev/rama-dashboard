interface ButtonComponentProps {
	loading:boolean
	title:string
	onClick:() => void
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ loading, title, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`btn-horizontal-primary ${loading ? 'cursor-not-allowed' : 'pointer'}`}
			disabled={loading}
			type="button"
		>
			{loading ? 'Loading...' : title }
		</button>
	)
}


export default Object.assign(ButtonComponent, {});
