export const siteData = {
  company: {
    name: "Human Power Service",
    tagline: "Expert support on obtaining work permit",
    description:
      "Fast, clear, and reliable services for your peace of mind — we handle every detail so you don't have to worry.",
    phone: "+355 69 601 1863",
    email: "biuro@humansvc.com",
    copyright: "2026",
  },

  nav: [
    { label: "About Us", href: "/" },
    { label: "News", href: "/news" },
    { label: "Services", href: "/services" },
    { label: "Offices", href: "/offices" },
  ],

  features: [
    {
      id: "fast",
      icon: "clock",
      title: "Fast",
      description: "Quick and efficient processing",
    },
    {
      id: "reliable",
      icon: "briefcase",
      title: "Reliable",
      description: "Trusted experts, clear guarantees",
    },
    {
      id: "professional",
      icon: "document",
      title: "Professional",
      description: "Handled by experienced legal team",
    },
    {
      id: "personalized",
      icon: "person",
      title: "Personalized",
      description: "Solutions tailored to your case",
    },
  ],

  stats: [
    { value: "5000+", label: "Permits Processed", suffix: "" },
    { value: "98", label: "Success Rate", suffix: "%" },
    { value: "12", label: "Countries Covered", suffix: "+" },
    { value: "24/7", label: "Client Support", suffix: "" },
  ],

  services: [
    {
      id: "lithuania",
      title: "Employment Programme Republic of Lithuania",
      slug: "employment-programme-republic-of-lithuania",
      flag: "LT",
      country: "Lithuania",
      tags: ["Skilled workers", "National D visa", "Temporary residence permit (Leidimas laikinai gyventi)"],
      description:
        "Comprehensive employment programme for skilled workers seeking to work in Lithuania. We handle the entire process from documentation to final permit issuance.",
      color: "#FDB913",
      accentColor: "#006A44",
      featured: true,
      processingTime: "4 - 6 Weeks",
      permitType: "National D Visa + Temporary Residence Card (TRP)",
      validity: "1 to 2 Years (Renewable)",
      salaryRange: "€1,200 - €2,800 / month",
      occupations: [
        "Heavy Vehicle & Logistics Drivers (CE)",
        "Construction Specialists & Engineers",
        "Welders & Metal Fabricators",
        "IT & Software Developers",
        "Manufacturing & Assembly Line Operatives"
      ],
      requirements: [
        "Valid international passport with at least 18 months validity",
        "Clear criminal record certificate (Police Clearance with Apostille)",
        "Diplomas, certificates or proof of minimum 1 year work experience",
        "Biometric passport photos meeting Schengen consular standards",
        "Medical fitness clearance and international health insurance"
      ],
      processSteps: [
        { step: 1, title: "Initial Document Audit", desc: "Our legal team checks your qualifications against the Lithuanian Employment Service deficit list." },
        { step: 2, title: "Employer Labor Mediation", desc: "Official registration and mediation letter issued by registered Lithuanian employer." },
        { step: 3, title: "MIGRIS Application Filing", desc: "Online submission through the Lithuanian Migration Information System (MIGRIS)." },
        { step: 4, title: "Consular Appointment & Biometrics", desc: "Scheduled biometric appointment at VFS Global / Lithuanian Embassy." },
        { step: 5, title: "Visa Issuance & Relocation", desc: "National D visa stamped and TRP card scheduled for collection upon arrival in Vilnius." }
      ]
    },
    {
      id: "slovakia",
      title: "Work Visa Programme of Slovakia",
      slug: "work-visa-programme-of-slovakia",
      flag: "SK",
      country: "Slovakia",
      tags: ["Work visa", "Employment authorization", "Central Europe Mobility"],
      description:
        "Professional assistance for obtaining work visas in Slovakia. Our team guides you through every step of the Slovak immigration process.",
      color: "#0B4EA2",
      accentColor: "#EE1C25",
      featured: true,
      processingTime: "6 - 8 Weeks",
      permitType: "Single Permit (Prechodný pobyt na účel zamestnania)",
      validity: "Up to 2 Years (Extendable)",
      salaryRange: "€1,100 - €2,400 / month",
      occupations: [
        "Automotive Plant Technicians (Bratislava / Trnava / Nitra)",
        "Warehouse Logistics & Forklift Drivers",
        "Electrical Technicians & Mechanics",
        "Hospitality, Hotel & Food Service Staff",
        "Civil & Structural Engineering Workers"
      ],
      requirements: [
        "Valid passport with at least 2 empty pages",
        "Apostilled Criminal Record Extract from home country",
        "Notarized and officially translated educational credentials",
        "Binding employment contract or official employer commitment letter",
        "Proof of accommodation in Slovakia verified by landlord affidavit"
      ],
      processSteps: [
        { step: 1, title: "Labor Office Vacancy Notification", desc: "Employer registers the open position with the Slovak Central Labor Office (ÚPSVaR)." },
        { step: 2, title: "Confirmation of Job Availability", desc: "Receipt of confirmation from the Slovak Ministry of Labor." },
        { step: 3, title: "Embassy Document Submission", desc: "Submission of apostilled and translated documents to the Slovak Embassy or Foreign Police." },
        { step: 4, title: "Foreigners' Police Decision", desc: "Review and approval by the Slovak Alien Police Department (Cudzinecká polícia)." },
        { step: 5, title: "Visa & Entry Formalities", desc: "Issuance of D-type entry visa and biometric residence card collection in Slovakia." }
      ]
    },
    {
      id: "serbia",
      title: "Republic of Serbia Work Visa Programme",
      slug: "republic-of-serbia-work-visa-programme",
      flag: "RS",
      country: "Serbia",
      tags: ["Government-backed programme", "Single permit (work + residence)", "End-to-end support"],
      description:
        "Government-backed work visa programme for Serbia, providing a single permit that covers both work and residence authorization.",
      color: "#C6363C",
      accentColor: "#0C4076",
      featured: true,
      processingTime: "3 - 5 Weeks (Fast-Track)",
      permitType: "Single Unified Work & Residence Permit (Jedinstvena dozvola)",
      validity: "1 Year to 3 Years (Fast Renewal)",
      salaryRange: "€900 - €2,200 / month",
      occupations: [
        "Infrastructure, Highway & Building Construction",
        "Heavy Equipment & Crane Operators",
        "International Logistics & Road Haulage",
        "Industrial Manufacturing & Agricultural Processing",
        "Telecommunications & Technical Maintenance"
      ],
      requirements: [
        "Valid passport with minimum 6 months remaining validity",
        "Police clearance / Certificate of no criminal record",
        "Proof of professional qualifications or trade certifications",
        "Signed employer agreement from accredited Serbian corporate sponsor",
        "Medical insurance valid in Republic of Serbia"
      ],
      processSteps: [
        { step: 1, title: "Digital Single Permit Filing", desc: "Submission through the unified Serbian Ministry of Interior portal." },
        { step: 2, title: "Labor Market Test Exemption", desc: "Automated verification through the National Employment Service (NSZ)." },
        { step: 3, title: "Security Clearance & Approval", desc: "Fast-track security verification and electronic permit issuance." },
        { step: 4, title: "Consular Visa D Issuance", desc: "Multi-entry Type D Visa stamped at the Serbian Embassy." },
        { step: 5, title: "Arrival & Biometric ID Card", desc: "Reception in Belgrade, biometric registration, and delivery of single permit card." }
      ]
    },
  ],

  news: [
    {
      id: "1",
      slug: "polish-government-extends-support-for-ukrainian-refugees-until-march-2026",
      title: "Polish Government Extends Support for Ukrainian Refugees Until March 2026",
      excerpt:
        "The Council of Ministers has adopted a draft bill amending the Act on Assistance to Ukrainian Citizens in Connection with the Armed Conflict in Ukraine, along with other related laws, as proposed by the Minister of Internal Affairs and Administration.",
      date: "7/16/2025",
      image:
        "https://backend.humansvc.com/uploads//small_article_thumb_6_768x549_16624162c2.webp",
      category: "Policy",
      readTime: "4 min read",
      author: "Legal Editorial Team",
      content: [
        "The Council of Ministers has formally adopted a landmark legislative amendment ensuring the continuous extension of temporary protection and legal residency provisions until March 4, 2026. This comprehensive reform addresses the operational status of foreign nationals, their entitlement to lawful employment, and streamlined access to national social and healthcare frameworks.",
        "Under the revised provisions, holders of PESEL UKR status will maintain simplified access to the Polish labor market without requiring supplementary labor market tests or independent Voivodeship work declarations. Employers may continue hiring via the simplified electronic notification portal (praca.gov.pl) within 7 days of employment commencement.",
        "Furthermore, foreign workers transitioning to standard temporary residence permits (Karta Pobytu) benefit from accelerated consular reviews and simplified document submission criteria, ensuring long-term stability for businesses and international workers alike."
      ]
    },
    {
      id: "2",
      slug: "poland-processes-8500-international-protection-applications-in-first-half-of-2025",
      title: "Poland Processes 8,500 International Protection Applications in First Half of 2025",
      excerpt:
        "In the first half of 2025, approximately 8,500 foreigners applied for international protection in Poland. The majority of applicants, accounting for about 77%, were citizens of Ukraine and Belarus.",
      date: "7/14/2025",
      image:
        "https://backend.humansvc.com/uploads//small_article_thumb_5_768x549_4bb314b9db.webp",
      category: "Statistics",
      readTime: "3 min read",
      author: "Immigration Analytics Bureau",
      content: [
        "Official data released by the Office for Foreigners (UdSC) indicates that during the first six months of 2025, over 8,500 international protection dossiers were processed by Polish immigration tribunals. Of these, over 77% originated from Ukrainian and Belarusian nationals seeking sustained regularized status.",
        "The Department of Legalization of Stay noted a marked increase in applications linked to skilled industrial and high-technology sectors. The average processing time for preliminary certifications has shortened by 18% following the implementation of integrated biometric appointments across major voivodeship centers including Warsaw, Kraków, and Wrocław.",
        "For non-EU candidates seeking regularized work status, our advisors emphasize the strategic advantages of submitting complete, pre-audited employment declarations early to avoid potential consular scheduling bottlenecks during peak autumn seasons."
      ]
    },
    {
      id: "3",
      slug: "european-migration-network-conference-held-during-polands-eu-council-presidency",
      title: "European Migration Network Conference Held During Poland's EU Council Presidency",
      excerpt:
        "Warsaw hosted a conference today focused on combating irregular migration and addressing its root causes, organized by the Office for Foreigners in collaboration with the Ministry of Internal Affairs and Administration.",
      date: "6/4/2025",
      image:
        "https://backend.humansvc.com/uploads//small_article_thumb_9_768x549_5ef193c063.webp",
      category: "Events",
      readTime: "5 min read",
      author: "European Regulatory Affairs",
      content: [
        "As part of the official program of Poland's Presidency of the Council of the European Union, the European Migration Network (EMN) convened high-level delegates, ministerial advisors, and international legal experts in Warsaw to deliberate on ethical labor migration channels, unified Schengen visa integrity, and consular digitization.",
        "A central focus of the conference was the harmonization of legal labor corridors between Central European nations—specifically Poland, Lithuania, Slovakia, and prospective regional partners. The summit highlighted the vital economic contribution of documented foreign workers across logistics, advanced manufacturing, and engineering disciplines.",
        "The Polish Ministry of Internal Affairs affirmed its commitment to expanding digital case management platforms, reducing paperwork delays, and providing clearer guidance for accredited migration service agencies operating across the European Single Market."
      ]
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Arjun Sharma",
      role: "IT Professional",
      country: "Lithuania",
      text: "Human Power Service made my relocation to Lithuania seamless. Their team handled every document with precision and kept me informed every step of the way.",
      rating: 5,
      avatar: "AS",
    },
    {
      id: "2",
      name: "Maria Kowalska",
      role: "Nurse",
      country: "Slovakia",
      text: "I was nervous about the whole process, but HPS guided me through everything. Got my work permit approved in record time. Highly recommended!",
      rating: 5,
      avatar: "MK",
    },
    {
      id: "3",
      name: "Denis Petrović",
      role: "Engineer",
      country: "Serbia",
      text: "The Serbia programme was perfect for my situation. The single permit for work and residence simplified everything. Professional team, excellent results.",
      rating: 5,
      avatar: "DP",
    },
  ],

  process: [
    { step: 1, title: "Free Consultation", description: "Book a free session with our experts to assess your eligibility and discuss options." },
    { step: 2, title: "Document Preparation", description: "We collect and verify all required documents for your specific programme." },
    { step: 3, title: "Application Submission", description: "Our team submits your complete application to the relevant authorities." },
    { step: 4, title: "Processing & Follow-up", description: "We monitor your application progress and handle any queries from authorities." },
    { step: 5, title: "Permit Received", description: "Your work permit is approved — you're ready to start your new journey!" },
  ],
};

export type Service = typeof siteData.services[0];
export type NewsItem = typeof siteData.news[0];
export type Feature = typeof siteData.features[0];
