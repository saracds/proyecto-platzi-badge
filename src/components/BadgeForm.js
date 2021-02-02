import React from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends React.Component {

  state = {};
  /*handleChange = (e) => {
    /*console.log({
                  name: e.target.name,
                  value: e.target.value
                });*/
    /*this.setState({
      //pasar el nombre del campo y su valor
      [e.target.name]: e.target.value,
    })
  }*/

  /*handleClick = (e) => {
    console.log("Se hizo click");
  }

  handleSumbit = (e) => {
    e.preventDefault();
    console.log("El formulario fue enviado");
    console.log(this.state);
  }*/

  render() {
    return (

      <div className="BadgeForm">
        <form onSubmit={this.props.onSubmit}  className="formBadge">
          <div className="form-group">
            <label >First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <hr/>
          <div className="form-group">
            <label >Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label >Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary anchoSubmit">Save</button>
          {this.props.error && ( <p className="text-danger">{this.props.error.message}</p>)}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
