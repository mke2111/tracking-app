import React from 'react';
import API from '../helpers/showApi';

const id = window.location.pathname.split('/')[2];

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };

    this.measure = this.measure.bind(this);
  }

  async componentDidMount() {
    this.setState({ data: await API.getData(id) });
  }

  scoreColor(num) {
    this.result = num >= 0 ? 'green' : 'red';
    return this.result;
  }

  async measure() {
    this.hours = new Date(document.getElementById('time').value);
    // this.hours = Math.floor(Math.abs(this.time * 1.23)) % 24;
    // console.log(this.hours);
    this.data = await API.pushData([id, this.hours]);
    console.log(this.data);
    if (this.data.id) {
      window.location.href = `/measure/${this.data.id}`;
    } else {
      document.getElementById('score').innerHTML += 'Invalid';
      console.log(this.data.id);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="text-center shadow w-5/6 bg-gray-50 rounded mx-auto my-6 h-full">
        <div>
          <h3 className="text-2xl text-green-500 py-8"><small className="text-sm text-black">Workout type: </small>{data.name}</h3>
          <div className="scores">
            <div>
              <h3 className={this.scoreColor(data.memory)}>00{data.memory}</h3>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div id="dates">
            <h3 className="pb-4">Add workout time in hours</h3>
            <input id="time" type="number" className="outline-blue rounded-lg border-2 border-blue mb-8" placeholder="Enter number of hours"/>
          </div>
          <button
            type="submit"
            onClick={this.measure}
            className="inline-flex justify-center px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 ml-1"
          >
            Submit
          </button>
          <div id="score"> </div>
        </div>
      </div>
    );
  }
}

export default Show;
