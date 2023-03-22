import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
        <div className="lg:col-span-1 w-full">
          <div className="lg:p-0 p-5">
            <h1 className="lg:text-6xl text-4xl font-bold max-w-lg ">
              Cultivating Ideas for Growth
            </h1>
            <p className="text-gray-600 my-3 max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est odio
              assumenda tempora voluptas.
            </p>

            <button className="bg-emerald-600 px-6 py-2 rounded-tr-2xl rounded-bl-2xl text-white shadow-md hover:bg-emerald-700 duration-300 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 w-full">
          <div className="flex items-end justify-center gap-5">
            <Image
              src="https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="farmer"
              height="400"
              width="300"
              className="border-8 border-white rounded-tr-3xl rounded-bl-3xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=343&q=80"
              alt="farmer"
              height="400"
              width="300"
              className="border-8 border-white rounded-tr-3xl rounded-bl-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
