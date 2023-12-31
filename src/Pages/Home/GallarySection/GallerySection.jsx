import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const GallerySection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const images = [
        { id: 1, src: 'https://i.ibb.co/D7LbHtv/toys.png', alt: 'Image 1' },
        { id: 2, src: 'https://i.ibb.co/J297Sx1/gallary1.png', alt: 'Image 2' },
        { id: 3, src: 'https://i.ibb.co/JHsYXjY/gallary2.png', alt: 'Image 3' },
        { id: 4, src: 'https://i.ibb.co/x7KrHSt/child-2205449.jpg', alt: 'Image 4' },
        { id: 5, src: 'https://i.ibb.co/N639HdV/galar3.png', alt: 'Image 5' },
        { id: 6, src: 'https://i.ibb.co/09RdMs7/gallary5.png', alt: 'Image 6' },
        // Add more images as needed
    ];

    return (
        <section data-aos="fade-down" className="overflow-x-hidden overflow-y-hidden py-10 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
