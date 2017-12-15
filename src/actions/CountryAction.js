export default function AddCountry(newCountry){
	return{
		type: 'ADD_COUNTRY',
		payload: newCountry
	}
}