import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    reportName: "xxx",
    comarr: state.report.componentArr
  })

class Report extends Component {
  render() {
    var com = this.props.comarr[0]
    var comProps = com.props;
    var type = com.type;
    var comIns = React.createElement(type, comProps);
    ;
    return React.createElement("div", {}, [React.createElement("h2", {}, this.props.reportName), comIns]);
  }
}

export default connect(
    mapStateToProps
  )(Report);
