export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Eugen Albrecht',
    location: 'Jacksonville, FL',
    rating: 5,
    text: 'Tolga and his team did an incredible job on our wooden roof structure. From the initial consultation to the final walk-through, the professionalism and attention to detail were remarkable. The work was completed on schedule, and the craftsmanship exceeded our expectations. You can tell this team takes real pride in what they do. I would recommend APR Handyman to anyone in Jacksonville without hesitation.',
    project: 'Wooden Roof Structure Repair & Finishing',
    date: '2024',
  },
  {
    name: 'Max Viktor',
    location: 'Ponte Vedra, FL',
    rating: 5,
    text: 'We hired APR Handyman for a full house remodel and could not be more pleased with the results. Tolga was involved personally throughout the entire project, which made a huge difference. Communication was excellent — we always knew exactly what was happening and what was coming next. The German precision approach is real: everything is measured twice, done once, and done right. Our home looks absolutely beautiful, and we\'ve received so many compliments from neighbors and visitors.',
    project: 'Full House Remodel',
    date: '2024',
  },
  {
    name: 'Sarah Hoffman',
    location: 'Fleming Island, FL',
    rating: 5,
    text: 'I called APR Handyman after another contractor left a bathroom renovation incomplete. Tolga came in, assessed the situation honestly, and gave me a fair price to finish and fix what was done wrong. The finished bathroom is gorgeous — exactly what I originally envisioned. Honest, skilled, and professional. This is exactly the kind of contractor you want on your side.',
    project: 'Bathroom Renovation Completion',
    date: '2023',
  },
  {
    name: 'James Thornton',
    location: 'Mandarin, Jacksonville',
    rating: 5,
    text: 'APR Handyman handled our exterior painting and deck restoration last fall. The prep work alone told us this was a different level of service — they spent an entire day just getting the surfaces ready before a single brush of paint touched the walls. The result is a home that looks brand new. Tolga clearly cares about doing things the right way, not the fast way.',
    project: 'Exterior Painting & Deck Restoration',
    date: '2023',
  },
  {
    name: 'Linda Carver',
    location: 'San Marco, Jacksonville',
    rating: 5,
    text: 'We\'ve used APR Handyman three times now for various projects around our 1950s San Marco bungalow. Each time, Tolga finds the right solution and executes it beautifully. Most recently, he installed custom built-in bookshelves in our living room that look like they\'ve been there since the house was built. That\'s the hallmark of great carpentry — it looks completely natural. We wouldn\'t use anyone else.',
    project: 'Custom Built-in Bookshelves',
    date: '2024',
  },
  {
    name: 'Robert & Diana Marsh',
    location: 'Riverside, Jacksonville',
    rating: 5,
    text: 'Outstanding kitchen remodel from start to finish. We were nervous about the disruption to our daily life, but Tolga kept the job site organized, communicated the daily schedule clearly, and finished ahead of the projected timeline. The kitchen cabinets and countertops are exactly what we wanted, and the tile work is flawless. Worth every penny.',
    project: 'Kitchen Remodel',
    date: '2024',
  },
];
