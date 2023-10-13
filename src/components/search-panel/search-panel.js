import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    //--------разные функции
    const term = e.target.value;
    this.setState({ term }); //-- установка локального состояние
    this.props.onUpdateSearch(term); //--------разные функции - локальное состояние пробрасываем наверх
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find an employee"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
