import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hw7fzqyb", 
  dataset: "production",
  apiVersion: "v1",
  useCdn: true, 
});

export default client;
