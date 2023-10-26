import YouTube from 'react-youtube';
import './YouTubeVideo.css'

const YouTubeVideo = () => {
    return (
        <div className='yVideo flex justify-center ...'>
            <YouTube className='border-8 border-green-300 p-4 ' videoId="OLlYdKUJQDY" />
        </div>
    );
};

export default YouTubeVideo;