import React from "react";
import "../../styles/main.scss";

type TextAreaProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  rows: number;
  required: boolean;
  validationMessage: string;
};

class TextArea extends React.Component<TextAreaProps> {
  constructor(props: TextAreaProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Message</label>
          <textarea
            className="form-control"
            id={this.props.id}
            name={this.props.name}
            rows={this.props.rows}
            placeholder={this.props.placeholder}
            required={this.props.required}
            data-validation-required-message={this.props.validationMessage}
          ></textarea>
          <p className="help-block text-danger"></p>
        </div>
      </div>
    );
  }
}

export default TextArea;
