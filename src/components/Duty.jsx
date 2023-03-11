import React from "react";
import propTypes from "prop-types";

class Duty extends React.PureComponent {
  constructor(props) {
    super(props);
    const { id, value } = this.props;

    if (value) {
      this.state = {
        text: value,
        id,
      };
    } else {
      this.state = {
        text: "",
        id,
      };
    }
  }

  update = (e) => {
    const { onChange } = this.props;
    const { id } = this.state;
    this.setState(
      {
        text: e.target.value,
      },
      () => onChange(this.state, id)
    );
  };

  render() {
    const { text, id } = this.state;
    const { onDelete } = this.props;
    return (
      <div className="duty">
        <textarea
          value={text}
          onChange={(event) => this.update(event)}
          type="text"
        />
        <button
          className="duty-delete-btn"
          onClick={() => onDelete(id)}
          type="button"
        >
          ❌
        </button>
      </div>
    );
  }
}

Duty.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Duty;
