import React from 'react';

const VideoSection = () => {
    return (
        <div className="video-area">
  {/* Video Thumbnail with Play Icon */}
  <div className="video-thumbnail" data-toggle="modal" data-target="#videoModal">
    <img src="https://i.postimg.cc/ZnfwPZbH/video-bg.png" alt="Video Thumbnail" className="img-fluid" />
    <div className="play-icon">▶</div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="videoModalLabel">Video Modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {/* Embedded video will go here */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="iframeClass" src="https://www.youtube.com/embed/QsY8fnvMn6c?si=T3TCzi8mEOJPn94v" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default VideoSection;