import  { useEffect, useState } from 'react'
import "../App.css"
import {  useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
function Home() {
      const [posts, setPosts] = useState(Array(15).fill(null));
    const navigate =useNavigate()
      const loadMorePosts = () => {
        setTimeout(() => {
          setPosts((prevPosts) => [
            ...prevPosts,
            ...Array(3).fill(null),
          ]);
        }, 1500);
      };
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              loadMorePosts();
            }
          },
          { threshold: 1.0 }
        );
    
        const loadingIndicator = document.getElementById("loading-indicator");
        if (loadingIndicator) observer.observe(loadingIndicator);
    
        return () => observer.disconnect();
      }, []);
      const handleLogout=()=>{
        navigate("/")
      }
      return (
        <div>
          <Navbar handleLogout={handleLogout} />
    
          <div id="feed-container" className="feed-container">
            {posts.map((_, index) => (
              <div key={index} className="feed-item">
                <img
                    src={`https://random-image-pepebigotes.vercel.app/api/random-image?time=${Date.now()}&index=${index}`}
                  alt="random"
                  loading="lazy"
                />
                <h2>
                  Post Title <span className="like">❤️ 💬 ➤</span>
                </h2>
              </div>
            ))}
          </div>
    
        <div className="loading" id="loading-indicator">Loading...</div>
        </div>
      );
    
}

export default Home