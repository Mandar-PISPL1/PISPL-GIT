import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import './App.css';
import Translation from './components/Services/translation/Translation';
import Transcription from './components/Services/transcription/Transcription';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
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
import Blogs from './components/blogs/Blogs';
import JoinNow from './components/join_now/JoinNow';
import Contact from './components/contact/Contact';
import Home from './components/Home-page/Home';
import FreeLancer from './components/freelancer/FreeLancer';
import CareerPage from './components/careerpage/CareerPage';
import Translator from './components/freelancer/translator/Translator';
import Transcriber from './components/freelancer/Transcriber';
import VoDubArtist from './components/freelancer/VoDubArtist';
import Interpreter from './components/freelancer/Interpreter';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/translation' element={<Translation />} />
          <Route path='/transcription' element={<Transcription />} />
          <Route path='/localization' element={<Localization />} />
          <Route path='/voice-over' element={<VoiceOver />} />
          <Route path='/dubbing' element={<Dubbing />} />
          <Route path='/ai-dubbing' element={<AiDubbing />} />
          <Route path='/video-subtitling' element={<VideoSubtitling />} />
          <Route path='/interpretation' element={<Interpretation />} />
          <Route path='/content-writing' element={<ContentWriting />} />
          <Route path='/video-creation' element={<VideoCreation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/join-now' element={<JoinNow />} />
          <Route path='/freelancer' element={<FreeLancer />} />
          <Route path='/career-opportunities' element={<CareerPage />} />
          <Route path='/freelancer-translator' element={<Translator />} />
          <Route path='/freelancer-transcriber' element={<Transcriber />} />
          <Route path='/freelancer-vo-dubbing-artist' element={<VoDubArtist />} />
          <Route path='/freelancer-interpreter' element={<Interpreter />} />
        </Routes>
        <Footer />
        {/* <Form/> */}
      </Router>
    </>
  );
}

export default App;
