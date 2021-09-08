import PropTypes from 'prop-types';
import React from 'react';
import signin from '../helpers/sessionApi';

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: 'login' };

    this.setFormType = this.setFormType.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  async setUser() {
    const { formType } = this.state;
    const { cookieHandler } = this.props;
    this.data = await signin(formType, document.getElementById('username').value);
    if (formType === 'login') {
      if (this.data[0] === true) {
        cookieHandler(this.data[1].id);
      } else {
        document.getElementById('error').innerHTML = 'User doesn\'t exist, Sign Up to create it';
      }
    } else if (this.data[0] === true) {
      cookieHandler(this.data[1].id);
    } else {
      document.getElementById('error').innerHTML = 'Invalid Input, Try again';
    }
  }

  setFormType() {
    const { formType } = this.state;
    const newType = formType === 'login' ? 'Sign Up' : 'Log In';
    this.setState({ formType: newType });
  }

  render() {
    const { formType } = this.state;
    return (
      <div >
        <div className="mt-24 text-center" >
          <h1 className="text-3xl mb-8">{formType}</h1>
          <div id="error" />
          <input type="text" id="username" name="name" className="outline-blue rounded-lg border-2 border-blue mb-8" />
          <div>
            <button type="button" onClick={this.setUser} className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 mr-4">Submit</button>
            <button type="button" onClick={this.setFormType} className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-600" >{formType === 'login' ? 'Sign Up' : 'Log In'}</button>
          </div>
        </div>
      </div>
    );
  }
}

Session.propTypes = {
  cookieHandler: PropTypes.func.isRequired,
};

export default Session;
