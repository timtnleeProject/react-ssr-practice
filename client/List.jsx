import React from 'react';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          list: res,
        });
      });
  }

  getInitialData() {
    return this.getList();
  }

  render() {
    const { list } = this.state;
    return (
      <ul>
        {list ? list.map((li) => <li>{li.title}</li>) : 'Loading...'}
      </ul>
    );
  }
}

export default List;
