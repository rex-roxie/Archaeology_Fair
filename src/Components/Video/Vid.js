import './Vid.css'
import video from "./vid.mp4"

function Video() {
    return(
        <div className="video">
            <video loop autoPlay>
                <source
                src={video}
                type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;