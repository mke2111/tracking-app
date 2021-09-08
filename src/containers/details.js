import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../helpers/detailsApi';
import MeasureDetail from '../components/measureDetail';
import { updateMeasures } from '../actions/index';

class Details extends React.Component {
  async componentDidMount() {
    const { handleMeasuresUpdate } = this.props;
    const data = await API.getData();
    handleMeasuresUpdate(await data);
  }

  render() {
    const getList = () => {
      const { measures } = this.props;
      const result = [];
      for (let i = 0; i < measures.length; i += 1) {
        result.push(
          <MeasureDetail
            key={measures[i].id}
            id={measures[i].id}
            name={measures[i].name}
          />,
        );
      }
      return result;
    };

    const handleNewMeasure = async () => {
      const data = [
        document.getElementById('name').value,
      ];
      await API.pushData(data);
      window.location.reload();
    };

    return (
      <div className="pt-36" id="details">
        <h3 className="text-3xl text-blue-400">Add New Measure</h3>
        <div id="create">
          <input type="text" id="name" name="name" placeholder="name" />
          <button type="button" onClick={handleNewMeasure}>SUBMIT</button>
        </div>
        <h1>Pick</h1>
        {getList()}
      </div>
    );
  }
}

Details.propTypes = {
  handleMeasuresUpdate: PropTypes.func.isRequired,
  measures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ measures: state.measures });

const mapDispatchToProps = dispatch => ({
  handleMeasuresUpdate: measures => {
    dispatch(updateMeasures(measures));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
