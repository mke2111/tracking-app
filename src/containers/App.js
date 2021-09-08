import { withCookies, Cookies } from 'react-cookie';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Nav from '../components/topMenu';
import Session from '../components/session';
import { updateUser } from '../actions/index';
import Details from './details';
import Show from '../components/show';
import Measures from '../components/measures';
import Profile from '../components/profile';
import FooterMenu from '../components/footerMenu';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = this.props;
    this.state = { uid: cookies.get('uid') };
    this.cookieHandler = this.cookieHandler.bind(this);
  }

  cookieHandler(name) {
    const { cookies } = this.props;
    this.setState({ uid: name });
    cookies.set('uid', name, { path: '/' });
  }

  render() {
    const { uid } = this.state;
    const { handleUserUpdate } = this.props;
    if (uid && uid !== '') {
      handleUserUpdate(uid);
      return (
        <main className="flex flex-col justify-end ">
          <Nav />
          <Switch>
            <Route exact path="/" component={Details} />

            <Route path="/show/:id" component={Show} />

            <Route path="/measure/:id" component={Measures} />

            <Route path="/profile">
              <Profile uid={uid} />
            </Route>
          </Switch>
          <FooterMenu />
        </main>
      );
    }
    return (
      <div>
        <Nav />
        <Session cookieHandler={this.cookieHandler} />
      </div>
    );
  }
}

App.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  handleUserUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  handleUserUpdate: user => {
    dispatch(updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
