import { createClient, groq } from "next-sanity";

export async function getSanityClient() {
  const client = createClient({
    projectId: "tbcelk7e",
    dataset: "production",
    apiVersion: "2023-06-22",
  });

  return client.fetch(
    groq`    *[_type == "post"]{title, "name": author->name, _id, "categories": categories[]->title, "slug": slug.current, "mainImage": mainImage.asset->url, publishedAt, body}[0...2]`
  );
}
