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
      reports: [],
      inputOrder: 'id'
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
  //handler
  handleOrder = (inputOrder) => {
    this.setState(
      inputOrder
    )
  }

  //criteria order
  orderedReports() {
    const reports = [...this.state.reports]
    const orderBy = this.state.inputOrder
    return orderBy === 'id' ? reports.sort((a, b) => (a.id) - (b.id)) : reports.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }

  //render
  render() {
    return (
      <div className="app">
        <Header />
        <Reports
          reports={this.orderedReports()}
          handleOrder={this.handleOrder}
          orderValue={this.state.inputOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;
