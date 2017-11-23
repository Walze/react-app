import React, { Component } from 'react';
import './Home.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { test } from './../../actions/actions';

class Home extends Component {
  
  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="container" >

        <div id="posts">
          <div className="row">
            <div className="col-3">
              <input className="form-control form-control-sm" placeholder="Procurar" />
            </div>
          </div>
        </div>

        <br />
        <table className="table">
          <thead>
            <tr>
              <th name='nome' scope="col">Nome</th>
              <th name='obs' scope="col">Observação</th>
            </tr >
          </thead >
          <tbody className='list'>

            <tr>
              <td className='nome'>nome</td>
              <td className='obs'>comment</td>
            </tr>

          </tbody >
        </table >

      </div >

    );
  }
}

function mapStateToProps(state) {
  return {
    allstate: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //posts: dispatch.getPosts,
    test
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

