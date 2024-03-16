import React, { useState } from 'react';

export default function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showSavedMessage, setShowSavedMessage] = useState(false); // State to control the visibility of the saved message

    const handleClose = () => {
        setIsExpanded(false);
        setShowSavedMessage(false); // Hide the saved message when the card is closed
    };

    const handleSave = (event) => {
        event.stopPropagation(); // Stop the event from propagating to parent elements
        // Here you could also implement the logic to actually save the data
        setShowSavedMessage(true); // Show the saved message
        setTimeout(() => setShowSavedMessage(false), 3000); // Hide the message after 3 seconds
    };

    const toggleExpand = (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to parent elements
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    return (
        <>
            {isExpanded && (
                <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center"
                     onClick={handleClose}>
                    <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto relative space-y-4 border-2 border-black-300"
                         onClick={(e) => e.stopPropagation()}
                         style={{ textAlign: 'left' }}>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold text-gray-800">{props.title}</h1>
                            <div className="text-base">{props.description}</div>
                            <div className="text-base">{props.badgeContent}</div>
                            <div className="font-bold text-gray-600">Fördergebiet: <span className="font-normal">{props.county}</span></div>
                            <a href={props.link} className="text-blue-600 underline">Link zur Förderung</a>
                            <div className="flex space-x-2">
                                <button className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-700 w-2/3"
                                        onClick={(e) => handleSave(e)}>Förderung speichern</button>
                                {showSavedMessage && <span className="self-center text-green-600">erfolgreich gespeichert</span>}
                            </div>
                        </div>
                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-lg min-w-[300px] shadow-md cursor-pointer mb-4 flex flex-col justify-between ml-6"
                 onClick={() => setIsExpanded(true)}>
                <div className="flex flex-col">
                    <h6 className="text-md font-semibold text-gray-800 break-words text-left mb-2">{props.title}</h6>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="mt-3 space-y-2">
                        <div className="font-bold text-gray-600 text-left">Fördergebiet: <span className="font-normal">{props.county}</span></div>
                        <div className="font-bold text-gray-600 text-left">Förderart: <span className="font-normal">{props.category}</span></div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full" onClick={toggleExpand}>mehr</button>
                    </div>
                </div>
            </div>
        </>
    );
}
