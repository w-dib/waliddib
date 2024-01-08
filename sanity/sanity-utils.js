import { sanityClient } from "@/utils/lib";
import { groq } from "next-sanity";

export async function getSanityClient() {
  return sanityClient.fetch(
    groq`    *[_type == "post"]{title, "name": author->name, _id, "categories": categories[]->title, "slug": slug.current, "mainImage": mainImage.asset->url, publishedAt, body}[]`
  );
}

export async function getBlog(slug) {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug]{title, "name": author->name, _id, "categories": categories[]->title, "slug": slug.current, "mainImage": mainImage.asset->url, publishedAt, body}[0]`,
    { slug }
  );
}

export async function getAllBlogs() {
  return sanityClient.fetch(
    groq`    *[_type == "post"]{title, "name": author->name, _id, "categories": categories[]->title, "slug": slug.current, "mainImage": mainImage.asset->url, publishedAt, body}[]`
  );
}

export async function getRecentBlogs(excludedBlogId) {
  const query = excludedBlogId
    ? groq`*[_type == "post" && _id != $excludedBlogId] | order(publishedAt desc) {
      title,
      "name": author->name,
      _id,
      "categories": categories[]->title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body
    }[0...3]`
    : groq`*[_type == "post" ] | order(publishedAt desc) {
      title,
      "name": author->name,
      _id,
      "categories": categories[]->title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body
    }[0...3]`;
  return sanityClient.fetch(query, {
    excludedBlogId,
  });
}

export async function getBlogByCategory(categories, excludedBlogId) {
  let topBlogs = [];
  for (const category of categories) {
    const result = await sanityClient.fetch(
      groq`*[_type == "post" && $category in categories[]->title && _id != $excludedBlogId] | order(count(categories[]->title) desc, publishedAt desc) {
        title,
        "name": author->name,
        _id,
        "categories": categories[]->title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        publishedAt,
        body
      }[0...3]`,
      { category, excludedBlogId }
    );
    topBlogs = topBlogs.concat(result);
  }

  return topBlogs.slice(0, 3);
}
