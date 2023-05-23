import { CiDeliveryTruck } from "react-icons/ci";
import { TiGift } from "react-icons/ti";
import { BiDonateHeart, BiSupport } from "react-icons/bi";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const OurServices = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    const services = [
        {
          id: 1,
          title: "Worldwide Delivery",
          description:
            "We offer fast and reliable worldwide delivery, ensuring your toys reach you no matter where you are.",
          icon: <CiDeliveryTruck className="text-purple-500 text-3xl mb-4" />,
        },
        {
          id: 2,
          title: "Gift Voucher",
          description:
            "Give the gift of education and fun with our gift vouchers. Perfect for birthdays and special occasions.",
          icon: <TiGift className="text-purple-500 text-3xl mb-4" />,
        },
        {
          id: 3,
          title: "Great Savings",
          description:
            "Enjoy great savings on our wide range of educational toys. We offer competitive prices without compromising quality.",
          icon: <BiDonateHeart className="text-purple-500 text-3xl mb-4" />,
        },
        {
          id: 4,
          title: "24-Hour Support",
          description:
            "Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have.",
          icon: <BiSupport className="text-purple-500 text-3xl mb-4" />,
        },
      ];
    return (
        <section data-aos = "fade-down" className="bg-gray-100 py-12 overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default OurServices;