import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountriesList extends Component{
	render(){
		var countryArray = this.props.countriesList.map((country, index)=>{

			return(
				<li key={index}>{country}</li>
		)
	})
		return(
			<div>
				<ul>
				{countryArray}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		countriesList: state.countries
		
	}

}

// export default CountriesList;
export default connect(mapStateToProps)(CountriesList)