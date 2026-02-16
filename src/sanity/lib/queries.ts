import { defineQuery } from 'next-sanity'

export const RESUME_QUERY = defineQuery(`*[_type == "resume"][0]{
  "experience": select($lang == "fi" => experienceFi, experienceEn),
  "education": select($lang == "fi" => educationFi, educationEn),
  "skills": skills[]->{
    name,
    "iconUrl": icon.asset->url
  },
  "certifications": certifications[]{
    "title": select($lang == "fi" => titleFi, titleEn),
    issuer,
    "iconUrl": icon.asset->url
  }
}`)