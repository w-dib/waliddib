import { createClient } from "next-sanity";

export function formatPublishedDate(publishedAt) {
  const date = new Date(publishedAt);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const socialMediaLink = [
  {
    name: "callmi",
    username: "callmi.com",
    link: "https://callmi.co/ ",
  },
  {
    name: "linkedin",
    username: "wdanieldib",
    link: "https://www.linkedin.com/in/wdanieldib/",
  },
];

export const sanityClient = createClient({
  projectId: "tbcelk7e",
  dataset: "production",
  apiVersion: "2023-06-22",
});
