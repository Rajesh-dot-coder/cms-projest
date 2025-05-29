import React from "react";

export default function Home(props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative z-10 max-w-screen-sm mx-auto p-8 bg-white bg-opacity-80 rounded-xl shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight text-black-700 drop-shadow">
          welcome to anime CMS
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Start your anime adventure by adding your favorite anime to your own collection.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-pink-600 hover:to-blue-600 focus:outline-none  transition-all duration-200"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
