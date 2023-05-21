
const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            photo: "https://i.ibb.co/fX8mtFG/profile-pic-3.png",
            review:
                "Amazing toys! My kids love them. The quality is top-notch, and the educational value is excellent. Highly recommended!",
        },
        {
            id: 2,
            name: "Jane Smith",
            photo: "https://i.ibb.co/fX8mtFG/profile-pic-3.png",
            review:
                "I was impressed by the toys. The toys are not only fun but also help my children learn and develop important skills.",
        },
        {
            id: 3,
            name: "Mike Johnson",
            photo: "https://i.ibb.co/fX8mtFG/profile-pic-3.png",
            review:
                "The customer service was exceptional. The team was helpful and provided great recommendations. A great shopping",
        },
    ];
    return (
        <section className="bg-gradient-to-r from-sky-500 via-slate-400-500 to-slate-700 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-8">Client Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-lg shadow-md p-6 text-center"
                        >
                            <p className="text-gray-800 text-lg">{review.review}</p>
                            <div className="avatar mt-3">
                                <div className="w-24 rounded-full">
                                    <img src={review.photo} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;