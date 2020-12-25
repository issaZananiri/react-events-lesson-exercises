import React, { Component } from 'react';

class List extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div >
        {this.props.contacts.map((c, i) => <Contact key={i} name={c} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div onClick = {this.displayConvo}>
        {this.props.name}
      </div>
    );
  }
}
export default List;
