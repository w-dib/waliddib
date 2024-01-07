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

export async function getRecentBlogs() {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      title,
      "name": author->name,
      _id,
      "categories": categories[]->title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body
    }[0...3]`
  );
}

export async function getBlogByCategory(categories, excludedBlogId) {
  return sanityClient.fetch(
    groq`*[_type == "post" && $categories in categories[]->title && _id != $excludedBlogId] | order(publishedAt desc) {
      title,
      "name": author->name,
      _id,
      "categories": categories[]->title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body
    }[]`,
    { categories, excludedBlogId }
  );
}
