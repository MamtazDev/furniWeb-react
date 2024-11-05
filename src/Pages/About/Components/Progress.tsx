import React from 'react';

const Progress = () => {
    return (
<div className="progress-section">
  <div className="container">
    <div className="progress-area">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <h3 className="fs-50" style={{textTransform: 'uppercase'}}>Our Core Divisions</h3>
          <p className="fs-18-thin progress-text">Living Edge’s residential collection features distinctive home <br className="d-none d-lg-block" />
            furniture, sourced globally. Accommodating a range of interior <br className="d-none d-lg-block" />
            styles but curated with the Australian lifestyle in mind, it’s the <br className="d-none d-lg-block" /> 
            principal source for those looking to create a distinguished home.</p>
        </div>
        <div className="col-lg-5">
          {/* progress bar start */}
          <div className="progress-parent">
            {/* Progress Bar 1 */}
            <div className="heading-parent">
              <p className="fs-24 progress_heading">Furniture</p>
              <p className="fs-24 progress_heading">60%</p>
            </div>
            <div className="progress">
              <div className="progress-bar rounded progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '60%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            {/* Progress Bar 2 */}
            <div className="heading-parent">
              <p className="fs-24 progress_heading">Crafts</p>
              <p className="fs-24 progress_heading">90%</p>
            </div>
            <div className="progress">
              <div className="progress-bar rounded progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '90%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            {/* Progress Bar 3 */}
            <div className="heading-parent">
              <p className="fs-24 progress_heading">Handmade</p>
              <p className="fs-24 progress_heading">85%</p>
            </div>
            <div className="progress">
              <div className="progress-bar rounded progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>                    
          {/* progress bar end */}
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Progress;