import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import blobImage from "../ui/assets/hero/blob.png";
import {fetchArticles} from "../lib/sanityQueries";
import {urlFor} from "../lib/sanity";
import ArticlesEmptyPage from "./articlesEmpty";

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

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await fetchArticles();
        setArticles(data || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  const {featured, list} = useMemo(() => {
    const featuredArticle = articles.find((article) => article.featured);
    const remaining = articles.filter((article) => !article.featured);
    return {featured: featuredArticle, list: remaining};
  }, [articles]);

  if (!loading && !featured && list.length === 0) {
    return <ArticlesEmptyPage />;
  }

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
            ARTICLES
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium max-w-2xl mx-auto">
            Stories from our community, program updates, mentor spotlights, and
            reflections that honor those who paved the way.
          </p>
        </div>
      </div>

      {/* Featured Article */}
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
            Featured Article
          </h2>

          {loading ? (
            <div className="text-center text-gray-500">Loading articles...</div>
          ) : featured ? (
            <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
              {featured.heroImage && (
                <img
                  src={urlFor(featured.heroImage).width(1200).height(600).url()}
                  alt={featured.heroImage.alt || featured.title}
                  className="w-full h-80 object-cover"
                />
              )}
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(featured.categories || []).map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gray-200 text-gray-700"
                    >
                      {category.replace(/_/g, " ")}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {formatPublishDate(featured.publishDate)}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {featured.summary}
                </p>
                <Link
                  to={`/articles/${featured.slug?.current}`}
                  className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold"
                  style={{backgroundColor: "#ec523d"}}
                >
                  Read Article
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No featured article yet. Please check back soon.
            </div>
          )}
        </div>
      </div>

      {/* Article List */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: "#ec523d"}}>
            All Articles
          </h2>

          {loading ? (
            <div className="text-center text-gray-500">Loading articles...</div>
          ) : list.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {list.map((article) => (
                <Link
                  key={article._id}
                  to={`/articles/${article.slug?.current}`}
                  className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  {article.heroImage && (
                    <img
                      src={urlFor(article.heroImage).width(800).height(450).url()}
                      alt={article.heroImage.alt || article.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(article.categories || []).map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gray-200 text-gray-700"
                        >
                          {category.replace(/_/g, " ")}
                        </span>
                      ))}
                    </div>
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
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No articles available yet. Please check back soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
