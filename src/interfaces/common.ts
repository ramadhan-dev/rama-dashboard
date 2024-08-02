
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


export interface masterAdministrative {
	code:string
	name:string
}



export interface Province extends masterAdministrative {
	createdAt?:string;
	updatedAt?:string;
	id?:string
}


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
