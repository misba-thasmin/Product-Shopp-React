import React from 'react'
import ProductHeader from './ProductHeader'

const AddProduct = () => {
  return (
    <div>
        <ProductHeader />
 <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 p-5">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Product Name</div>
                            <input type="text" className="form-control" />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Upload product photo</div>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="label form-label">Description</div>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Warranty</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Expiry date</div>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="label form-label">Manufacturing date</div>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="label form-label">Price</div>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="label form-label">Phone No</div>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default AddProduct