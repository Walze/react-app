import React, { Component } from 'react';
import './Home.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from './../../actions/actions';

class Home extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="container" >

        <p>
          {JSON.stringify(this.props.posts)}
        </p>
        <button className='btn btn-primary' onClick={this.props.getPosts}>fetch</button>

      </div >

    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

