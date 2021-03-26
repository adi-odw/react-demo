import React from "react";
import './ProductItems.css';

export default class ProductItems extends React.Component {
    state = {
        loading: true,
        product: [],
        clicks: 0,
        show: true
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
    }
    DecreaseItem = () => {
        if (this.state.clicks > 0) {

            this.setState({ clicks: this.state.clicks - 1 });

        }
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
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
                                {/* <div>
                                    <button onClick={this.IncrementItem}>Click to increment by 1</button>
                                    <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
                                    <button onClick={this.ToggleClick}>
                                        {this.state.show ? 'Hide number' : 'Show number'}
                                    </button>
                                    {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                                </div> */}
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}
