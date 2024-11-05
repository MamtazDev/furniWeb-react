import React from 'react';

const HappySection = () => {
    return (
     <div className="happy-section">
  <div className="container">
    <div className="happy-area">
      <h2 className="fs-50 happy-title" style={{textTransform: 'uppercase'}}>Making home a happy place</h2>
      <p className="fs-22 happy-text">Decorate your home with items that bring
        you joy and have personal significance.<br className="d-none d-lg-block" />
        Surround yourself with things that make you happy,
        whether it's family photos, artwork,<br className="d-none d-lg-block" />
        or sentimental objects.</p>
      {/* Video Start */}
      <div className="video-area">
        {/* Video Thumbnail with Play Icon */}
        <div className="video-thumbnail" data-bs-toggle="modal" data-bs-target="#videoModal">
          <img className="img-fluid w-100" src="https://i.postimg.cc/Kj4yMBCs/pro-dtls-vid-img.png" alt="Video Thumbnail" />
          <div className="play-icon">▶</div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="videoModalLabel">Video Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {/* Embedded video will go here */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="iframeClass" src="https://www.youtube.com/embed/QsY8fnvMn6c?si=T3TCzi8mEOJPn94v" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal End */}
      </div>
      {/* Video End */}
      <div className="product-dtls-img-sec">
        <div className="row">
          <div className="d-none d-lg-block col-lg-6">
            <div className="zoom-img">
              <img className="img-fluid" src="https://i.postimg.cc/wBcH86hF/pro-dtls-img-1.png" alt="img" />
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <div className="zoom-img">
              <img className="img-fluid" src="https://i.postimg.cc/vZFpQJ8K/pro-dtls-img-2.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default HappySection;