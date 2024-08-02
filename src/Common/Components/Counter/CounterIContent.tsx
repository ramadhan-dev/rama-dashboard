import CountUp from "react-countup"

interface CounterContentProps {
	value:number
	className:string
	separator?:string
	title:string
	decimals?:number
}

const CounterContent: React.FC<CounterContentProps> = ({ className, separator = ',', title, value, decimals=0}) => {
	return (
		<div className="grow">
			<h5 className="mb-1 text-16">
				<CountUp end={value} separator={separator} className="counter-value" decimals={decimals} />
			</h5>
			<p className={className}>{title}</p>
		</div>
	)
}

export default CounterContent
