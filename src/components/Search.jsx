import Card from "../components/Card";
import '../App.css';
import LoadingCard from "./LoadingCards";
import React, { useState, useRef } from 'react';

export default function Search() {

    const [description, setDescription] = useState('');
    const [bundesland, setBundesland] = useState('Bundesland auswählen');
    const [cardsData, setCardsData] = useState([]);
    const [showLoadingCards, setShowLoadingCards] = useState(false);
    const [descriptionError, setDescriptionError] = useState('');
    const [bundeslandError, setBundeslandError] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const searchContainerRef = useRef(null);

    const bundeslaender = ["Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"];

    const handleBundeslandSelect = (bl) => {
        setBundesland(bl);
        setShowDropdown(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;
        if (description.length < 30) {
            setDescriptionError('Bitte beschreiben Sie Ihr Vorhaben etwas genauer');
            valid = false;
        } else {
            setDescriptionError('');
        }
        if (bundesland === 'Bundesland auswählen') {
            setBundeslandError('Bitte wählen Sie ein Bundesland aus');
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
            <div className="grid card place-items-left">
                    <input 
                        type="text" 
                        className="input input-bordered" 
                        placeholder="Beschreiben Sie kurz Ihr Unternehmen und das Vorhaben, für das Sie eine Förderung suchen." 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                        style={{ height: '60px' }}
                    />
                    {descriptionError && <div className="text-red-500 text-left mt-3 ml-2">{descriptionError}</div>}

                    <div className="flex flex-row items-center gap-2 mt-5 relative">
                        <div className="relative flex flex-col items-start">
                            <button type="button" className="btn" onClick={() => setShowDropdown(!showDropdown)}>{bundesland}</button>
                            {showDropdown && (
                                <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-md z-50 rounded-lg overflow-auto max-h-60">
                                    {bundeslaender.map(bl => (
                                        <div key={bl} onClick={() => handleBundeslandSelect(bl)} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">{bl}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button type="button" className="btn" style={{ maxWidth: '250px' }} onClick={handleSubmit}>Suche Starten</button>
                    </div>
                    {bundeslandError && <div className="text-red-500 text-left mt-3 ml-2">{bundeslandError}</div>}
                </div>


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
