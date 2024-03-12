import { Boxes } from "lucide-react"

interface CounterIconProps {
	className: string
	icon?:React.ReactNode
}

const CounterIcon: React.FC<CounterIconProps> = ({ className, icon, ...props}) => {
	return (
		<div className={`flex items-center justify-center size-12 rounded-md text-15 ${className}`}>{icon}</div>
	)
}

export default CounterIcon
