export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
  href: string;
  category: 'personal-injury' | 'criminal-defense';
  backgroundImage?: string;
}

// Homepage services - matches original alexhelp.com (10 boxes)
export const featuredServices: Service[] = [
  {
    title: 'Personal Injury',
    slug: 'personal-injury',
    description: 'Comprehensive representation for all types of injury cases. We fight to get you the compensation you deserve.',
    icon: 'Shield',
    href: '/personal-injury/',
    category: 'personal-injury',
    backgroundImage: '/images/stock/road-highway.jpg'
  },
  {
    title: 'Car / Truck / Motorcycle Accidents',
    slug: 'car-accidents',
    description: 'Experienced accident lawyers helping victims recover damages for injuries, lost wages, and pain and suffering.',
    icon: 'Car',
    href: '/car-accidents/',
    category: 'personal-injury',
    backgroundImage: '/images/stock/road-highway.jpg'
  },
  {
    title: 'Dog Bites',
    slug: 'dog-bites',
    description: 'Pursuing compensation for dog bite injuries under Maryland law.',
    icon: 'Dog',
    href: '/dog-bites/',
    category: 'personal-injury',
    backgroundImage: '/images/stock/road-highway.jpg'
  },
  {
    title: 'Medical / Dental Malpractice',
    slug: 'medical-malpractice',
    description: 'Holding healthcare providers accountable for negligence that causes patient harm.',
    icon: 'Stethoscope',
    href: '/medical-malpractice/',
    category: 'personal-injury',
    backgroundImage: '/images/stock/hospital-corridor.jpg'
  },
  {
    title: 'Workers\' Compensation',
    slug: 'workers-compensation',
    description: 'Helping injured workers obtain the benefits they deserve after workplace accidents.',
    icon: 'HardHat',
    href: '/workers-compensation/',
    category: 'personal-injury',
    backgroundImage: '/images/stock/construction-cranes.jpg'
  },
  {
    title: 'Criminal Defense',
    slug: 'criminal-defense',
    description: 'Aggressive defense for misdemeanor and felony charges. Protecting your rights and your future.',
    icon: 'Scale',
    href: '/criminal-defense/',
    category: 'criminal-defense',
    backgroundImage: '/images/stock/courtroom-empty.jpg'
  },
  {
    title: 'Traffic Offenses',
    slug: 'traffic-offenses',
    description: 'Representation for speeding, reckless driving, and license violations.',
    icon: 'Car',
    href: '/traffic-offenses/',
    category: 'criminal-defense',
    backgroundImage: '/images/stock/road-highway.jpg'
  },
  {
    title: 'DUI Offenses',
    slug: 'dui',
    description: 'Strategic DUI defense to minimize penalties and protect your driving privileges.',
    icon: 'AlertTriangle',
    href: '/dui/',
    category: 'criminal-defense',
    backgroundImage: '/images/stock/road-highway.jpg'
  },
  {
    title: 'Drug Crimes',
    slug: 'drug-crimes',
    description: 'Defense for possession, distribution, and trafficking charges.',
    icon: 'Pill',
    href: '/drug-crimes/',
    category: 'criminal-defense',
    backgroundImage: '/images/stock/courtroom-empty.jpg'
  },
  {
    title: 'Theft Offenses',
    slug: 'theft-offenses',
    description: 'Defense for shoplifting, burglary, and robbery charges.',
    icon: 'Lock',
    href: '/theft-offenses/',
    category: 'criminal-defense',
    backgroundImage: '/images/stock/courtroom-empty.jpg'
  }
];

export const personalInjuryServices: Service[] = [
  {
    title: 'Car Accidents',
    slug: 'car-accidents',
    description: 'Motor vehicle accident representation including collisions, hit-and-runs, and rideshare accidents.',
    icon: 'Car',
    href: '/car-accidents/',
    category: 'personal-injury'
  },
  {
    title: 'Truck Accidents',
    slug: 'truck-accidents',
    description: 'Commercial truck and 18-wheeler accident cases requiring specialized investigation.',
    icon: 'Truck',
    href: '/truck-accidents/',
    category: 'personal-injury'
  },
  {
    title: 'Motorcycle Accidents',
    slug: 'motorcycle-accidents',
    description: 'Advocating for motorcyclists injured due to driver negligence.',
    icon: 'Bike',
    href: '/motorcycle-accidents/',
    category: 'personal-injury'
  },
  {
    title: 'Bicycle Accidents',
    slug: 'bicycle-accidents',
    description: 'Legal help for cyclists injured by negligent motorists.',
    icon: 'Bike',
    href: '/bicycle-accidents/',
    category: 'personal-injury'
  },
  {
    title: 'Pedestrian Accidents',
    slug: 'pedestrian-accidents',
    description: 'Representation for pedestrians struck by vehicles.',
    icon: 'Footprints',
    href: '/pedestrian-accidents/',
    category: 'personal-injury'
  },
  {
    title: 'Dog Bites',
    slug: 'dog-bites',
    description: 'Pursuing compensation for dog bite injuries under Maryland law.',
    icon: 'Dog',
    href: '/dog-bites/',
    category: 'personal-injury'
  },
  {
    title: 'Medical Malpractice',
    slug: 'medical-malpractice',
    description: 'Cases involving doctor errors, surgical mistakes, and misdiagnosis.',
    icon: 'Stethoscope',
    href: '/medical-malpractice/',
    category: 'personal-injury'
  },
  {
    title: 'Dental Malpractice',
    slug: 'dental-malpractice',
    description: 'Dental negligence cases including nerve damage and improper treatment.',
    icon: 'Smile',
    href: '/dental-malpractice/',
    category: 'personal-injury'
  },
  {
    title: 'Workers\' Compensation',
    slug: 'workers-compensation',
    description: 'Workplace injury claims and benefits appeals.',
    icon: 'HardHat',
    href: '/workers-compensation/',
    category: 'personal-injury'
  },
  {
    title: 'Slip and Fall',
    slug: 'slip-and-fall',
    description: 'Premises liability cases for injuries on dangerous property.',
    icon: 'AlertTriangle',
    href: '/slip-and-fall/',
    category: 'personal-injury'
  },
  {
    title: 'Wrongful Death',
    slug: 'wrongful-death',
    description: 'Compassionate representation for families who lost loved ones.',
    icon: 'Heart',
    href: '/wrongful-death/',
    category: 'personal-injury'
  },
  {
    title: 'Product Liability',
    slug: 'product-liability',
    description: 'Claims against manufacturers of defective products.',
    icon: 'Package',
    href: '/product-liability/',
    category: 'personal-injury'
  },
  {
    title: 'Nursing Home Neglect',
    slug: 'nursing-home-neglect',
    description: 'Protecting elderly residents from abuse and neglect.',
    icon: 'Home',
    href: '/nursing-home-neglect/',
    category: 'personal-injury'
  },
  {
    title: 'Workplace Accidents',
    slug: 'workplace-accidents',
    description: 'Third-party claims for construction and industrial accidents.',
    icon: 'Building',
    href: '/workplace-accidents/',
    category: 'personal-injury'
  }
];

export const criminalDefenseServices: Service[] = [
  {
    title: 'DUI/DWI',
    slug: 'dui',
    description: 'Defense against drunk driving charges to protect your license and freedom.',
    icon: 'AlertTriangle',
    href: '/dui/',
    category: 'criminal-defense'
  },
  {
    title: 'Drug Crimes',
    slug: 'drug-crimes',
    description: 'Defense for possession, distribution, and trafficking charges.',
    icon: 'Pill',
    href: '/drug-crimes/',
    category: 'criminal-defense'
  },
  {
    title: 'Traffic Offenses',
    slug: 'traffic-offenses',
    description: 'Representation for speeding, reckless driving, and license violations.',
    icon: 'Car',
    href: '/traffic-offenses/',
    category: 'criminal-defense'
  },
  {
    title: 'Assault',
    slug: 'assault',
    description: 'Defense against assault charges from misdemeanors to felonies.',
    icon: 'Shield',
    href: '/assault/',
    category: 'criminal-defense'
  },
  {
    title: 'Domestic Violence',
    slug: 'domestic-violence',
    description: 'Sensitive defense for domestic-related charges.',
    icon: 'Home',
    href: '/domestic-violence/',
    category: 'criminal-defense'
  },
  {
    title: 'Theft Offenses',
    slug: 'theft-offenses',
    description: 'Defense for shoplifting, burglary, and robbery charges.',
    icon: 'Lock',
    href: '/theft-offenses/',
    category: 'criminal-defense'
  }
];

export const allServices = [...personalInjuryServices, ...criminalDefenseServices];
