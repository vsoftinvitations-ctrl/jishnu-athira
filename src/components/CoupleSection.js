import { weddingData } from '../data/wedding-data.js';

export function renderCoupleSection() {
  const { texts, bride, groom } = weddingData;

  const groomParentsStr = `S/o ${groom.parents.fatherDisplay || `Sri. ${groom.parents.father}`} &amp; ${groom.parents.motherDisplay || `Smt. ${groom.parents.mother}`}`;
  const brideParentsStr = `D/o ${bride.parents.fatherDisplay || `Sri. ${bride.parents.father}`} &amp; ${bride.parents.motherDisplay || `Smt. ${bride.parents.mother}`}`;

  const groomAddressStr = groom.parents.address || `${groom.parents.houseName ? `${groom.parents.houseName}, ` : ''}${groom.parents.city}`;
  const brideAddressStr = bride.parents.address || `${bride.parents.houseName ? `${bride.parents.houseName}, ` : ''}${bride.parents.city}`;

  return `
    <section id="couple-introduction" class="couple-section">
      <h2 class="couple-intro-heading reveal-on-scroll">
        ${texts.coupleIntroHeading}
      </h2>

      <div class="couple-cards-container">
        <!-- Groom Card -->
        <div class="kasavu-card couple-card reveal-on-scroll reveal-delay-1">
          <div class="couple-card-badge">The Groom</div>
          <h3 class="couple-name-title">${groom.name}</h3>
          <div class="couple-card-divider"></div>
          <div class="couple-card-parents">
            <p class="couple-parents-line">${groomParentsStr}</p>
            ${groomAddressStr ? `<p class="couple-address-line text-muted">${groomAddressStr}</p>` : ''}
            ${groom.siblingsDisplay ? `<p class="couple-sibling-line"><span class="couple-sibling-label">${(groom.siblingLabel || 'Siblings').endsWith(':') || (groom.siblingLabel || '').toLowerCase().endsWith('of') ? (groom.siblingLabel || 'Siblings') : `${groom.siblingLabel || 'Siblings'}:`}</span> <span class="couple-sibling-name">${groom.siblingsDisplay}</span></p>` : ''}
          </div>
        </div>

        <!-- Bride Card -->
        <div class="kasavu-card couple-card reveal-on-scroll reveal-delay-2">
          <div class="couple-card-badge">The Bride</div>
          <h3 class="couple-name-title">${bride.name}</h3>
          <div class="couple-card-divider"></div>
          <div class="couple-card-parents">
            <p class="couple-parents-line">${brideParentsStr}</p>
            ${brideAddressStr ? `<p class="couple-address-line text-muted">${brideAddressStr}</p>` : ''}
            ${bride.siblingsDisplay ? `<p class="couple-sibling-line"><span class="couple-sibling-label">${(bride.siblingLabel || 'Sister').endsWith(':') || (bride.siblingLabel || '').toLowerCase().endsWith('of') ? (bride.siblingLabel || 'Sister') : `${bride.siblingLabel || 'Sister'}:`}</span> <span class="couple-sibling-name">${bride.siblingsDisplay}</span></p>` : ''}
          </div>
        </div>
      </div>

      <div class="couple-tagline reveal-on-scroll">
        "${texts.coupleIntroTagline}"
      </div>

      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>
    </section>
  `;
}
