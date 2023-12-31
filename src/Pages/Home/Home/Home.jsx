import PageTitle from "../../../PageTitle";
import CustomerReview from "../CustomerReview/CustomerReview";
import GallerySection from "../GallarySection/GallerySection";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurServices from "../Services/OurServices";
import ToyCategory from "../ToyCategory/ToyCategory";

const Home = () => {
    return (
        <>
            <PageTitle title="EduFun | Home Page" />
            <HomeBanner></HomeBanner>
            <GallerySection></GallerySection>
            <ToyCategory></ToyCategory>
            <OurServices></OurServices>
            <CustomerReview></CustomerReview>

        </>
    );
};

export default Home;