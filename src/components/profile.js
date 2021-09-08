import React from 'react';
import PropTypes from 'prop-types';
import getData from '../helpers/profileApi';
import UserMeasurements from './UserMeasurements';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  async componentDidMount() {
    const { uid } = this.props;
    this.data = await getData(uid);
    this.setState({ data: this.data });
  }

  render() {
    const getList = () => {
      const { data } = this.state;
      const result = [];
      for (let i = 0; i < data.length; i += 1) {
        result.push(
          <UserMeasurements
            key={data[i].id}
            id={data[i].id}
            memory={[data[i].memory]}
            // intelligence={[data[i].intelligence]}
            // social={[data[i].social]}
          />,
        );
      }
      return result;
    };
    return (
      <div id="profile">
        {getList()}
      </div>
    );
  }
}

Profile.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default Profile;
