
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


export interface Province {
	code: string;
	name: string;
	createdAt?:string;
	updatedAt?:string;
	id?:string
}
