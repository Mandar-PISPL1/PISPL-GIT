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
// import Form from './components/form/Form';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          {/* <Translation /> */}
          {/* <Transcription/> */}
          {/* <Route path='/translation' element={<Translation />} /> */}
          <Route path='/translation' element={<Translation />} />
          <Route path='/transcription' element={<Transcription />} />
          <Route path='/localiztion' element={<Localization />} />
          <Route path='/voiceover' element={<VoiceOver />} />
          <Route path='/dubbing' element={<Dubbing />} />
          <Route path='/aidubbing' element={<AiDubbing />} />
          <Route path='/videosubtitling' element={<VideoSubtitling />} />
          <Route path='/interpretation' element={<Interpretation />} />
          <Route path='/contentwriting' element={<ContentWriting />} />
          <Route path='/videocreation' element={<VideoCreation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/joinnow' element={<JoinNow />} />
        </Routes>
        <Footer />
        {/* <Form/> */}
      </Router>
    </>
  );
}

export default App;
