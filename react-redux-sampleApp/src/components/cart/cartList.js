import React, {Component} from 'react';

class CartList extends Component {

    constructor() {
        super();
        this.state = {
            quantity: 1
        }
    }


    render() {

        const cartListData = this.props.obj;
        let newCartListData = cartListData.map((list, index) => {
            return (
                <li key={index} className="list-group-item clearfix">
                    <div className="col-md-2">{list.name}</div>
                    <div className="col-md-2">{list.quantity}</div>
                    <div className="col-md-2">{list.price}</div>
                    <div className="col-md-3 text-center quantity-change">
                        <span onClick={(event) => this.props.quantityIncrease(event, index)}>+</span>
                        <span onClick={(event) => this.props.quantityDecrease(event, index)}>-</span>
                    </div>
                    <div className="col-md-3 text-center remove-item"
                         onClick={(event) => this.props.removeItem(event, index)}> X
                    </div>
                </li>
            )
        })

        return (
            <div className="cart-list">
                <ul className="row list-group">
                    {newCartListData}
                </ul>

                <div className="total-bar clearfix">
                    <span className="pull-left">
                        Total
                    </span>
                    <span className="pull-right">
                        {this.props.total}
                    </span>
                </div>
            </div>
        );
    }
}

export default CartList;