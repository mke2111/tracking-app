import React from 'react';
import getData from '../helpers/measuresApi';

const id = window.location.pathname.split('/')[2];

// const scoreColor = num => {
//   const result = num >= 0 ? 'green' : 'red';
//   return result;
// };

class Measures extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {}, measure: {} };
  }

  async componentDidMount() {
    this.data = await getData(id);
    this.setState({ data: this.data.measurement, measure: this.data.measure });
  }

  render() {
    const { data, measure } = this.state;
    return (
      <div className="pt-36">
        <div >
          <h2>
            Measure:
            {' '}
            {` ${measure.name}`}
          </h2>

          <h2>
            Hours Played:
            {' '}
            {` ${data.hours}`}
          </h2>
          <div className="scores">
            <div>
              <h2>Memory</h2>
              {/* <h3 className={scoreColor(data.memory)}>{data.memory}</h3> */}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Measures;