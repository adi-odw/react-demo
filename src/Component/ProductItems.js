import React from "react";
import './ProductItems.css';

export default class ProductItems extends React.Component {
    state = {
        loading: true,
        product: []
    };

    async componentDidMount() {
        const url = `https://fakestoreapi.com/products/${this.props.match.params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ product: data, loading: false });

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
                                <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                <input type="number" id="number" value="0" />
                                <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}
