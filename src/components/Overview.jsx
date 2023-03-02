import React from "react";

class Overview extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overview bg-lb">
        <h1>{this.props.surname}</h1>
      </div>
    );
  }
}

export default Overview;
