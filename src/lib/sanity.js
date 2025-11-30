import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Create Sanity client
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '0bgo1hrp',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true, // Enable CDN for faster response times
  apiVersion: '2025-01-01', // Use current date for API version
});

// Image URL builder
const builder = createImageUrlBuilder(client);

/**
 * Generate image URL from Sanity image source
 * @param {Object} source - Sanity image object
 * @returns {Object} URL builder instance
 */
export function urlFor(source) {
  return builder.image(source);
}
