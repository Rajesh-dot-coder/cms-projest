import React from "react";

export default function Home(props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative z-10 max-w-screen-sm mx-auto p-8">
        
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          welcome to anime CMS
        </h1>
        <p className="text-lg text-gray-700 mb-6">
         Start your anime adventure by adding your favorite anime to the list. 
        </p>
      </div>
      <Link></Link>
    </div>
  );
}
