/* =============================================
   CARE & CONNECT — Organization Data & Filter
   ============================================= */

const organizations = [
  {
    id: 'giving-tree',
    name: 'The Giving Tree Global',
    aka: 'Formerly Bread of Life',
    category: 'Food & Community',
    shortDescription: 'Providing food security, clothing, and essential support to families in need across the community.',
    fullDescription: 'The Giving Tree Global (formerly Bread of Life) is dedicated to providing food security and essential resources to families in the Port Chester and Rye community. Through food pantry programs, holiday giving initiatives, and community outreach, they work to ensure no family goes without.',
    volunteerRoles: [
      'Food Pantry Operations',
      'Holiday Giving Programs',
      'Community Outreach',
      'Event Fundraising',
      'Administrative Support'
    ],
    website: 'https://www.givingtreeglobal.org/',
    volunteerUrl: 'https://www.givingtreeglobal.org/get-involved',
    logo: 'https://cdn0.handsonconnect.org/0101/Giving%20Tree%20Global.png',
    logoDark: false,
    minAge: 0,
    ageLabel: 'All Ages',
    ageBadgeClass: 'all',
    ageDetails: 'Volunteers of all ages are welcome. Families with children encouraged to participate together.',
    location: 'Port Chester, NY'
  },
  {
    id: 'carver-center',
    name: 'Carver Center',
    aka: null,
    category: 'Youth & Education',
    shortDescription: 'Youth development, education, and community programs serving Port Chester for over 80 years.',
    fullDescription: 'The Carver Center has been a cornerstone of the Port Chester community for over 80 years, providing youth development programs, after-school tutoring, summer camps, and senior services. Their mission is to empower youth and strengthen families through education, opportunity, and community support.',
    volunteerRoles: [
      'Youth Mentoring',
      'After-School Tutoring',
      'Summer Camp Support',
      'Senior Services',
      'Administrative Support'
    ],
    website: 'https://carvercenter.org/',
    volunteerUrl: 'https://carvercenter.org/volunteer/',
    logo: 'https://carvercenter.org/wp-content/uploads/2024/05/carvercenter_logo_no_tagline-e1716575428876.png',
    logoDark: false,
    minAge: 13,
    ageLabel: 'Ages 13+',
    ageBadgeClass: 'teen',
    ageDetails: 'Volunteers ages 13–15 must be accompanied by a parent or guardian at all times. Volunteers 16 and older may participate independently. All volunteers must complete an application and background check.',
    location: 'Port Chester, NY'
  },
  {
    id: 'don-bosco',
    name: 'Don Bosco Community Center',
    aka: null,
    category: 'Food & Social Services',
    shortDescription: 'Soup kitchen, food pantry, tutoring, ESL, and family services in Port Chester.',
    fullDescription: 'Don Bosco Community Center provides vital services to those in need in Port Chester, including a soup kitchen, food pantry, senior pantry, family closet, after-school tutoring, ESL programs, and weekend educational programs. Their mission is to serve the least among us with dignity and compassion.',
    volunteerRoles: [
      'Soup Kitchen',
      'Food Pantry',
      'Senior Pantry',
      'After-School Tutoring',
      'ESL Program',
      'Family Closet',
      'Read Aloud Saturday'
    ],
    website: 'https://www.donboscocenter.org/',
    volunteerUrl: 'https://www.donboscocenter.org/volunteer-sign-up/',
    logo: 'https://www.donboscocenter.org/wp-content/uploads/2023/01/cropped-Untitled-design-2-91x100.webp',
    logoDark: false,
    minAge: 0,
    ageLabel: 'All Ages',
    ageBadgeClass: 'all',
    ageDetails: 'Volunteers of all ages are welcome. Great opportunity for families. Contact the center for any age-specific requirements for individual programs.',
    location: 'Port Chester, NY'
  },
  {
    id: 'meals-on-main-st',
    name: 'Meals on Main St',
    aka: null,
    category: 'Food & Hunger',
    shortDescription: 'Cooking and delivering nutritious meals to community members and families in need.',
    fullDescription: 'Meals on Main St is dedicated to ensuring everyone in the community has access to nutritious food. Volunteers help cook, package, and deliver meals to individuals and families. Student volunteer opportunities are available and can count toward school community service requirements.',
    volunteerRoles: [
      'Meal Preparation',
      'Meal Delivery',
      'Event Support',
      'Corporate Volunteering',
      'Student Service Hours'
    ],
    website: 'https://www.mealsonmainst.org/',
    volunteerUrl: 'https://www.mealsonmainst.org/volunteer',
    logo: 'https://cdn.prod.website-files.com/682dc98d93017949992150d6/682e229a39967f1d636bbd94_logo%20white.svg',
    logoDark: true,
    minAge: 0,
    ageLabel: 'All Ages',
    ageBadgeClass: 'all',
    ageDetails: 'Open to volunteers of all ages including student volunteers. Student service hours available.',
    location: 'Port Chester, NY'
  },
  {
    id: 'backyard-sports',
    name: 'Backyard Sports Cares',
    aka: null,
    category: 'Youth & Sports',
    shortDescription: 'Sports-based youth mentoring and leadership development for student athletes.',
    fullDescription: 'Backyard Sports Cares uses the power of sports to mentor youth, build leaders, and strengthen communities. They are especially looking for young athletes and student leaders to volunteer as peer mentors — sharing their skills and passion for sports with younger children in the community.',
    volunteerRoles: [
      'Peer Sports Mentoring',
      'Youth Coaching Assistance',
      'Event Coordination',
      'Leadership Programs'
    ],
    website: 'https://byardsportscares.org/',
    volunteerUrl: 'https://byardsportscares.org/volunteer.html',
    logo: 'https://www.byardsportscares.org/images/img-logo.png',
    logoDark: false,
    minAge: 0,
    ageLabel: 'All Ages',
    ageBadgeClass: 'all',
    ageDetails: 'Especially seeking young athletes and student leaders to serve as peer mentors. Contact them at 914-304-4052 for volunteer details.',
    location: 'White Plains, NY'
  },
  {
    id: 'rye-nature-center',
    name: 'Rye Nature Center',
    aka: null,
    category: 'Environment & Wildlife',
    shortDescription: 'Wildlife care, conservation education, and environmental stewardship in Rye.',
    fullDescription: 'The Rye Nature Center connects people with the natural world through hands-on wildlife care, environmental education, citizen science, and trail stewardship. Volunteers help care for resident animals, maintain gardens and trails, and support educational programming for the community.',
    volunteerRoles: [
      'Animal Care (weekly/biweekly shifts)',
      'Garden & Trail Maintenance',
      'Citizen Science Programs',
      'Education Support',
      'Summer Programs (June–August)'
    ],
    website: 'https://www.ryenaturecenter.org/',
    volunteerUrl: 'https://www.ryenaturecenter.org/volunteer',
    logo: 'https://images.squarespace-cdn.com/content/v1/65e8ba235e20de12e1aa431a/48b0a2d4-dec0-4405-b88e-8e436377cb08/RNC%2B2017%2BPNG%2BLogo-01.png',
    logoDark: false,
    minAge: 14,
    ageLabel: 'Ages 14+',
    ageBadgeClass: 'teen',
    ageDetails: 'Animal volunteers must be at least 14 years old and commit to weekly or biweekly shifts for 8 weeks minimum. Summer volunteers (June–August) must be 15 or older.',
    location: 'Rye, NY'
  },
  {
    id: 'ymca-rye',
    name: 'YMCA of Rye',
    aka: null,
    category: 'Community & Health',
    shortDescription: 'Building healthy communities through fitness, youth development, and social responsibility programs.',
    fullDescription: 'The YMCA of Rye offers diverse volunteer opportunities for all ages through the Togetherhood program — one-day community service projects open to individuals, families, and groups. They also have student volunteer slots for high school seniors and college students, plus event committees and occasional positions.',
    volunteerRoles: [
      'Togetherhood Community Projects',
      'Student Volunteer Program (HS Seniors & College)',
      'Event Planning Committees',
      'Swim Lesson Aides',
      'Event Photography'
    ],
    website: 'https://ryeymca.org/',
    volunteerUrl: 'https://ryeymca.org/give/volunteer',
    logo: 'https://ryeymca.org/apple-touch-icon.png',
    logoDark: false,
    minAge: 0,
    ageLabel: 'All Ages',
    ageBadgeClass: 'all',
    ageDetails: 'Togetherhood program welcomes volunteers of all ages including families. Student volunteer slots are available for high school seniors and college students. Contact Denise Woodin at denisewoodin@ryeymca.org.',
    location: 'Rye, NY'
  },
  {
    id: 'ny-pet-rescue',
    name: 'New York Pet Rescue',
    aka: null,
    category: 'Animal Rescue',
    shortDescription: 'Rescuing, rehabilitating, and rehoming animals in need across New York.',
    fullDescription: 'New York Pet Rescue is dedicated to saving the lives of animals through rescue, rehabilitation, and adoption. Volunteers play a crucial role in dog walking, animal socialization, event support, and fostering. Due to the nature of working with animals, all volunteers must be 18 years of age or older.',
    volunteerRoles: [
      'Dog Walking',
      'Animal Socialization',
      'Foster Care',
      'Adoption Events',
      'Administrative Support'
    ],
    website: 'https://ny-petrescue.org/',
    volunteerUrl: 'https://ny-petrescue.org/volunteers',
    logo: 'https://www.ny-petrescue.org/files/_cache/0f24591fe8ac617a6988bbdf716fc0fe.jpg',
    logoDark: false,
    minAge: 18,
    ageLabel: 'Ages 18+',
    ageBadgeClass: 'adult',
    ageDetails: 'Must be at least 18 years old to volunteer in any capacity, including dog walking and animal care.',
    location: 'New York, NY'
  },
  {
    id: 'rye-youth-council',
    name: 'Rye Youth Council',
    aka: null,
    category: 'Youth & Mental Health',
    shortDescription: 'Supporting the social, emotional, and mental well-being of children, teens, and young adults in Rye.',
    fullDescription: 'Rye Youth Council is a nonprofit dedicated to the social emotional health and mental well-being of young people in the Rye community. Through classroom lessons, experiential learning, community service, workshops, and leadership opportunities, RYC engages, educates, and empowers youth. Volunteers can get involved as allies, event helpers, and mentors.',
    volunteerRoles: [
      'Community Events (Rainbow Run, etc.)',
      'Youth Program Support',
      'Student Community Service Hours',
      'Mental Health Awareness Outreach',
      'Administrative & Event Help'
    ],
    website: 'https://ryeyouthcouncil.org/',
    volunteerUrl: 'https://ryeyouthcouncil.org/become-an-ally',
    logo: 'https://ryeyouthcouncil.org/favicon.ico',
    logoDark: false,
    logoColor: '#3A6EA5',
    logoText: 'RYC',
    minAge: 13,
    ageLabel: 'Ages 13+',
    ageBadgeClass: 'teen',
    ageDetails: 'Open to teens and young adults. Students can earn community service hours through RYC programs and events. Contact RYC at office@ryeyouthcouncil.org or (914) 967-3838 for current opportunities.',
    location: 'Rye, NY'
  }
];

/* -------------------------------------------------
   Age filter thresholds (max age for the group)
   ------------------------------------------------- */
const AGE_FILTERS = {
  all:        null,   // show all
  elementary: 12,     // up to 12 — show orgs with minAge <= 8 (truly all-ages)
  middle:     15,     // 13–15 — show orgs with minAge <= 13
  high:       17,     // 16–17 — show orgs with minAge <= 16
  adult:      99      // 18+   — show all orgs with minAge <= 18
};

// Minimum representative age for each button's group
const AGE_MIN = {
  all:        0,
  elementary: 8,
  middle:     13,
  high:       16,
  adult:      18
};

/* -------------------------------------------------
   Build a single card
   ------------------------------------------------- */
function buildCard(org) {
  const card = document.createElement('div');
  card.className = 'org-card';
  card.dataset.id = org.id;

  const logoHtml = org.logo
    ? `<img src="${org.logo}" alt="${org.name} logo" onerror="this.parentElement.innerHTML=\`<div class='logo-fallback' style='background:${org.logoColor || '#1A5C85'}'>${org.logoText || org.name.slice(0,2).toUpperCase()}</div>\`">`
    : `<div class="logo-fallback" style="background:${org.logoColor || '#1A5C85'}">${org.logoText || org.name.slice(0,2).toUpperCase()}</div>`;

  card.innerHTML = `
    <div class="card-logo-area${org.logoDark ? ' dark-bg' : ''}">
      ${logoHtml}
    </div>
    <div class="card-body">
      <div>
        <div class="card-category">${org.category}</div>
        <div class="card-top">
          <div class="card-name">${org.name}</div>
          <span class="age-badge ${org.ageBadgeClass}">${org.ageLabel}</span>
        </div>
      </div>
      <p class="card-desc">${org.shortDescription}</p>
      <div class="card-footer">
        <button class="btn btn-primary" onclick="event.stopPropagation(); window.location.href='org.html?id=${org.id}'">Learn More</button>
        <a class="btn btn-outline" href="${org.volunteerUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Volunteer →</a>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `org.html?id=${org.id}`;
  });

  return card;
}

/* -------------------------------------------------
   Render / filter grid
   ------------------------------------------------- */
function renderGrid(activeFilter) {
  const grid = document.getElementById('orgGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsCount = document.getElementById('resultsCount');

  grid.innerHTML = '';

  const repAge = AGE_MIN[activeFilter];
  const filtered = activeFilter === 'all'
    ? organizations
    : organizations.filter(org => org.minAge <= repAge);

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    resultsCount.textContent = '0 organizations';
  } else {
    emptyState.style.display = 'none';
    resultsCount.textContent = `${filtered.length} organization${filtered.length !== 1 ? 's' : ''}`;
    filtered.forEach((org, i) => {
      const card = buildCard(org);
      card.style.animationDelay = `${i * 40}ms`;
      grid.appendChild(card);
    });
  }
}

/* -------------------------------------------------
   Filter button interactions
   ------------------------------------------------- */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.age);
    });
  });
}

/* -------------------------------------------------
   Init
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('all');
  initFilters();
});
