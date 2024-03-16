import Card from "../components/Card";
import '../App.css';
import LoadingCard from "./LoadingCards";
import React, { useState, useRef } from 'react';

export default function Search() {

    const [description, setDescription] = useState('');
    const [bundesland, setBundesland] = useState('');
    const [cardsData, setCardsData] = useState([]);
    const [showLoadingCards, setShowLoadingCards] = useState(false);
    const [descriptionError, setDescriptionError] = useState('');
    const [bundeslandError, setBundeslandError] = useState('');
    const searchContainerRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;
        if (description.length < 100) {
            setDescriptionError('Bitte beschreiben Sie Ihr Vorhaben etwas genauer');
            valid = false;
        } else {
            setDescriptionError('');
        }
        if (!bundesland) {
            setBundeslandError('Bitte geben Sie ein Bundesland ein');
            valid = false;
        } else {
            setBundeslandError('');
        }
        if (!valid) {
            return;
        }

        setShowLoadingCards(true);
        searchContainerRef.current.scrollIntoView({ behavior: 'smooth' });

        const userData = {
            description,
            bundesland,
        };
        try {
            const response = await fetch('https://foerderpilot2-ppoh2uujia-uc.a.run.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const responseData = await response.json();
            setCardsData(responseData);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setShowLoadingCards(false);
            if (props.onSearch) {
                props.onSearch();
            }
        }
    };

    return (
        <div className="search-container p-2 md:p-4" ref={searchContainerRef}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="grid card place-items-left">
                        <div className="chat chat-start mb-5">
                            <div className="chat-bubble text-left">Willkommen zum Interaktiven Förderpilot. <br /><br />
                            Durchforsten Sie mit nur einem Klick tausende von Förderungen von Bund, Länder und EU.<br /><br />
                            Beschreiben Sie kurz Ihre Firma und Ihr Vorhaben und geben Sie das Bundesland Ihres Unternehmenssitzes ein, um relevante Förderungen zu sehen.<br /><br />
                            </div>
                        </div>
                        
                        <textarea className="textarea textarea-bordered" placeholder="Beschreiben Sie Ihr Vorhaben" style={{ minHeight: '150px' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        {descriptionError && <div className="text-red-500 text-left mt-3 ml-2">{descriptionError}</div>}
                        <div className="flex flex-row items-center gap-2 mt-5">
                            <input 
                                className="input input-bordered" 
                                style={{ maxWidth: '250px' }}
                                placeholder="Bundesland eingeben" 
                                value={bundesland} 
                                onChange={(e) => setBundesland(e.target.value)}
                            />
                            <button type="submit" className="btn" style={{ maxWidth: '250px' }}>Suche Starten</button>
                        </div>
                        {bundeslandError && <div className="text-red-500 text-left mt-3 ml-2">{bundeslandError}</div>}
                    </div>
                </form>
            </div>
            <section className="card-section flex flex-nowrap overflow-x-auto space-x-4 mb-1">
                {showLoadingCards ? (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                ) : (
                    cardsData.map(item => <Card key={item.id} {...item} />)
                )}
            </section>
        </div>
    );
}
