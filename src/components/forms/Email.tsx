import React from "react";
import "../../styles/main.scss";

type EmailProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
  validationMessage: string;
};

class Email extends React.Component<EmailProps> {
  constructor(props: EmailProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>{this.props.label}</label>
          <input
            className="form-control"
            id={this.props.id}
            name={this.props.name}
            type="email"
            placeholder={this.props.placeholder}
            required={this.props.required}
            data-validation-required-message={this.props.validationMessage}
          />
          <p className="help-block text-danger"></p>
        </div>
      </div>
    );
  }
}

export default Email;
