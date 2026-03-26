import React from "react";
import UseFetch from "../hooks/UseFetch";
import { useNavigate } from "react-router-dom";

const badgeStyle = {
  base: "inline-block px-2 py-1 rounded text-xs font-semibold mr-2 mb-2",
  mooc: "bg-blue-700 text-blue-100 border border-blue-400",
  training: "bg-green-700 text-green-100 border border-green-400",
};

const FeatCertificates = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const { data: certificates, loading, error } = UseFetch(`${baseURL}/certificates/`);
  const navigate = useNavigate();

  // Filter only featured certificates
  const featuredCertificates = certificates.filter(cert => cert.is_featured);

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
    <div id="certificates" className="bg-black text-white font-mono">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-9 md:py-11">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            <span className="text-purple-400">Featured</span> Certificates
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            A showcase of my achievements, MOOCs, and training certifications.
          </p>
        </div>
        {/* View All Certificates Button */}
        <div className="flex justify-end mb-6 sm:mb-8">
          <button
            onClick={() => navigate('/allcertificates')}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer border border-purple-400 hover:border-purple-300 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base"
          >
            View All Certificates
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {featuredCertificates.length === 0 && (
            <div className="col-span-full text-center text-gray-400">No featured certificates found.</div>
          )}
          {featuredCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group flex flex-col h-full border border-gray-800"
            >
              {/* Certificate Image */}
              {cert.image_url && (
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Certificate Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.is_mooc && (
                    <h5 className="text-purple-400"><span>#</span>Mooc</h5>
                  )}
                  {cert.is_training && (
                    <h1 className="text-purple-400"><span>#</span>Training</h1>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {cert.issuing_organization}
                </p>

                {/* Action Button */}
                {cert.certificate_url && (
                  <a
                    href={cert.certificate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base mt-auto"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatCertificates;