import secureLocalStorage from "react-secure-storage";


const getAccessToken = (KEY:string) => {
	if (!localStorage) return
	const lsValue: any = secureLocalStorage.getItem(btoa(KEY))
	if (!lsValue) return

	try {
		return lsValue
	} catch (error) {
		console.error(' LOCAL STORAGE ERROR', error)
	}

}

const setAccessToken = (KEY:string, data:any) => {
	if (!localStorage) return
	try {
		secureLocalStorage.setItem(btoa(KEY), data);
	} catch (error) {
		console.error(' LOCAL STORAGE SAVE ERROR', error)
	}
}

const removeAccessToken = (KEY: string) => {
	if (!localStorage) return
	try {
		secureLocalStorage.removeItem(btoa(KEY));
	} catch (error) {
		console.error(' LOCAL STORAGE REMOVE ERROR', error)
	}
}

export {
	getAccessToken,
	setAccessToken,
	removeAccessToken
}
