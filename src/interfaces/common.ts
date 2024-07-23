export interface User {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	role: string;
}


export interface Province {
	code: string;
	name: string;
	createdAt?:string;
	updatedAt?:string;
	id?:string
}
