import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import './App.css';
import Translation from './components/Services/translation/Translation';
import Transcription from './components/Services/transcription/Transcription';
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Localization from './components/Services/localization/Localization';
import VoiceOver from './components/Services/voice_over/VoiceOver';
import Dubbing from './components/Services/dubbing/Dubbing';
import AiDubbing from './components/Services/ai_dubbing/AiDubbing';
import VideoSubtitling from './components/Services/video_subtitling/VideoSubtitling';
import Interpretation from './components/Services/interpretation/Interpretation';
import ContentWriting from './components/Services/content_writing/ContentWriting';
import VideoCreation from './components/Services/video_creation/VideoCreation';
import AboutUs from './components/about_us/AboutUs';
import Clients from './components/clients/Clients';
// import Blog from './components/blogs/Blog';
import JoinNow from './components/join_now/JoinNow';
import Contacts from './components/contact/Contacts';
import Home from './components/Home-page/Home';
import FreeLancer from './components/freelancer/FreeLancer';
import CareerPage from './components/careerpage/CareerPage';
import Translator from './components/freelancer/translator/Translator';
import Transcriber from './components/freelancer/transcriber/Transcriber';
import VoDubArtist from './components/freelancer/vodubartist/VoDubArtist';
import Interpreter from './components/freelancer/interpreter/Interpreter';
// import useFetch from './hooks/useFetch';
import BlogContentCopy from './components/blogcontent/BlogContentCopy';
import Blog from './components/blogs/Blog';
import axios from 'axios';
import BlogCopy from './components/blogs/BlogCopy';
import SuccessPage from './components/SuccessPage'


function App() {
  // let {loading,data,error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  // if(loading) return<p>loading....</p>
  // if(error) return <p>Error..</p>
  // console.log('================================')
  // console.log(data)
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalpage] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://parikhinfosolutions.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${currentPage}`
      );
      const publishedPosts = response.data.filter((post) => post.status === 'publish');

      const modifiedPosts = publishedPosts.map((post) => {
        const excerpt = post.excerpt?.rendered || '';
        const truncatedExcerpt = excerpt.substring(0, 150);
        const featuredMedia =
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
        return { ...post, excerpt: truncatedExcerpt, featuredMedia };
      });

      setPosts(modifiedPosts);
      setTotalpage(Number(response.headers['x-wp-total']));
      // console.log("response=",response.headers['x-wp-total']);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
},[currentPage]);

console.log(posts);

// console.log("response=",response.header['x-wp-total']);

  return (
    <>
      

        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/translation' element={<Translation/>}/>
          <Route path='/transcription' element={<Transcription/>}/>
          <Route path='/localization' element={<Localization/>}/>
          <Route path='/voice-over' element={<VoiceOver/>}/>
          <Route path='/dubbing' element={<Dubbing/>}/>
          <Route path='/ai-dubbing' element={<AiDubbing/>}/>
          <Route path='/video-subtitling' element={<VideoSubtitling/>}/>
          <Route path='/interpretation'element={<Interpretation/>}/>
          <Route path='/content-writing' element={<ContentWriting/>}/>
          <Route path='/video-creation' element={<VideoCreation/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/blogs' element={<Blog posts={posts} totalPage={totalPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>}/>
          <Route path='/blogscopy' element={<BlogCopy />}/>
          {/* <Route path='/blogs' element={<Blog blogs={data?data:""}/>} />
          <Route path='/blog/:id' element={<BlogContent blogs={data?data:""}/>} /> */}
          <Route path='blogs/:id' element={<BlogContentCopy posts={posts}/>}></Route>
          <Route path='/join-now' element={<JoinNow />} />
          <Route path='/freelancer' element={<FreeLancer />} />
          <Route path='/career-opportunities' element={<CareerPage />} />
          <Route path='/freelancer-translator' element={<Translator />} />
          <Route path='/freelancer-transcriber' element={<Transcriber />} />
          <Route path='/freelancer-vo-dubbing-artist' element={<VoDubArtist />} />
          <Route path='/freelancer-interpreter' element={<Interpreter />} />
          <Route path='/thank-you' element={<SuccessPage />} />
          {/* <Route path='/' element={<Homepage blogs={data?data:""}/>}></Route> */}
        </Routes>
        <Footer />
        {/* <Form/> */}
   
    </>
  );
}

export default App;
