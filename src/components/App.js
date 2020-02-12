import React from 'react';
import '../stylesheets/App.scss';
import ReportsInfo from '../services/ReportsData';
import Reports from './Reports';
import Header from './Header';
import Footer from './Footer';

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
    return (
      <div className="app">
        <Header />
        <Reports reports={this.state.reports} />
        <Footer />
      </div>
    );
  }
}

export default App;
