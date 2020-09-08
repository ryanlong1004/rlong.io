import React from "react";
import "../../styles/main.scss";

type FormProps = {
  id: string;
  name: string;
  method: string;
};

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form
        id={this.props.id}
        name={this.props.name}
        method={this.props.method}
      >
        <input type="hidden" name="form-name" value={this.props.name} />
        {this.props.children}
      </form>
    );
  }
}

export default Form;