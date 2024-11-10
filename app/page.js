import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl text-center text-white font-bold my-6">Welcome to CRUD App</h1>
      <p className="text-lg text-gray-400 text-center my-4">
        Efficiently manage your data with CRUD App, your ultimate solution for creating,
        reading, updating, and deleting information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="feature-card">
          <h2 className="text-2xl font-semibold">Create</h2>
          <p>Add new entries easily with user-friendly forms that guide you through each step.</p>
        </div>
        <div className="feature-card">
          <h2 className="text-2xl font-semibold">Read</h2>
          <p>Access and view your data in an organized and intuitive manner.</p>
        </div>
        <div className="feature-card">
          <h2 className="text-2xl font-semibold">Update</h2>
          <p>Modify your existing data with straightforward tools designed for efficiency.</p>
        </div>
        <div className="feature-card">
          <h2 className="text-2xl font-semibold">Delete</h2>
          <p>Remove unwanted data quickly and ensure your database is always up-to-date.</p>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10">
        Leverage the power of Next.js for fast loading times, enhanced SEO, and scalable architecture.
        Join us and make your data management tasks a breeze.
      </p>
    </div>
  );
}

export default HomePage;
