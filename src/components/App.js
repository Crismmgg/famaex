import React from 'react';
import '../stylesheets/App.scss';
import ReportsInfo from '../services/ReportsData';
import Reports from './Reports';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: []
    }
  }

  componentDidMount() {
    ReportsInfo()
      .then(reportsData => {
        this.setState({
          reports: reportsData,
        })
      })
  }

  render() {
    console.log(this.state.reports)
    return (
      <div className="App">
        <Reports reports={this.state.reports} />
      </div>
    );
  }
}

export default App;
