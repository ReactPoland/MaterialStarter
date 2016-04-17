
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from 'actions/article.js';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});


class InsuranceHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
     
     }
  }

  //mocked data here, normally from database

  render () {

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">LIFEADVISORPRO (TM)</h1>
          	<p className="row center-lg center-md center-sm center-xs">
          		Software Licensed to: Glenn Cooke		
			</p>
			<p className="row center-lg center-md center-sm center-xs">
          		Insurance Licenses:		
			</p>
			<p className="row center-lg center-md center-sm center-xs">
          		(ON) #25406540		
			</p>
			<p className="row center-lg center-md center-sm center-xs">
          		(BC) #6884654 		
			</p>
			<p className="row center-lg center-md center-sm center-xs">
          		(AB) #6558781 		
			</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceHome);

  
				  	
				 		
				