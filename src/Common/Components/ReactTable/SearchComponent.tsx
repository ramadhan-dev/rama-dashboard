import { useEffect, useState } from "react";


interface ISearchComponent {
	filter:string
	onFilterChange:(string:String) => void
}

const SearchComponent: React.FC<ISearchComponent> = ({filter, onFilterChange}) => {


	// Global Filter
	const DebouncedInput = ({
		value: initialValue,
		onChange,
		debounce = 500,
		...props
	}: {
		value: string | number;
		onChange: (value: string | number) => void;
		debounce?: number;
	} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
		const [value, setValue] = useState(initialValue);

		useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);

		useEffect(() => {
			const timeout = setTimeout(() => {
				onChange(value);
			}, debounce);

			return () => clearTimeout(timeout);
		}, [debounce, onChange, value]);

		return (
			<input {...props} value={value} onChange={e => setValue(e.target.value)} />
		);
	};

	return (
		<div className="self-center col-span-12 lg:col-span-6 lg:place-self-end">
			<label><span className="pr-5">Search: </span>
				<DebouncedInput
					value={filter}
					onChange={value => onFilterChange(String(value))}
					className="py-2 pr-4 text-sm text-topbar-item bg-topbar border border-topbar-border rounded pl-2 placeholder:text-slate-400 form-control focus-visible:outline-0 min-w-[200px] focus:border-blue-400 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-border-dark group-data-[topbar=dark]:placeholder:text-slate-500 group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-border-brand group-data-[topbar=brand]:placeholder:text-blue-300 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-500 group-data-[topbar=dark]:dark:text-zink-100"
					placeholder={'Search Data... '}
				/>
			</label>
		</div>
	)
}

export default SearchComponent
