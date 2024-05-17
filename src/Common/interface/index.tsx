export interface column { header: string; accessorKey: string; enableColumnFilter: boolean; enableSorting: boolean };



/**
 * header untuk react table
 */
export interface IHeader extends EnableRowSpan {
	id?: string
	Cell?: any
	Footer?: any
	Header?: string | React.ReactNode
	align?: string
	width?: number
	minWidth?: number
	maxWidth?: number
	accessor?: string
	columns?: unknown[]
	disableSortBy?: boolean
	onClick?: () => void
}


interface EnableRowSpan {
	enableRowSpan?: boolean
}
