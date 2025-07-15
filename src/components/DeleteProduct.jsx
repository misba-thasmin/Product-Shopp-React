import React from 'react'
import ProductHeader from './ProductHeader'

const DeleteProduct = () => {
  return (
    <div>
        <ProductHeader />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 p-5">
                       <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="label form-label">Product Name:</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="d-grid gap-2">
                            <button className="btn btn-danger">delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default DeleteProduct