import React from 'react';

const Team = () => {
    return (
       <div className="team-section">
  <div className="container">
    <div className="team-area">
      <h2 className="fs-50 team-title" style={{textTransform: 'uppercase'}}>Meet Out Team Member</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="zoom-img">
            <img className="img-fluid" src="https://i.postimg.cc/qqXzWMhc/member-1.png" alt="img" />
          </div>
          <p className="fs-28 member-name">Jun Hsho</p>
          <p className="fs-18 member-designation">Designer</p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="zoom-img">
            <img className="img-fluid" src="https://i.postimg.cc/PrTLYZ9S/member-2.png" alt="img" />
          </div>
          <p className="fs-28 member-name">Jun Hsho</p>
          <p className="fs-18 member-designation">Metal Worker</p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="zoom-img">
            <img className="img-fluid" src="https://i.postimg.cc/3J1kBNHY/member-3.png" alt="img" />
          </div>
          <p className="fs-28 member-name">Jun Hsho</p>
          <p className="fs-18 member-designation">Furniture Maker</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Team;