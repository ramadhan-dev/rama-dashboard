import { useState } from "react";

export function useFilter() {
	const [filter, setFilter] = useState<string>('');

	return {
		filter,
		onFilterChange: setFilter,
	};
}
