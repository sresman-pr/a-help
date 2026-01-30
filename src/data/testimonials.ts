export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  shortText: string;
  caseType?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'juan-v',
    name: 'Juan V.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'Alex and his team were able to help me during a very stressful time in my life. A car accident changed my life for the worse and thankfully this law office immediately started to take care of the massive amounts of planning, communication, dealing with insurances, and bills that come with car accidents. They were able to fight for more compensation and reached a satisfactory sum, even after the amount was negotiated, they still negotiated with doctors and hospitals to increase my portion. That is a sign that they truly care about the people they represent. I highly recommend their services!',
    shortText: 'Alex and his team were able to help me during a very stressful time in my life. A car accident changed my life for the worse and thankfully this law office immediately started to take care of everything...',
    caseType: 'Car Accident',
    featured: true
  },
  {
    id: 'irina-o',
    name: 'Irina O.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'Unbelievably organized, responsive and probably the most effective process-oriented group of people I\'ve ever seen. When you are in financial distress and physical pain it is difficult to think clearly and make good decisions. Alex Poberesky was patient, reassuring, articulate, knowledgeable and effective. Perhaps the thing that impressed me most about Alex was that he was very straight forward and told me what to expect each step of the way. Alex made the process so much easier and gave me peace of mind and a successful result! Alex is an excellent attorney who really goes above and beyond for his clients. I not only recommend attorney Alex Poberesky, but I guarantee once you have used his service you too will look no further.',
    shortText: 'Unbelievably organized, responsive and probably the most effective process-oriented group of people I\'ve ever seen. Alex was patient, reassuring, articulate, knowledgeable and effective...',
    caseType: 'Personal Injury',
    featured: true
  },
  {
    id: 'preetam-g',
    name: 'Preetam G.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'Alex and his team worked tirelessly to get the maximum payout and provided exceptional service throughout the engagement. Inna, Lori, Nadya and others were such a pleasure to work with. They came highly recommended to me, and I will be recommending them to others. You are in great hands with Alex and team! As a follow up to this I wanted to reiterate and emphasize the exceptional service from this law office. Being one who is skeptical of the legal process, Alex and the team have changed my views about this industry and its people. Not only did Alex and the team come through with the highest settlement possible but they even exceeded the amount they told me 2 weeks before by 15%. That is under promise and over delivery which is rare to find nowadays.',
    shortText: 'Alex and his team worked tirelessly to get the maximum payout and provided exceptional service throughout the engagement. They exceeded the settlement amount by 15%...',
    caseType: 'Personal Injury',
    featured: true
  },
  {
    id: 'tony-v',
    name: 'J. Tony V.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'My experience with Alex was more than exceptional. The consistency in keeping me up-to-date with everything was very much appreciated. I was never left in the blind when it came to anything that dealt with my case. I feel like he fought to get the best care for us and the most that we can get for our case. I feel like I got the best results. I would be recommending this law firm to anyone that I know who\'s ever in a position to need your help.',
    shortText: 'My experience with Alex was more than exceptional. The consistency in keeping me up-to-date with everything was very much appreciated...',
    caseType: 'Personal Injury',
    featured: true
  },
  {
    id: 'brian-m',
    name: 'Brian M.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'Alex and his staff handled everything efficiently with patience and skill. I was totally overwhelmed initially following my accident, but their support and efficiency was exactly what I needed.',
    shortText: 'Alex and his staff handled everything efficiently with patience and skill. I was totally overwhelmed initially following my accident...',
    caseType: 'Car Accident',
    featured: false
  },
  {
    id: 'gulnoza-m',
    name: 'Gulnoza M.',
    location: 'Pikesville, MD',
    rating: 5,
    text: 'Appreciate the great service I received from Alex and his team. They delivered the results and even surprised me with more money than they promised. Great service! I would definitely recommend it to anyone who needs a great lawyer.',
    shortText: 'They delivered the results and even surprised me with more money than they promised. Great service!',
    caseType: 'Personal Injury',
    featured: false
  }
];

export const featuredTestimonials = testimonials.filter(t => t.featured);
