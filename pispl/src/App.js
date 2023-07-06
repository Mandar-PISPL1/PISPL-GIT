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
import JoinNow from './components/join_now/JoinNow';
import Contacts from './components/contact/Contacts';
import Home from './components/Home-page/Home';
import FreeLancer from './components/freelancer/FreeLancer';
import CareerPage from './components/careerpage/CareerPage';
import Translator from './components/freelancer/translator/Translator';
import Transcriber from './components/freelancer/transcriber/Transcriber';
import VoDubArtist from './components/freelancer/vodubartist/VoDubArtist';
import Interpreter from './components/freelancer/interpreter/Interpreter';
import BlogContent from './components/blogcontent/BlogContent';
import Blog from './components/blogs/Blog';
import axios from 'axios';
import SuccessPage from './components/SuccessPage'


function App() {

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
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
},[currentPage]);

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/our-services/translation-services-india/' element={<Translation/>}/>
          <Route path='/our-services/transcription-services-india/' element={<Transcription/>}/>
          <Route path='/our-services/localization-services/' element={<Localization/>}/>
          <Route path='/our-services/voiceover-services-india/' element={<VoiceOver/>}/>
          <Route path='/our-services/dubbing-services/' element={<Dubbing/>}/>
          <Route path='/our-services/ai-dubbing-services-in-india/' element={<AiDubbing/>}/>
          <Route path='/our-services/video-subtitling-services/' element={<VideoSubtitling/>}/>
          <Route path='/our-services/video-remote-interpretation-services/'element={<Interpretation/>}/>
          <Route path='/our-services/content-writing-services-in-india/' element={<ContentWriting/>}/>
          <Route path='/our-services/video-creation-service-in-india/' element={<VideoCreation/>}/>
          <Route path='/contact-us' element={<Contacts/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/our-clients/' element={<Clients/>}/>
          <Route path='/blog' element={<Blog posts={posts} totalPage={totalPage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>}/>
          <Route path='blog/:id' element={<BlogContent posts={posts}/>}></Route>
          <Route path='/join-us' element={<JoinNow />} />
          <Route path='/freelancer' element={<FreeLancer />} />
          <Route path='/career-opportunities' element={<CareerPage />} />
          <Route path='/freelancer-translator' element={<Translator />} />
          <Route path='/freelancer-transcriber' element={<Transcriber />} />
          <Route path='/freelancer-vo-dubbing-artist' element={<VoDubArtist />} />
          <Route path='/freelancer-interpreter' element={<Interpreter />} />
          <Route path='/thank-you' element={<SuccessPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
