import React from "react";
import './Product.css';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {
    state = {
        loading: true,
        product: []
    };

    async componentDidMount() {
        const url = "https://fakestoreapi.com/products?limit=5'";
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        this.setState({ product: data, loading: false });

    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.product.length) {
            return <div>didn't get a products</div>;
        }


        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.product.map(products => (
                            <div key={products.id} className="col-sm-4">
                                <div className="productItem">
                                    <img src={products.image} alt="" />
                                    <div><b>
                                        <Link to={`/product/${products.id}`}>
                                            {products.title}
                                        </Link>
                                    </b></div>
                                    <div>{products.description}</div>
                                    <div><b>{products.price}</b></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        );
    }
}
