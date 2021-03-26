import React from "react";

export default class OrderDetails extends React.Component {
    state = {
        loading: true,
        product: [],
        product_id: localStorage.getItem('productid'),
        product_quantity: localStorage.getItem('productquantity'),
    };

    async componentDidMount() {
        const url = `https://fakestoreapi.com/products/${this.state.product_id}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(url);
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
                                <h1>Cart</h1>
                                <img src={this.state.product.image} alt="" />
                                <div><b>
                                    {this.state.product.title}
                                </b></div>
                                <div><b>Price : {this.state.product.price}</b></div>
                                <div>{this.state.product_quantity} Items</div>

                                <div> Total Price : {this.state.product_quantity * this.state.product.price}</div>

                                <br></br>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}
