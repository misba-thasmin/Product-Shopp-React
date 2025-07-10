import React from 'react'
import ProductHeader from './ProductHeader'

const AddProduct = () => {
  return (
    <div>
        <ProductHeader />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Product Name</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Description</label>
<textarea name="" id="" className="form-control"></textarea>

                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Warranty</label>
<select name="" id="" className="form-control">
    <option value=" 2 yr">2 yr</option>
    <option value="3 yr">3 yr</option>
    <option value="4 yr">4 yr</option>
    <option value="5 yr">5 yr</option>
</select>
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
<label htmlFor="" className="form-label">Manufacturing Date</label>
<input type="date" name="" id="" className="form-control" />

                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Expired Date</label>
<input type="date" name="" id="" className="form-control" />
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
<label htmlFor="" className="form-label">Price</label>
<label htmlFor="" className="form-label"></label>

                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Product Photo</label>
<input type="file" name="" id="" className="form-control" />
                </div>
                <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
<label htmlFor="" className="form-label">Customer Care No</label>
<label htmlFor="" className="form-label">Warranty</label>
<select name="" id="" className="form-control">
    <option value="9645342356">9645342356</option>
    <option value="9876543245">9876543245</option>
    <option value="9945678943">9945678943</option>

</select>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-secondary">SUBMIT</button>

                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default AddProduct