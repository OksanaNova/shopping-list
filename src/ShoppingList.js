import { Component } from "react";
import check from './check_mark.png';

export class ShoppingList extends Component {
    state = {
        userInput: "",
        shoppingList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(userItem) {
        if (userItem === "") {
                alert('Please fill out the field.')
        }
        else {
            let shoppingArray = this.state.shoppingList;
            shoppingArray.push(userItem);
            this.setState({ shoppingList: shoppingArray, userInput: '' });
        }
    }

    deleteAll() {
        let shoppingArray = this.state.shoppingList;
        shoppingArray = [];
        this.setState({ shoppingList: shoppingArray })
    }

    itemDone(event) {
        const listItem = event.target;
        listItem.classList.toggle('done')
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="shoppingList">
                <form onSubmit={this.onFormSubmit}>
                  <div className="shoppingList_item">
                      <input type="text" placeholder="Add a new item.." 
                      value={this.state.userInput}
                      onChange={(e) => {this.onChangeEvent(e.target.value)}}/>
                  </div>
                  <div className="shoppingList_item">
                      <ul>{this.state.shoppingList.map((item, index) => (
                          <li onClick={this.itemDone} key={index}>
                              <img src={check} className="check_mark" alt="check mark" width="10px" />
                              {item}</li>))}</ul>
                  </div>
                  <div className="shoppingList_item">
                      <button className="btn add" onClick={()=> this.addItem(this.state.userInput)}>ADD</button>
                  </div>
                  <div className="shoppingList_item">
                      <button className="btn del" onClick={()=> this.deleteAll()} >DELETE ALL</button>
                  </div >
                </form>
            </div>
        )
    }
}