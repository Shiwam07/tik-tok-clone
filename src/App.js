import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db, Video } from "./Components";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videoData = async () => {
      const videoCollection = collection(db, "videos");
      const videoSnapshot = await getDocs(videoCollection);
      const videoList = videoSnapshot.docs.map((doc) => doc.data());
      setVideos(videoList);
    };
    videoData();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }, i) => (
            <Video
              key={i}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
