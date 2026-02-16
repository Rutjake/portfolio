import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function getResumeData() {
  const query = `*[_type == "resume"][0]{
    experience,
    education,
    certifications[]{
      title,
      issuer,
      "iconUrl": icon.asset->url
    }
  }`

  return await client.fetch(query, {}, { next: { revalidate: 0 } })
}