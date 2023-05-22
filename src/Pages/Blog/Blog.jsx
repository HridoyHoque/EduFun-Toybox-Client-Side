import PageTitle from "../../PageTitle";

const Blog = () => {
    const blogData = [
        {
          id: 1,
          question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
          answer: 'An access token is a credential used to access protected resources on behalf of a user. It is usually short-lived and provides authorization. A refresh token is a long-lived token used to obtain new access tokens. Access tokens are typically stored in memory or a secure cookie, while refresh tokens should be securely stored, such as in an HTTP-only cookie or local storage.',
        },
        {
          id: 2,
          question: 'Compare SQL and NoSQL databases?',
          answer: 'SQL databases are structured, use tables and follow a fixed schema. NoSQL databases are unstructured, use collections or documents, and have flexible schemas. SQL databases provide strong consistency and support complex queries, while NoSQL databases offer scalability, high performance, and flexibility in data modeling.',
        },
        {
          id: 3,
          question: 'What is express js? What is Nest JS?',
          answer: 'Express.js is a lightweight web application framework for Node.js, while Nest.js is a progressive Node.js framework built on top of Express.js with a focus on scalability, modularity, and developer productivity.',
        },
        {
          id: 4,
          question: 'What is MongoDB aggregate and how does it work?',
          answer: 'MongoDB s aggregate is a powerful feature that allows you to perform advanced data processing operations on the documents in a collection. It uses a pipeline-based approach where you can define stages to filter, transform, and group data, making it flexible and efficient for complex data manipulations.',
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
        <PageTitle title="EduFun | Blogs"/>
      </div>
    );
};

export default Blog;