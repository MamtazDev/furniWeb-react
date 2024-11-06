import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
    return ( 
   <div className="container">
  <section className="contact-wrap">
    <h2 className="fs-50 form-title">{`Let’s Talk`}</h2>
    <form action="#" className="contact-form">
      <div className="row">
        <div className="col-sm-6">
          <div className="input-block">
            {/* <label  class=".fs-24-thin">First Name</label> */}
            <input required className="form-control" type="text" placeholder="First Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="input-block">
            <input required className="form-control" type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="input-block">
            <input required className="form-control" type="email" placeholder="Email Address" />
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="input-block textarea">
          <textarea rows={3} required className="form-control" placeholder="Message" defaultValue={""} />
        </div>
      </div>
      <div className="messege-button">
        <Link to="#">
          <button className="button btn_light ">
            Send message</button></Link>
      </div>
    </form>
  </section>
</div>
    );
};

export default Form;