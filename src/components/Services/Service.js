import React, { useEffect, useState } from 'react';

const Service = ({service}) => {
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{service.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;