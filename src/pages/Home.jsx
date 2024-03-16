import '../App.css'
import Chatbot from '../components/Chatbot'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import LoadingCard from '../components/LoadingCards'
import React, { useState } from 'react';
import CookieBanner from '../components/CookieBanner'
import posthog from 'posthog-js' 

function Home() {

  const imageUrl1 = "https://i.ibb.co/DVfBD4z/DALL-E-2024-03-04-14-58-removebg-preview.png";
  const imageUrl2 = "https://i.ibb.co/GxY16QF/9026795-number-circle-one-thin-icon.png"; 
  const imageUrl3 = "https://i.ibb.co/qxqL1LC/9026747-number-circle-two-thin-icon.png"; 
  const imageUrl4 = "https://i.ibb.co/gRBp2mN/9026820-number-circle-three-thin-icon.png"; 
  const imageUrl5 = "https://i.ibb.co/b2p8jB2/9026794-number-circle-four-thin-icon.png"; 
 
  
  return (
    <div>
    <Navbar />
      <div className="min-h-screen bg-custom">
          <div className="hero bg-custom">
              <div className="hero-content">
                  <div className="mt-8">
                      <h1 className="text-5xl font-bold">Der intuitive Fördernavigator</h1>
                      <p className="py-1 max-w-md mx-auto text-center">Durchsuche über 2800 öffentliche Förderungen. Finde die Föderung, die für dein Unternehmen passt</p>
                  </div>
              </div>
          </div>
           
          <div className="chatbot-container mx-auto px-4 pb-4">
          <Search />
          </div>
      </div>
      <div className="content-container mx-auto px-9">
      <h2 className="text-3xl font-semibold text-left mt-10">Wie funktioniert`s?</h2>
     <div className="pl-2 md:p-4">
        {/* timeline*/}
                <ul className="timeline timeline-vertical lg:timeline-horizontal">
                    <li>
                        <div className="timeline-start timeline-box w-[250px]">
                            <h5 className="font-semibold mb-2">Vorhaben Beschreiben</h5>
                        <p className="max-w-xs ">
                       Beschreiben Sie kurz Ihr Unternehmen und Ihr geplantes Vorhaben. Je konkreter desto besser.
                        </p>
                        </div>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box w-[250px]">
                        <h5 className="font-semibold mb-2">Vorschläge erhalten</h5>
                        <p className="max-w-xs">
                        Wir schlagen Ihnen Förderungen vor, die am besten zu Ihrem Vorhaben passen. 
                        </p>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-start timeline-box">
                        <h5 className="font-semibold mb-2">Antrag vorbereiten</h5>
                        <p className="max-w-xs text w-[250px]">
                        Auf Wunsch stellen wir den Kontakt zu erfahrenen Fördermittelberatern her, die Ihnen mit der Antragsstellung helfen.
                        </p>
                        </div>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box w-[250px]">
                        <h5 className="font-semibold mb-2">Förderung beantragen</h5>
                        <p className="max-w-xs">
                        Nachdem Sie sich für eine Förderung entschieden haben können Sie einfach den Status und Fortschritt den Antrags in Ihrem Dashboard verfolgen.
                        </p>
                        </div>
                        <hr/>
                    </li>
                </ul>
        {/* <img src={imageUrl1} alt="Description of the image" className="block w-auto h-[6rem] rotate-45"/>*/}
  </div> 
    <div className="container mx-auto mb-10 mt-10"> 
        <div>
                    <h1 className="text-3xl font-semibold text-left mb-6 mt-10">Häufige Antworten</h1> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Wer ist berechtigt, Fördermittel zu beantragen?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Welche Arten von Förderungen gibt es?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Bekomme ich Hilfe bei der Antragstellung?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Wieso muss ich mich einloggen?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Wie laufen die Antragsverfahren ab?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
                    <details className="collapse bg-base-200 max-w-3xl mt-5 mb-5 text-left">
                        <summary className="collapse-title text-lg font-medium">Wie viel Zeit muss ich bis zum Förderstart einplanen?</summary>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </details> 
        </div>
    </div>
    {posthog.has_opted_out_capturing() // new
      ||posthog.has_opted_in_capturing() 
        ? null 
        : <CookieBanner /> 
      }
</div>

<Footer />
</div>
  );
}

export default Home;
