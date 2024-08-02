interface ButtonComponentProps {
	loading:boolean
	title:string
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({loading, title}) => {
	return (
		<button
			type="submit"
			className={`btn-horizontal-primary ${loading ? 'cursor-not-allowed' : 'pointer'}`}
			disabled={loading}
		>
			{loading ? 'Loading...' : title }
		</button>
	)
}


export default Object.assign(ButtonComponent, {});
