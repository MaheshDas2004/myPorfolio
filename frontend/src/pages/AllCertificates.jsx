import React, { useState } from 'react';
import { ExternalLink, Github, X, Play } from 'lucide-react';
import UseFetch from '../hooks/UseFetch';

const AllCertificates = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const {data:certificates, loading ,error}=UseFetch(`${baseURL}/certificates/`);
  

     if (loading) return (
       <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
         <p className="text-lg">Loading...</p>
       </div>
     );
     if (error) return (
       <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
         <p className="text-red-400 text-lg">Error: {error}</p>
       </div>
     );

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            <span className="text-gray-400">/</span>trainings-and-certifications
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">A comprehensive list of all my certifications, including MOOCs and professional training programs.</p>
        </div>

        {/* Complete Apps Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            <span className="text-purple-400">#</span>Trainings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certificates.filter((certificate)=>certificate.is_training).map((certificate,index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={certificate.image_url}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {certificate.issuing_organization}
                  </p>


                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    <a
                      href={certificate.certificate_url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base mt-auto"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            <span className="text-purple-400">#</span>MOOCs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certificates.filter((certificate)=>certificate.is_mooc).map((certificate,index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={certificate.image_url}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {certificate.issuing_organization}
                  </p>


                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    <a
                      href={certificate.certificate_url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base mt-auto"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;