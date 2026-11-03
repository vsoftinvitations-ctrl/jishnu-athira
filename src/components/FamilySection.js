import { weddingData } from '../data/wedding-data.js';

export function renderFamilySection() {
  const { texts, bride, groom, invitationFrom } = weddingData;

  const groomParentsDisplay = `${groom.parents.fatherDisplay || `Sri. ${groom.parents.father}`}<br />&amp; ${groom.parents.motherDisplay || `Smt. ${groom.parents.mother}`}`;
  const brideParentsDisplay = `${bride.parents.fatherDisplay || `Sri. ${bride.parents.father}`}<br />&amp; ${bride.parents.motherDisplay || `Smt. ${bride.parents.mother}`}`;

  return `
    <section id="family-blessings" class="family-section">
      <h2 class="family-section-title reveal-on-scroll">
        ${texts.familyHeading}
      </h2>
      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>

      <div class="family-grid">
        <!-- Groom's Family -->
        <div class="kasavu-card family-card reveal-on-scroll reveal-delay-1">
          <div class="family-role-badge">Groom's Family</div>
          <div class="family-parent-names">
            ${groomParentsDisplay}
          </div>
          ${groom.parents.address ? `
            <div class="family-card-divider"></div>
            <div class="family-address-block">
              <span class="family-address-text">${groom.parents.address}</span>
            </div>
          ` : ''}
          ${groom.siblingsDisplay ? `
            <div class="family-card-divider"></div>
            <div class="family-siblings-block">
              <span class="family-sibling-label">${groom.siblingLabel || 'Siblings'}</span>
              <span class="family-sibling-names">${groom.siblingsDisplay}</span>
            </div>
          ` : ''}
        </div>

        <!-- Bride's Family -->
        <div class="kasavu-card family-card reveal-on-scroll reveal-delay-2">
          <div class="family-role-badge">Bride's Family</div>
          <div class="family-parent-names">
            ${brideParentsDisplay}
          </div>
          ${bride.parents.address ? `
            <div class="family-card-divider"></div>
            <div class="family-address-block">
              <span class="family-address-text">${bride.parents.address}</span>
            </div>
          ` : ''}
          ${bride.siblingsDisplay ? `
            <div class="family-card-divider"></div>
            <div class="family-siblings-block">
              <span class="family-sibling-label">${bride.siblingLabel || 'Sister'}</span>
              <span class="family-sibling-names">${bride.siblingsDisplay}</span>
            </div>
          ` : ''}
        </div>
      </div>

      ${invitationFrom ? `
        <!-- Invitation From Block -->
        <div class="invitation-from-container reveal-on-scroll reveal-delay-3">
          <div class="kasavu-card invitation-from-card">
            <div class="family-role-badge">${invitationFrom.label || 'Invitation From'}</div>
            <div class="invitation-from-names">${invitationFrom.names}</div>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}
