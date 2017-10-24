import React, {Component} from 'react';

class CartInput extends Component {

    render() {
        return (
            <div className="cartInput">
                <input className="form-control" placeholder="Enter item and price seperated by (-) hyphen" onKeyPress={this.props.item} type=""/>
            </div>
        );
    }
}

export default CartInput;