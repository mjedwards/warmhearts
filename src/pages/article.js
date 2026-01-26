import React, {useEffect, useMemo, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {fetchArticleBySlug} from "../lib/sanityQueries";
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

function getPlainText(block) {
  return block?.children?.map((child) => child.text).join("") || "";
}

function renderBlocks(blocks = []) {
  const elements = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];
    if (!block || block._type !== "block") {
      i += 1;
      continue;
    }

    if (block.listItem) {
      const listType = block.listItem;
      const listItems = [];
      while (
        i < blocks.length &&
        blocks[i]?._type === "block" &&
        blocks[i]?.listItem === listType
      ) {
        listItems.push(blocks[i]);
        i += 1;
      }
      const isNumbered = listType === "number";
      const ListTag = isNumbered ? "ol" : "ul";
      elements.push(
        <ListTag
          key={`${block._key || `list-${i}`}`}
          className={`mb-6 pl-6 text-gray-800 ${isNumbered ? "list-decimal" : "list-disc"}`}
        >
          {listItems.map((item) => (
            <li key={item._key} className="mb-2">
              {getPlainText(item)}
            </li>
          ))}
        </ListTag>
      );
      continue;
    }

    const text = getPlainText(block);
    const key = block._key || `block-${i}`;
    switch (block.style) {
      case "h1":
        elements.push(
          <h1 key={key} className="text-4xl font-bold text-gray-900 mb-4">
            {text}
          </h1>
        );
        break;
      case "h2":
        elements.push(
          <h2 key={key} className="text-3xl font-bold text-gray-900 mb-4">
            {text}
          </h2>
        );
        break;
      case "h3":
        elements.push(
          <h3 key={key} className="text-2xl font-bold text-gray-900 mb-3">
            {text}
          </h3>
        );
        break;
      case "blockquote":
        elements.push(
          <blockquote
            key={key}
            className="border-l-4 border-orange-400 pl-4 italic text-gray-700 mb-6"
          >
            {text}
          </blockquote>
        );
        break;
      default:
        if (text) {
          elements.push(
            <p key={key} className="text-gray-800 leading-relaxed mb-6">
              {text}
            </p>
          );
        }
        break;
    }

    i += 1;
  }

  return elements;
}

export default function ArticlePage() {
  const {slug} = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true);
        const data = await fetchArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadArticle();
    }
  }, [slug]);

  const content = useMemo(() => renderBlocks(article?.body || []), [article]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <p className="mb-4">Article not found.</p>
        <Link to="/articles" className="text-orange-500 font-semibold">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {article.heroImage ? (
        <div className="relative h-[60vh] min-h-[320px]">
          <img
            src={urlFor(article.heroImage).width(1600).height(900).url()}
            alt={article.heroImage.alt || article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-6 pb-12 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {(article.categories || []).map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/20 text-white"
                  >
                    {category.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                {article.title}
              </h1>
              <p className="text-sm uppercase tracking-wide">
                {formatPublishDate(article.publishDate)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-6 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {(article.categories || []).map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/20 text-white"
                >
                  {category.replace(/_/g, " ")}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              {article.title}
            </h1>
            <p className="text-sm uppercase tracking-wide">
              {formatPublishDate(article.publishDate)}
            </p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {article.summary}
        </p>
        <div>{content}</div>
        <div className="mt-12">
          <Link to="/articles" className="text-orange-500 font-semibold">
            ← Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
