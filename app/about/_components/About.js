import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-bgColor text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to CRUD App</h1>
      <p className="text-gray-400 text-lg">
        CRUD App is your efficient data management solution, designed to streamline your interactions
        with data through an intuitive and responsive interface. Built with the powerful Next.js framework,
        our app simplifies creating, reading, updating, and deleting information with user-friendly navigation.
      </p>
      <h2 className="text-xl font-semibold mt-8">Core Features of CRUD App</h2>
      <ul className="list-disc pl-5 text-gray-300">
        <li><strong>Create:</strong> Add new entries easily with user-friendly forms.</li>
        <li><strong>Read:</strong> Access and view your data in a clear and organized manner.</li>
        <li><strong>Update:</strong> Modify your data with straightforward tools.</li>
        <li><strong>Delete:</strong> Remove unwanted data with just a few clicks.</li>
      </ul>
      <p className="text-gray-400 text-lg mt-6">
        Leveraging the capabilities of Next.js, CRUD App offers fast loading times, improved SEO, and a scalable
        architecture, making it ideal for both startups and enterprise-grade applications. Experience seamless
        data operations optimized for performance and security.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Why Choose CRUD App?</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li><strong>User-Centric Design:</strong> Navigate and operate an easy-to-use interface.</li>
          <li><strong>Reliability:</strong> Depend on a platform that ensures data integrity and robust handling.</li>
          <li><strong>Adaptability:</strong> Utilize an application that grows with your needs.</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <p>Discover how CRUD App can transform the way you manage data, making your processes more efficient.</p>
      </div>
    </div>
  );
}

export default About;
