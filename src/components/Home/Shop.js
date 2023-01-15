import React from 'react';
import store from '../../img/store.jpg'

const Shop = () => {
    return (
        <div className='container py-5'>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={store} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Our ReadyMade Clouts Shop</h5>
                            <p class="card-text">There are 1000's of Cloth ready for You.</p>
                            <p class="card-text"><small class="text-muted">Please visit our Shop</small></p>
                            <button className='btn btn-warning'>Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;