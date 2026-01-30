export interface Location {
  name: string;
  slug: string;
  type: 'county' | 'city';
  county?: string;
  description: string;
  population?: string;
  courts?: string[];
  hospitals?: string[];
  distanceFromOffice?: string;
}

export const counties: Location[] = [
  {
    name: 'Baltimore County',
    slug: 'baltimore-county',
    type: 'county',
    description: 'Serving Baltimore County residents with personal injury and criminal defense representation. Our Pikesville office is centrally located to serve the entire county.',
    population: '850,000+',
    courts: ['Baltimore County Circuit Court', 'Baltimore County District Court'],
    hospitals: ['Greater Baltimore Medical Center', 'St. Joseph Medical Center', 'MedStar Franklin Square'],
    distanceFromOffice: 'Office located in Baltimore County'
  },
  {
    name: 'Howard County',
    slug: 'howard-county',
    type: 'county',
    description: 'Experienced legal representation for Howard County residents. We handle cases throughout Columbia, Ellicott City, and surrounding areas.',
    population: '330,000+',
    courts: ['Howard County Circuit Court', 'Howard County District Court'],
    hospitals: ['Howard County General Hospital', 'Johns Hopkins Howard County Medical Center'],
    distanceFromOffice: '20 minutes from our office'
  },
  {
    name: 'Montgomery County',
    slug: 'montgomery-county',
    type: 'county',
    description: 'Serving Montgomery County from Bethesda to Germantown. Our attorneys handle personal injury and criminal cases throughout the county.',
    population: '1,000,000+',
    courts: ['Montgomery County Circuit Court', 'Montgomery County District Court'],
    hospitals: ['Suburban Hospital', 'Holy Cross Hospital', 'Shady Grove Medical Center'],
    distanceFromOffice: '30 minutes from our office'
  },
  {
    name: 'Anne Arundel County',
    slug: 'anne-arundel-county',
    type: 'county',
    description: 'Legal services for Anne Arundel County including Annapolis, Glen Burnie, and Severn. Convenient representation for injury and criminal matters.',
    population: '580,000+',
    courts: ['Anne Arundel County Circuit Court', 'Anne Arundel County District Court'],
    hospitals: ['Anne Arundel Medical Center', 'Baltimore Washington Medical Center'],
    distanceFromOffice: '25 minutes from our office'
  },
  {
    name: 'Prince George\'s County',
    slug: 'prince-georges-county',
    type: 'county',
    description: 'Representing clients throughout Prince George\'s County. From Bowie to Hyattsville, we provide dedicated legal representation.',
    population: '970,000+',
    courts: ['Prince George\'s County Circuit Court', 'Prince George\'s County District Court'],
    hospitals: ['MedStar Southern Maryland Hospital', 'Doctors Community Hospital'],
    distanceFromOffice: '35 minutes from our office'
  },
  {
    name: 'Harford County',
    slug: 'harford-county',
    type: 'county',
    description: 'Serving Harford County residents in Bel Air, Aberdeen, and surrounding communities with experienced legal representation.',
    population: '260,000+',
    courts: ['Harford County Circuit Court', 'Harford County District Court'],
    hospitals: ['University of Maryland Upper Chesapeake Medical Center'],
    distanceFromOffice: '30 minutes from our office'
  },
  {
    name: 'Carroll County',
    slug: 'carroll-county',
    type: 'county',
    description: 'Legal representation for Carroll County including Westminster, Eldersburg, and surrounding areas.',
    population: '170,000+',
    courts: ['Carroll County Circuit Court', 'Carroll County District Court'],
    hospitals: ['Carroll Hospital Center'],
    distanceFromOffice: '25 minutes from our office'
  },
  {
    name: 'Frederick County',
    slug: 'frederick-county',
    type: 'county',
    description: 'Serving Frederick County residents with personal injury and criminal defense services throughout the region.',
    population: '270,000+',
    courts: ['Frederick County Circuit Court', 'Frederick County District Court'],
    hospitals: ['Frederick Health Hospital'],
    distanceFromOffice: '45 minutes from our office'
  },
  {
    name: 'Cecil County',
    slug: 'cecil-county',
    type: 'county',
    description: 'Legal services for Cecil County including Elkton and surrounding areas.',
    population: '103,000+',
    courts: ['Cecil County Circuit Court', 'Cecil County District Court'],
    hospitals: ['Union Hospital'],
    distanceFromOffice: '50 minutes from our office'
  },
  {
    name: 'Charles County',
    slug: 'charles-county',
    type: 'county',
    description: 'Representing Charles County residents in Waldorf and throughout the county.',
    population: '165,000+',
    courts: ['Charles County Circuit Court', 'Charles County District Court'],
    hospitals: ['University of Maryland Charles Regional Medical Center'],
    distanceFromOffice: '50 minutes from our office'
  },
  {
    name: 'Calvert County',
    slug: 'calvert-county',
    type: 'county',
    description: 'Legal representation for Calvert County residents in personal injury and criminal matters.',
    population: '93,000+',
    courts: ['Calvert County Circuit Court', 'Calvert County District Court'],
    hospitals: ['CalvertHealth Medical Center'],
    distanceFromOffice: '55 minutes from our office'
  },
  {
    name: 'Washington County',
    slug: 'washington-county',
    type: 'county',
    description: 'Serving Washington County including Hagerstown with dedicated legal representation.',
    population: '155,000+',
    courts: ['Washington County Circuit Court', 'Washington County District Court'],
    hospitals: ['Meritus Medical Center'],
    distanceFromOffice: '1 hour from our office'
  },
  {
    name: 'Allegany County',
    slug: 'allegany-county',
    type: 'county',
    description: 'Legal services for Allegany County residents in western Maryland.',
    population: '68,000+',
    courts: ['Allegany County Circuit Court', 'Allegany County District Court'],
    hospitals: ['UPMC Western Maryland'],
    distanceFromOffice: '2 hours from our office'
  },
  {
    name: 'Garrett County',
    slug: 'garrett-county',
    type: 'county',
    description: 'Representing Garrett County residents in Maryland\'s westernmost county.',
    population: '29,000+',
    courts: ['Garrett County Circuit Court', 'Garrett County District Court'],
    hospitals: ['Garrett Regional Medical Center'],
    distanceFromOffice: '2.5 hours from our office'
  },
  {
    name: 'Kent County',
    slug: 'kent-county',
    type: 'county',
    description: 'Legal services for Kent County on Maryland\'s Eastern Shore.',
    population: '19,000+',
    courts: ['Kent County Circuit Court', 'Kent County District Court'],
    hospitals: ['University of Maryland Shore Medical Center at Chestertown'],
    distanceFromOffice: '1.5 hours from our office'
  },
  {
    name: 'Queen Anne\'s County',
    slug: 'queen-annes-county',
    type: 'county',
    description: 'Serving Queen Anne\'s County residents on the Eastern Shore.',
    population: '50,000+',
    courts: ['Queen Anne\'s County Circuit Court', 'Queen Anne\'s County District Court'],
    distanceFromOffice: '1 hour from our office'
  },
  {
    name: 'Talbot County',
    slug: 'talbot-county',
    type: 'county',
    description: 'Legal representation for Talbot County including Easton.',
    population: '37,000+',
    courts: ['Talbot County Circuit Court', 'Talbot County District Court'],
    hospitals: ['University of Maryland Shore Medical Center at Easton'],
    distanceFromOffice: '1.5 hours from our office'
  },
  {
    name: 'Dorchester County',
    slug: 'dorchester-county',
    type: 'county',
    description: 'Serving Dorchester County including Cambridge on the Eastern Shore.',
    population: '32,000+',
    courts: ['Dorchester County Circuit Court', 'Dorchester County District Court'],
    hospitals: ['University of Maryland Shore Medical Center at Dorchester'],
    distanceFromOffice: '1.5 hours from our office'
  },
  {
    name: 'Wicomico County',
    slug: 'wicomico-county',
    type: 'county',
    description: 'Legal services for Wicomico County including Salisbury.',
    population: '104,000+',
    courts: ['Wicomico County Circuit Court', 'Wicomico County District Court'],
    hospitals: ['TidalHealth Peninsula Regional'],
    distanceFromOffice: '2 hours from our office'
  },
  {
    name: 'Worcester County',
    slug: 'worcester-county',
    type: 'county',
    description: 'Representing Worcester County residents including Ocean City.',
    population: '52,000+',
    courts: ['Worcester County Circuit Court', 'Worcester County District Court'],
    hospitals: ['Atlantic General Hospital'],
    distanceFromOffice: '2.5 hours from our office'
  },
  {
    name: 'Saint Mary\'s County',
    slug: 'saint-marys-county',
    type: 'county',
    description: 'Legal representation for Saint Mary\'s County in southern Maryland.',
    population: '113,000+',
    courts: ['Saint Mary\'s County Circuit Court', 'Saint Mary\'s County District Court'],
    hospitals: ['MedStar St. Mary\'s Hospital'],
    distanceFromOffice: '1.5 hours from our office'
  },
  {
    name: 'Somerset County',
    slug: 'somerset-county',
    type: 'county',
    description: 'Serving Somerset County on Maryland\'s Lower Eastern Shore.',
    population: '24,000+',
    courts: ['Somerset County Circuit Court', 'Somerset County District Court'],
    distanceFromOffice: '2.5 hours from our office'
  },
  {
    name: 'Caroline County',
    slug: 'caroline-county',
    type: 'county',
    description: 'Legal services for Caroline County on the Eastern Shore.',
    population: '33,000+',
    courts: ['Caroline County Circuit Court', 'Caroline County District Court'],
    distanceFromOffice: '1.5 hours from our office'
  }
];

export const cities: Location[] = [
  {
    name: 'Pikesville',
    slug: 'pikesville',
    type: 'city',
    county: 'Baltimore County',
    description: 'Our office is located in the heart of Pikesville, making us the most convenient choice for local residents seeking legal representation.',
    population: '32,000+',
    distanceFromOffice: 'Office location'
  },
  {
    name: 'Towson',
    slug: 'towson',
    type: 'city',
    county: 'Baltimore County',
    description: 'Serving Towson residents with convenient access to our Pikesville office, just minutes away.',
    population: '57,000+',
    distanceFromOffice: '10 minutes from our office'
  },
  {
    name: 'Columbia',
    slug: 'columbia',
    type: 'city',
    county: 'Howard County',
    description: 'Legal representation for Columbia residents. Easy access to our office via I-695 and I-70.',
    population: '104,000+',
    distanceFromOffice: '20 minutes from our office'
  }
];

export const allLocations = [...counties, ...cities];

export const locationsBySlug = allLocations.reduce((acc, location) => {
  acc[location.slug] = location;
  return acc;
}, {} as Record<string, Location>);
