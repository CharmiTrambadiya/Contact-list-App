import React, {Component} from "react";
import CardList from "./cardlist";
import SearchBox from "./searchbox";
import {Avtar} from "./avtar";


class App  extends Component {
  constructor(){
    super()
    this.state = {
      Avtar: Avtar,
      searchfield: '',
      dummy: Avtar,
      real: Avtar,
    }
  }

onSearchChange = (searchString) => {
  // this.setState({Avtar: filteredName});
  const {dummy} = this.state;
  console.log('Line ---- 21',dummy);
  const filteredName = dummy.filter(Avtar =>
    Avtar.name.toLowerCase().includes(searchString.toLowerCase()));
  this.setState({
    real: filteredName
  })
}

  render(){
    const {real} = this.state;
    return(
      <div className="app-content">
        <h1>List</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList  filteredData={real}/>
      </div>
    );
  }
}
export default App;