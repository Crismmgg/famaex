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
      inputSort: 'id'
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
  handleSort = (inputSort) => {
    this.setState(
      inputSort
    )
  }

  //sort criteria
  sortedReports() {
    const reports = [...this.state.reports]
    const sortBy = this.state.inputSort
    return sortBy === 'id' ? reports.sort((a, b) => (a.id) - (b.id)) : reports.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }

  //render
  render() {
    return (
      <div className="app">
        <Header />
        <Reports
          reports={this.sortedReports()}
          handleSort={this.handleSort}
          sortValue={this.state.inputSort} />
        <Footer />
      </div>
    );
  }
}

export default App;
