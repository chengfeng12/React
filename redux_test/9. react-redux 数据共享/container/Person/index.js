import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from "../../redux/actions/person"

class Person extends Component {
  addPerson = () => {
    this.props.addPerson({
      id: new Date().getTime(),
      name: this.nameNode.value,
      age: this.ageNode.value
    })
    this.nameNode.value = "";
    this.ageNode.value = "";
  }
  render() {
    return (
      <div>
        <h2>Person组件，count 值为：{this.props.count}</h2>
        <input ref={current => this.nameNode = current} placeholder="请输入姓名" />
        <input ref={current => this.ageNode = current} placeholder="请输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        {
          this.props.personList.map(item => <li key={item.id}>name: {item.name}---age: {item.age}</li>)
        }
      </div>
    )
  }
}

export default connect(
  state => ({ personList: state.personState, count: state.countState}),
  {
    addPerson: addPerson,
  }
)(Person);

