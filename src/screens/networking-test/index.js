import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getTestData } from '../../redux/actions/network-demo';

class NetworkTest extends Component {
  render() {
    let message = this.props.networkTestReducer.isFetching ? "Data Fetching..." : "Success Total User: "

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{message}</Text>
      </View>
    )
  }

  componentDidMount() {
    this.props.getTestData();
  }
}


function mapStateToProps(state) {
  return {
    networkTestReducer: state.networkTestReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTestData: () => dispatch(getTestData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NetworkTest);