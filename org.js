/* =============================================
   CARE & CONNECT — Individual Org Page Logic
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const org = organizations.find(o => o.id === id);

  if (!org) {
    document.getElementById('orgName').textContent = 'Organization not found';
    document.getElementById('orgAbout').textContent = 'Please go back and select a valid organization.';
    return;
  }

  // Page title
  document.title = `${org.name} — Care & Connect`;

  // Hero logo
  const logoEl = document.getElementById('orgHeroLogo');
  if (org.logoDark) logoEl.classList.add('dark-bg');
  if (org.logo) {
    const img = document.createElement('img');
    img.src = org.logo;
    img.alt = `${org.name} logo`;
    img.onerror = function () {
      this.parentElement.innerHTML = `<div class="logo-fallback" style="background:${org.logoColor || '#1A5C85'}">${org.logoText || org.name.slice(0, 2).toUpperCase()}</div>`;
    };
    logoEl.appendChild(img);
  } else {
    logoEl.innerHTML = `<div class="logo-fallback" style="background:${org.logoColor || '#1A5C85'}">${org.logoText || org.name.slice(0, 2).toUpperCase()}</div>`;
  }

  // Hero text
  document.getElementById('orgCategory').textContent = org.category;
  document.getElementById('orgName').textContent = org.name;
  document.getElementById('orgTagline').textContent = org.shortDescription;

  const badgeEl = document.getElementById('orgAgeBadge');
  badgeEl.textContent = org.ageLabel;
  badgeEl.classList.add(org.ageBadgeClass);

  // About
  document.getElementById('orgAbout').textContent = org.fullDescription;
  const akaEl = document.getElementById('orgAka');
  if (org.aka) {
    akaEl.textContent = org.aka;
  } else {
    akaEl.style.display = 'none';
  }

  // Volunteer roles
  const rolesList = document.getElementById('volunteerRoles');
  org.volunteerRoles.forEach(role => {
    const li = document.createElement('li');
    li.textContent = role;
    rolesList.appendChild(li);
  });

  // Sidebar age
  document.getElementById('sidebarAgeLabel').textContent = org.ageLabel;
  document.getElementById('sidebarAgeDetail').textContent = org.ageDetails;

  // CTA buttons
  document.getElementById('ctaVolunteer').href = org.volunteerUrl;
  document.getElementById('ctaWebsite').href = org.website;

  // Meta
  document.getElementById('metaLocationText').textContent = org.location;
  document.getElementById('metaWebsiteLink').href = org.website;
  document.getElementById('metaVolunteerLink').href = org.volunteerUrl;
});
