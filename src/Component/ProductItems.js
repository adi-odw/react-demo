import React from "react";
import { Link } from "react-router-dom";
import './ProductItems.css';

export default class ProductItems extends React.Component {
    state = {
        loading: true,
        product: [],
        clicks: 0
    };
    async componentDidMount() {
        // Check if ID is integer else show 404 Page 
        const url = `https://fakestoreapi.com/products/${this.props.match.params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        this.setState({ product: data, loading: false });
    }
    // TODO
    // Show 1 as default numbe of item count 
    // TODO Need to increase price here as well if quantity gets changed
    // TODO Provide option of adding multiple products in cart
    // Can remove items from Cart
    // Show empty cart and ask for shopping if page visited and cart is empty (Also, in case of every product is removed from cart)
    // Can also change quantity of item from cart as well.
    // try to use cookie instead of localStorage
    // May be bit of good design as well


    // Code practise 
    // For any new changes , try to have comment for custom methods
    /**
     * Purpose
     * Params - Arguments
     * Return Params
     */
    // Never push to main branch
    // Always create a feature branch and raise a PR => feature_remove-cart, feature_user-login
    // have setting for code review and let someone review your code and then merge into main
    // PR review Setting , atleast one review, Add CodeOwners me and poshak , unable to merge to main until PR gets approved
    // Try to use have some function common (Non redundant) in future


    // Later on will have some github Action, linter rule and deployment as well.
    /**
     * Method to increase product quantity when clicked increment
     */
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        localStorage.setItem('productquantity', this.state.clicks + 1);
        localStorage.setItem('productid', this.state.product.id);
    }

    // TODO Can't decrease item if its already 1 
    DecreaseItem = () => {
        if (this.state.clicks > 0) {
            this.setState({ clicks: this.state.clicks - 1 });
            localStorage.setItem('productquantity', this.state.clicks - 1);
        }
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        return (
            <div className="container">
                <div className="row">
                    {
                        <div key={this.state.product.id} className="col-sm-12">
                            <div className="productItems">
                                <h1>Product</h1>
                                <img src={this.state.product.image} alt="" />
                                <div><b>
                                    {this.state.product.title}
                                </b></div>
                                <div>{this.state.product.description}</div>
                                <div>Category: {this.state.product.category}</div>
                                <div><b>Price:{this.state.product.price}</b></div>
                                <br></br>
                                <div class="value-button" onClick={this.DecreaseItem} value="Decrease Value">-</div>
                                <input type="number" value={this.state.clicks} readOnly class="inputProductNo" />
                                <div class="value-button" onClick={this.IncrementItem} value="Increase Value">+</div>
                                <Link to={`/checkout`}>
                                    <button >Add to Cart</button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}
