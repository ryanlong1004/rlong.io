import React from "react";
import "../../styles/main.scss";

type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  validationMessage: string;
};

class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      headerDidMount: false,
      isUserInHeader: true,
    };
  }

  render() {
    return (
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>{this.props.label}</label>
          <input
            className="form-control"
            id={this.props.id}
            name="Name"
            type={this.props.type}
            placeholder={this.props.placeholder}
            required={true}
            data-validation-required-message="Please enter your name."
          />
          <p className="help-block text-danger"></p>
        </div>
      </div>
    );
  }
}

export { Input };
