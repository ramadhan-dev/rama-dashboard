
interface masterUser {
	email: string;
	firstName: string;
	lastName: string;
	role: string;
}

export interface User extends masterUser {
	password: string;
}


export interface Profile extends masterUser {
	createdAt: string
	updatedAt:string
	id:string
	isBanned:boolean
}


/**
 * Administrative Interface
 */
export interface masterAdministrative {
	code:string
	name:string
}



export interface Province extends masterAdministrative {
	createdAt?:string;
	updatedAt?:string;
	id?:string
}



export interface City extends Province {
	province_code:any
}

export interface District extends City {
	city_code: any
}

export interface SubDistrict extends District {
	district_code: any
}

// END


// Product
export interface ProductAtt {
	_id?:string
	name: string
	code: string
	status: boolean
}
// END




/**
 * Pagination interface
 */
export interface pagination {
	pageIndex:number
	pageSize:number
}

export interface paginationPayload {
	pagination: pagination,
	filter:[]
	sort:[]
	search:string
	total: number
	pageCount: number
}
// END


// Interface React-Select

export interface SelectProps {
	value:string|number
	label:string|number
}
