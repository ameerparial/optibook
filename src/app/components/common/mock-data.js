export const weekDays = [
  { key: "mon", label: "Monday, Jan 13" },
  { key: "tue", label: "Tuesday, Jan 14" },
  { key: "wed", label: "Wednesday, Jan 15" },
  { key: "thu", label: "Thursday, Jan 16" },
  { key: "fri", label: "Friday, Jan 17" },
  { key: "sat", label: "Saturday, Jan 18" },
];

export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const appointments = {
  mon: {
    "9:00 AM": { patient: "John Smith", type: "Standard Eye Test" },
    "11:00 AM": { patient: "John Smith", type: "Standard Eye Test" },
    "12:00 PM": { type: "Lunch Break", isBreak: true },
    "2:00 PM": { patient: "John Smith", type: "Standard Eye Test" },
    "3:00 PM": { patient: "John Smith", type: "Standard Eye Test" },
  },
  tue: {
    "9:00 AM": { patient: "Ameer Hamza", type: "Standard Eye Test" },
    "11:00 AM": { patient: "John Smith", type: "Standard Eye Test" },
    "11:00 PM": { type: "Lunch Break", isBreak: true },
  },
};

export const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    age: 36,
    phone: "+44 7700 900123",
    lastVisit: "Nov 10, 2025",
    visits: 12,
    imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=patient",
    type: "Regular",
  },
  {
    id: 2,
    name: "Ameer Hamza",
    email: "sarah.j@email.com",
    age: 36,
    phone: "+44 7700 900123",
    lastVisit: "Nov 10, 2025",
    visits: 12,
    imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=patient",
    type: "New",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    age: 36,
    phone: "+44 7700 900123",
    lastVisit: "Nov 10, 2025",
    visits: 12,
    imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=patient",
    type: "Regular",
  },
];
