import React, {Component} from 'react';
import CartInput from './cartInput';
import CartList from './cartList'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.arr = [{
            name: 'Mango',
            quantity: 3,
            price: 200
        }];
        this.state = {
            items: this.arr,
            total: 600
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {

            if (e.target.value.length !== 0) {
                this.inputValue = e.target.value;
                let inputArr = this.inputValue.split('-');
                this.arr.push({name: inputArr[0], price: parseInt(inputArr[1]), quantity: 1});
                console.log(inputArr)
                this.setState({
                    items: this.arr
                })
                this.getTotal();
            }

            else {
                alert("Please enter a product in the text box before hitting Enter Button!")
            }

        }
    }

    getTotal = () => {
        let total = 0;
        this.arr.map((i) => {
            return (total = total + (i.price * i.quantity))
        })
        this.setState({
            total
        })
    };

    handleQuantityIncrement = (e, index) => {
        this.arr[index].quantity++;
        this.setState({
            items: this.arr
        })

        this.getTotal();
    }

    handleQuantityDecrement = (e, index) => {
        this.arr[index].quantity--;
        this.setState({
            items: this.arr
        })

        this.getTotal();
    }

    removeItem = (e, index) => {
        this.arr.splice(index, 1);
        this.setState({
            items: this.arr
        })

        this.getTotal();
    }

    render() {
        console.log(this.state)
        return (
            <div className="cart col-md-4 col-md-offset-4">
                <h3>My Cart</h3>
                <CartInput item={this.handleKeyPress}/>
                <CartList obj={this.state.items} total={this.state.total}
                          quantityIncrease={this.handleQuantityIncrement}
                          quantityDecrease={this.handleQuantityDecrement}
                          removeItem={this.removeItem}/>
            </div>
        );
    }
}

export default Cart;
