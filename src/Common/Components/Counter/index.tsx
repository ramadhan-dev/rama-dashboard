import React from "react";
import { ElementType } from "react";
import CounterIcon from "./CounterIcon";
import CounterContent from "./CounterIContent";

interface CounterProps {
	className?: string;
	children?: React.ReactNode;
	isCard?:boolean
}


const Counter: React.FC<CounterProps> = ({ className, children, isCard = true, ...props } ) => {
	return (
		<React.Fragment>
			<div className={className}>
				<div className={`${isCard ? 'card' : ''}`}>
					<div className={`${isCard ? 'card-body' : ''} flex items-center gap-3 `}>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Object.assign(Counter, {
	Icon: CounterIcon,
	Content: CounterContent,
	// Footer: CounterFooter
});
