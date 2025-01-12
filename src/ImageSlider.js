import React, { useEffect, useState, useCallback } from "react";

const ImageSlider = () => {
    const [activeImageIndex, setActiveImage] = useState(0);

    const handlePreviousButton = useCallback(() => {
        setActiveImage((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }, []);

    const handleNextButton = useCallback(() => {
        setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextButton();
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [handleNextButton]);

    return (
        <div className="flex justify-center m-20px">
            <button className="font-bold p-4 m-10" onClick={handlePreviousButton}>
                Previous
            </button>
            {images.map((url, i) => (
                <img
                    key={url}
                    src={url}
                    alt="Wallpaper"
                    className={`w-[650px] h-[300px] object-contain ${
                        activeImageIndex === i ? "block" : "hidden"
                    }`}
                />
            ))}
            <button className="font-bold p-4 m-10" onClick={handleNextButton}>
                Next
            </button>
        </div>
    );
};

export default ImageSlider;
