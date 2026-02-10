// City data for dynamic contact form
export interface CityData {
  destination: string;
  cities: string[];
}

export const destinationCities: CityData[] = [
  {
    destination: "Jordan",
    cities: ["Amman", "Aqaba", "Petra", "Wadi Rum", "Dead Sea"]
  },
  {
    destination: "Saudi Arabia",
    cities: ["Riyadh", "Jeddah", "AlUla", "NEOM", "Diriyah"]
  },
  {
    destination: "Egypt",
    cities: ["Cairo", "Pyramids of Giza", "North Coast / El Sahel", "Alexandria", "Luxor"]
  },
  {
    destination: "United Arab Emirates",
    cities: ["Dubai", "Abu Dhabi", "Sharjah"]
  },
  {
    destination: "Dubai",
    cities: ["Downtown Dubai", "Palm Jumeirah", "Dubai Marina", "DIFC", "Jumeirah Beach"]
  },
  {
    destination: "Doha, Qatar",
    cities: ["West Bay", "The Pearl", "Lusail", "Katara Cultural Village", "Souq Waqif"]
  },
  {
    destination: "Thailand",
    cities: ["Bangkok", "Pattaya", "Phi Phi Islands", "Phuket", "Koh Samui"]
  },
  {
    destination: "India",
    cities: ["Mumbai", "New Delhi", "Udaipur", "Goa", "Jaipur", "Bangalore"]
  },
  {
    destination: "Vietnam",
    cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Phu Quoc", "Hoi An"]
  },
  {
    destination: "China",
    cities: ["Shanghai", "Beijing", "Shenzhen", "Hangzhou", "Guangzhou"]
  },
  {
    destination: "United States",
    cities: ["New Jersey", "Chicago", "Houston", "Dallas", "Los Angeles", "California", "Boston"]
  },
  {
    destination: "Canada",
    cities: ["Toronto", "Ottawa", "Vancouver"]
  }
];

export const inquiryTypes = [
  "Corporate Events",
  "Destination Luxury Weddings",
  "Destination Marriage Proposals"
] as const;

export const budgetRanges = [
  "Under $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
  "Not decided yet"
] as const;

export const venueStatuses = [
  "Shortlisted",
  "Booked",
  "Not decided"
] as const;

export const guestCountRanges = [
  "Under 50",
  "50-100",
  "100-200",
  "200-500",
  "500+",
  "Not sure yet"
] as const;
