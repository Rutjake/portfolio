import { defineQuery } from 'next-sanity'

export const RESUME_QUERY = defineQuery(`*[_type == "resume"][0]{
  experience,
  education,
  certifications[]{
    title,
    issuer,
    "iconUrl": icon.asset->url
  },
    "skills": skills[]->{
    name,
    category,
    "iconUrl": icon.asset->url
  },
}`)