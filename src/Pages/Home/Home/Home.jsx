import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import GallerySection from "../GallarySection/GallerySection";
import OurServices from "../Services/OurServices";
import ToyCategory from "../ToyCategory/ToyCategory";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ToyCategory></ToyCategory>
            <OurServices></OurServices>
            <CustomerReview></CustomerReview>

        </>
    );
};

export default Home;