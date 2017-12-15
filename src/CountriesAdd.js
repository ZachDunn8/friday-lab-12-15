import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCountry from './actions/CountryAction';

class countriesAdd extends Component{
	constructor(){
		super();
		this.addNewCountry = this.addNewCountry.bind(this)
	}


	addNewCountry(event){
		event.preventDefault()
		var newCountry = document.getElementById('new-country').value
		this.props.countries(newCountry)
		console.log(newCountry);

	}

	render(){

		return(
			<form onSubmit={this.addNewCountry}>
				<input id='new-country' type='text' placeholdet='Enter A Country' />
				<button className='btn btn-success'>Add Country</button>
			</form>
		)
	}
}

	function mapDispatchToProps(dispatch){
		return bindActionCreators({
		countries: AddCountry

	}, dispatch)
}


// export default CountriesAdd;
export default connect(null, mapDispatchToProps)(countriesAdd)