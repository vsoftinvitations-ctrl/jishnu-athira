/**
 * Wedding Digital Invitation Data Configuration (English Only)
 * Jishnu & Athira Wedding Invitation
 */

export const weddingData = {
  // Couple Information
  groom: {
    name: "Jishnu U",
    shortName: "Jishnu",
    qualifications: "",
    image: "/assets/image2.png",
    bio: "Son of our esteemed family, blessed to begin this divine voyage of love, harmony, and togetherness.",
    parents: {
      father: "Jayaraj U (Late)",
      fatherClean: "Jayaraj U",
      fatherLate: true,
      fatherDisplay: "Sri. Jayaraj U (Late)",
      mother: "Baby Uma R",
      motherDisplay: "Smt. Baby Uma R",
      houseName: "Kripa House",
      address: "Kripa House, Avileri Parambu, Vrindavan Colony, Chevayoor.",
      city: "Chevayoor, Calicut"
    },
    siblingLabel: "",
    siblingsDisplay: "",
    siblings: []
  },
  bride: {
    name: "Athira P",
    shortName: "Athira",
    qualifications: "",
    image: "/assets/image3.png",
    bio: "Daughter of our beloved family, embarking on a sacred new chapter of life with grace and devotion.",
    parents: {
      father: "Balakrishnan P (Late)",
      fatherClean: "Balakrishnan P",
      fatherLate: true,
      fatherDisplay: "Sri. Balakrishnan P (Late)",
      mother: "Sujatha Balakrishnan",
      motherDisplay: "Smt. Sujatha Balakrishnan",
      houseName: "Pootheri House",
      address: "Pootheri House, Muthanchalam Paramba, Kallithodi, Chungam, Feroke, Calicut.",
      city: "Feroke, Calicut"
    },
    siblingLabel: "",
    siblingsDisplay: "",
    siblings: []
  },

  // Invitation From
  invitationFrom: {
    label: "Invitation From",
    names: "Ayush, Athulya, Sumesh and Family Members"
  },

  // Wedding Muhurtham & Event Details
  event: {
    muhurthamLabel: "Wedding Ceremony",
    dateDisplay: "Sunday, 24 January 2027",
    timeDisplay: "10:45 AM – 11:30 AM",
    muhurthamTimeWindow: "Muhurtham: 10:45 AM – 11:30 AM",
    venueName: "Mangalya Kalyana Mandapam & Auditorium",
    venueAddress: "8/4, Chungam (Mottammal Road), Feroke",
    city: "Calicut – 673631",
    googleMapsUrl: "https://maps.app.goo.gl/yZFEZTFGCD7QxsT19?g_st=aw",
    googleCalendarTitle: "Wedding of Jishnu & Athira",
    googleCalendarDescription: "You are cordially invited with family to celebrate the wedding of Jishnu U & Athira P at Mangalya Kalyana Mandapam & Auditorium, Feroke, Calicut.",
    // Target ISO date for the live countdown timer (YYYY-MM-DDTHH:mm:ss)
    targetCountdownDate: "2027-01-24T10:45:00"
  },

  // RSVP Details (Accept & Decline Scenarios)
  rsvp: {
    whatsappNumber: "919778137459",
    acceptMessage: "Hello Jishnu & Athira, we are delighted to attend your wedding celebration!🎉🤍",
    declineMessage: "Hello Jishnu & Athira, we won't be able to attend your wedding celebration, but our heartfelt blessings and warm wishes are with you both!🤍✨"
  },

  // Sacred Ceremonies Timeline
  ceremonies: [
    {
      id: "ceremony-1",
      englishTitle: "Guest Welcome & Gathering",
      time: "10:00 AM",
      description: "Auspicious arrival of family and guests to celebrate the special occasion.",
      icon: "ring"
    },
    {
      id: "ceremony-2",
      englishTitle: "Wedding Ceremony (Muhurtham)",
      time: "10:45 AM – 11:30 AM",
      description: "Sacred wedding ceremony, exchanging of garlands and marital vows in the presence of loved ones.",
      icon: "lamp"
    },
    {
      id: "ceremony-3",
      englishTitle: "Traditional Wedding Feast",
      time: "12:00 PM onwards",
      description: "Delicious grand traditional feast served to celebrate the joyful union of Jishnu & Athira.",
      icon: "leaf"
    }
  ],

  // Couple Photo Gallery
  galleryImages: [
    {
      src: "/assets/image3.png",
      alt: "Jishnu U & Athira P - Together Portrait",
      caption: "Moments captured along our path to forever"
    },
    {
      src: "/assets/image.png",
      alt: "Jishnu U & Athira P - Close-up Portrait",
      caption: "Two souls bound by love and timeless tradition"
    },
    {
      src: "/assets/image2.png",
      alt: "Jishnu U & Athira P - Standing Portrait",
      caption: "A journey of eternal companionship"
    }
  ],

  // Sacred Text & Blessings
  texts: {
    elderBlessingsEng: "With the blessings of our elders\nand the grace of the divine",
    twoHeartsEng: "Two hearts,\none beautiful beginning.",
    greetingEnglish: "With Warm Wishes & Blessings",
    coupleIntroHeading: "Together with our families",
    coupleIntroTagline: "Two souls, one journey, and a lifetime of beautiful moments.",
    weddingTogethernessQuote: "A wedding is the sacred union of two souls and the joyful coming together of two families—bound by love, cherished traditions, and the blessing of a lifetime of togetherness.",
    invitationHeading: "Cordially Inviting You",
    invitationSubtitleEng: "With joy in our hearts,\nwe invite you to celebrate our wedding.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments...",
    locationHeading: "Join Us to Celebrate Our Wedding",
    finalBlessingEnglish: "Your presence and blessings\nwill make our beginning even more beautiful.",
    withLove: "With Love"
  }
};
