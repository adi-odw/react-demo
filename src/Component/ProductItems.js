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
        const url = `https://fakestoreapi.com/products/${this.props.match.params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        this.setState({ product: data, loading: false });
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        localStorage.setItem('productquantity', this.state.clicks + 1);
        localStorage.setItem('productid', this.state.product.id);
    }
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
