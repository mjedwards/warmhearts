import { client } from './sanity';

/**
 * Fetch all events from Sanity
 * @param {string} filter - Optional filter ('upcoming' | 'past' | 'all')
 * @returns {Promise<Array>} Array of event objects
 */
export async function fetchEvents(filter = 'all') {
  let query = '*[_type == "event"';

  if (filter === 'upcoming') {
    query += ' && eventStatus == "upcoming"';
  } else if (filter === 'past') {
    query += ' && eventStatus == "past"';
  }

  query += '] | order(eventDate desc)';

  const events = await client.fetch(query);
  return events;
}

/**
 * Fetch a single event by slug
 * @param {string} slug - Event slug
 * @returns {Promise<Object>} Event object
 */
export async function fetchEventBySlug(slug) {
  const query = `*[_type == "event" && slug.current == "${slug}"][0]`;
  const event = await client.fetch(query);
  return event;
}

/**
 * Fetch event images for a specific event
 * @param {string} eventId - Event document ID
 * @returns {Promise<Array>} Array of event image objects
 */
export async function fetchEventImages(eventId) {
  const query = `*[_type == "eventImages" && event._ref == "${eventId}"]`;
  const images = await client.fetch(query);
  return images;
}

/**
 * Fetch all event images with event references populated
 * @returns {Promise<Array>} Array of event image objects with event data
 */
export async function fetchAllEventImages() {
  const query = `*[_type == "eventImages"]{
    ...,
    event->{
      _id,
      eventTitle,
      slug,
      eventDate
    }
  }`;
  const images = await client.fetch(query);
  return images;
}

/**
 * Fetch all team members
 * @returns {Promise<Array>} Array of team member objects
 */
export async function fetchTeamMembers() {
  const query = '*[_type == "teamMember"] | order(order asc)';
  const teamMembers = await client.fetch(query);
  return teamMembers;
}

/**
 * Fetch all active sponsors
 * @returns {Promise<Array>} Array of sponsor objects
 */
export async function fetchSponsors() {
  const query = '*[_type == "sponsor" && active == true] | order(order asc)';
  const sponsors = await client.fetch(query);
  return sponsors;
}

/**
 * Fetch gallery images
 * @param {string} category - Optional category filter ('carousel' | 'gallery' | 'both')
 * @returns {Promise<Array>} Array of gallery image objects
 */
export async function fetchGalleryImages(category = null) {
  let query = '*[_type == "galleryImage"';

  if (category) {
    query += ` && (category == "${category}" || category == "both")`;
  }

  query += '] | order(featured desc, order asc)';

  const images = await client.fetch(query);
  return images;
}

/**
 * Fetch carousel images with optional event references
 * @returns {Promise<Array>} Array of carousel image objects
 */
export async function fetchCarouselImages() {
  const query = `*[_type == "galleryImage" && (category == "carousel" || category == "both")]{
    ...,
    event->{
      _id,
      eventTitle,
      slug
    }
  } | order(featured desc, order asc)`;

  const images = await client.fetch(query);
  return images;
}
