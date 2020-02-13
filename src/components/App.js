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

  orderByCreateDate() {
    const reports = [...this.state.reports]
    return reports.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }

  orderById() {
    const reports = [...this.state.reports]
    return reports.sort((a, b) => (a.id) - (b.id))

  }

  render() {
    return (
      <div className="app">
        <Header />
        <Reports reports={this.orderById()} />
        <Footer />
      </div>
    );
  }
}

export default App;
