import React, {useEffect, useState} from "react";
import blobImage from "../ui/assets/hero/blob.png";
import {fetchExternalArticles} from "../lib/sanityQueries";
import {urlFor} from "../lib/sanity";

function formatPublishDate(dateString) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ExternalArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await fetchExternalArticles();
        setArticles(data || []);
      } catch (error) {
        console.error("Error fetching external articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{backgroundColor: "#1f2937"}}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={blobImage}
            alt="Background blob"
            className="w-[600px] h-[500px] md:w-[800px] md:h-[600px] object-contain opacity-90"
          />
        </div>

        <div className="relative z-5 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            IN THE NEWS
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium max-w-2xl mx-auto">
            Coverage and research from partners, publications, and third-party
            voices supporting mentoring and youth development.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 relative">
        <svg
          className="absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          height="100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"
            fill="#1F2937"
          ></path>
        </svg>
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: "#ec523d"}}>
            In the News
          </h2>

          {loading ? (
            <div className="text-center text-gray-500">Loading articles...</div>
          ) : articles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <a
                  key={article._id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  {article.image && (
                    <img
                      src={urlFor(article.image).width(800).height(450).url()}
                      alt={article.image.alt || article.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      {article.source}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {formatPublishDate(article.publishDate)}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No external articles available yet. Please check back soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
