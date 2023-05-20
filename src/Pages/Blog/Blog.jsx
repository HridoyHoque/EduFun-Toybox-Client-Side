
const Blog = () => {
    const blogData = [
        {
          id: 1,
          question: 'What are the benefits of educational toys?',
          answer: 'Educational toys can enhance cognitive development, improve problem-solving skills, foster creativity, and promote social interaction among children.',
        },
        {
          id: 2,
          question: 'How to choose the right educational toys for my child?',
          answer: 'When choosing educational toys, consider your child\'s age, interests, and developmental stage. Look for toys that encourage learning, are age-appropriate, and align with your child\'s interests and abilities.',
        },
        {
          id: 3,
          question: 'Are there educational toys for different age groups?',
          answer: 'Yes, there are educational toys available for various age groups, from infants to teenagers. Each age group has different developmental needs, and educational toys are designed to cater to those needs.',
        },
        {
          id: 4,
          question: 'Where can I find educational toys?',
          answer: 'You can find educational toys at specialty toy stores, online marketplaces, and even some department stores. Look for reputable brands and read reviews to ensure the quality and educational value of the toys.',
        },
      ];
    return (
        <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{blog.question}</h3>
              <p className="text-gray-600">{blog.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Blog;