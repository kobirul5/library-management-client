import React from 'react';
import { FiBookOpen, FiArrowRight  } from 'react-icons/fi';

const HeroBanner: React.FC = () => {
  return (
    <div className="hero container mx-auto mt-12 ">
      <div className="flex justify-between  px-5 gap-10 flex-row-reverse">
        {/* Banner Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="w-full rounded-lg shadow-2xl"
            alt="Library books"
          />
        </div>

        {/* Banner Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold ">
            Discover Your Next <span className="text-accent">Favorite Book</span>
          </h1>
          <p className="py-6  text-lg">
            Explore our vast collection of books from all genres. Whether you're looking for adventure,
            knowledge, or inspiration, we've got you covered.
          </p>

          {/* Search Bar */}


          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-20">
            <button className="btn btn-accent">
              Browse Collection <FiArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="btn btn-outline btn-neutral  hover: flex items-center">
              <FiBookOpen className="h-5 w-5 mr-2" />
              Latest Arrivals
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
