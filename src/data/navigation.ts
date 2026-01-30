export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Personal Injury',
    href: '/personal-injury/',
    children: [
      { label: 'Car Accidents', href: '/car-accidents/' },
      { label: 'Truck Accidents', href: '/truck-accidents/' },
      { label: 'Motorcycle Accidents', href: '/motorcycle-accidents/' },
      { label: 'Bicycle Accidents', href: '/bicycle-accidents/' },
      { label: 'Pedestrian Accidents', href: '/pedestrian-accidents/' },
      { label: 'Dog Bites', href: '/dog-bites/' },
      { label: 'Medical Malpractice', href: '/medical-malpractice/' },
      { label: 'Dental Malpractice', href: '/dental-malpractice/' },
      { label: 'Workers\' Compensation', href: '/workers-compensation/' },
      { label: 'Slip and Fall', href: '/slip-and-fall/' },
      { label: 'Wrongful Death', href: '/wrongful-death/' },
      { label: 'Product Liability', href: '/product-liability/' },
      { label: 'Nursing Home Neglect', href: '/nursing-home-neglect/' },
      { label: 'Workplace Accidents', href: '/workplace-accidents/' },
    ]
  },
  {
    label: 'Criminal Defense',
    href: '/criminal-defense/',
    children: [
      { label: 'DUI/DWI', href: '/dui/' },
      { label: 'Drug Crimes', href: '/drug-crimes/' },
      { label: 'Traffic Offenses', href: '/traffic-offenses/' },
      { label: 'Assault', href: '/assault/' },
      { label: 'Domestic Violence', href: '/domestic-violence/' },
      { label: 'Theft Offenses', href: '/theft-offenses/' },
    ]
  },
  {
    label: 'Areas Served',
    href: '/areas-served/',
    children: [
      { label: 'Baltimore County', href: '/baltimore-county/' },
      { label: 'Howard County', href: '/howard-county/' },
      { label: 'Montgomery County', href: '/montgomery-county/' },
      { label: 'Anne Arundel County', href: '/anne-arundel-county/' },
      { label: 'Prince George\'s County', href: '/prince-georges-county/' },
      { label: 'Harford County', href: '/harford-county/' },
      { label: 'Carroll County', href: '/carroll-county/' },
      { label: 'Frederick County', href: '/frederick-county/' },
      { label: 'Pikesville', href: '/pikesville/' },
      { label: 'View All Areas', href: '/areas-served/' },
    ]
  },
  {
    label: 'About',
    href: '/about-us/',
    children: [
      { label: 'About Our Firm', href: '/about-us/' },
      { label: 'Case Results', href: '/case-results/' },
      { label: 'Client Reviews', href: '/reviews/' },
    ]
  },
  {
    label: 'Blog',
    href: '/blog/'
  }
];

export const footerNavigation = {
  practiceAreas: [
    { label: 'Personal Injury', href: '/personal-injury/' },
    { label: 'Car Accidents', href: '/car-accidents/' },
    { label: 'Truck Accidents', href: '/truck-accidents/' },
    { label: 'Medical Malpractice', href: '/medical-malpractice/' },
    { label: 'Workers\' Compensation', href: '/workers-compensation/' },
    { label: 'Criminal Defense', href: '/criminal-defense/' },
    { label: 'DUI Defense', href: '/dui/' },
  ],
  locations: [
    { label: 'Pikesville', href: '/pikesville/' },
    { label: 'Baltimore County', href: '/baltimore-county/' },
    { label: 'Howard County', href: '/howard-county/' },
    { label: 'Montgomery County', href: '/montgomery-county/' },
    { label: 'Anne Arundel County', href: '/anne-arundel-county/' },
    { label: 'All Locations', href: '/areas-served/' },
  ],
  company: [
    { label: 'About Us', href: '/about-us/' },
    { label: 'Case Results', href: '/case-results/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact-us/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms of Service', href: '/terms-of-service/' },
    { label: 'Disclaimer', href: '/disclaimer/' },
  ]
};

export const contactInfo = {
  phone: '(410) 484-0400',
  phoneRaw: '+14104840400',
  email: 'alex@alexhelp.com',
  address: {
    street: '25 Hooks Ln # 310',
    city: 'Pikesville',
    state: 'MD',
    zip: '21208',
    full: '25 Hooks Ln # 310, Pikesville, MD 21208'
  },
  hours: 'Available 24/7',
  languages: ['English', 'Russian', 'Ukrainian', 'Turkish', 'Uzbek']
};
