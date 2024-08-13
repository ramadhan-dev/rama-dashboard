// src/components/Section.tsx

import React, { useRef, useEffect } from 'react';

interface SectionProps {
	key:number
	id: string;
	title: string;
	onIntersect: (id: string) => void;
	children:React.ReactNode
}

const Section: React.FC<SectionProps> = ({key, id, title, onIntersect, children }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onIntersect(id);
				}
			},
			{ threshold: 0.5 } // Adjust this value based on when you want the intersection to be triggered
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [id, onIntersect]);

	return (
		<div key={key} id={id} ref={sectionRef} className="h-screen p-4 bg-gray-100">
			<h2 className="text-2xl font-bold">{title}</h2>
			<div>{children}</div>
		</div>
	);
};

export default Section;
