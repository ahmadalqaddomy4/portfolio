document.addEventListener('DOMContentLoaded', () => {
    const data = PORTFOLIO_CONTENT;

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }
    });

    // --- Populate Highlights ---
    const highlightsGrid = document.getElementById('highlights-grid');
    if (highlightsGrid && data.highlights) {
        data.highlights.forEach(item => {
            const card = document.createElement('div');
            card.className = 'highlight-card';
            card.innerHTML = `
                <span class="highlight-val">${item.value.replace(/•/g, '<br>')}</span>
                <span class="highlight-label">${item.label}</span>
            `;
            highlightsGrid.appendChild(card);
        });
    }

    // --- Populate Reels with Instagram Embeds ---
    const reelsGrid = document.getElementById('reels-grid');
    if (reelsGrid && data.sections.reels.items) {
        data.sections.reels.items.forEach((reel) => {
            const embedContainer = document.createElement('div');
            embedContainer.className = 'instagram-embed-wrapper';
            embedContainer.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
            `;

            // Create Instagram blockquote embed
            const blockquote = document.createElement('blockquote');
            blockquote.className = 'instagram-media';
            blockquote.setAttribute('data-instgrm-permalink', reel.url);
            blockquote.setAttribute('data-instgrm-version', '14');
            blockquote.style.cssText = `
                background: #FFF;
                border: 0;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                margin: 1px;
                max-width: 540px;
                min-width: 326px;
                padding: 0;
                width: 99.375%;
            `;

            embedContainer.appendChild(blockquote);
            reelsGrid.appendChild(embedContainer);
        });

        // Load Instagram embed script after creating all blockquotes
        if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = '//www.instagram.com/embed.js';
            document.body.appendChild(script);
        } else {
            // If script already exists, process the embeds
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }
    }

    // --- Populate Brands with Logos ---
    const brandsList = document.getElementById('brands-list');
    if (brandsList) {
        // Display brand logos (1.png through 14.png)
        for (let i = 1; i <= 14; i++) {
            const logoContainer = document.createElement('div');
            logoContainer.className = 'brand-logo-container';
            logoContainer.style.cssText = `
                padding: 20px;
                background: white;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                border: 1px solid #EAEAEA;
                min-width: 150px;
                height: 100px;
            `;

            const img = document.createElement('img');
            img.src = `assets/brands/${i}.png`;
            img.alt = `Brand ${i}`;
            img.style.cssText = `
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                filter: grayscale(100%);
                transition: filter 0.3s ease;
            `;

            // Hover effect to show color
            logoContainer.addEventListener('mouseenter', () => {
                img.style.filter = 'grayscale(0%)';
                logoContainer.style.transform = 'translateY(-5px)';
                logoContainer.style.boxShadow = '0 10px 30px rgba(245, 124, 31, 0.15)';
            });

            logoContainer.addEventListener('mouseleave', () => {
                img.style.filter = 'grayscale(100%)';
                logoContainer.style.transform = 'translateY(0)';
                logoContainer.style.boxShadow = 'none';
            });

            logoContainer.appendChild(img);
            brandsList.appendChild(logoContainer);
        }
    }

    // --- Populate Timeline ---
    const timeline = document.getElementById('timeline-track');
    if (timeline && data.sections.experience_timeline) {
        data.sections.experience_timeline.forEach(role => {
            const card = document.createElement('div');
            card.className = 'timeline-card';

            let highlightsHtml = '';
            if (role.highlights && role.highlights.length > 0) {
                highlightsHtml = '<ul class="service-list" style="margin-top: 15px;">';
                role.highlights.forEach(h => {
                    highlightsHtml += `<li>${h}</li>`;
                });
                highlightsHtml += '</ul>';
            }

            card.innerHTML = `
                <span class="text-orange" style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">${role.duration_label}</span>
                <h3 style="font-size: 1.25rem; margin: 5px 0;">${role.role}</h3>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span style="font-weight: 500; color: var(--text-muted);">${role.company}</span>
                    <span style="font-size: 0.85rem; background: var(--surface); padding: 4px 8px; border-radius: 4px;">${role.type || 'Future'}</span>
                </div>
                ${highlightsHtml}
            `;
            timeline.appendChild(card);
        });
    }

    // --- Populate Skills ---
    const hardSkills = document.getElementById('hard-skills');
    const softSkills = document.getElementById('soft-skills');

    if (data.sections.skills.hard) {
        data.sections.skills.hard.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerText = skill;
            hardSkills.appendChild(tag);
        });
    }
    if (data.sections.skills.soft) {
        data.sections.skills.soft.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerText = skill;
            softSkills.appendChild(tag);
        });
    }

    // --- Populate References ---
    const refsGrid = document.getElementById('references-grid');
    if (refsGrid && data.sections.references) {
        data.sections.references.forEach(ref => {
            const card = document.createElement('div');
            card.className = 'highlight-card'; // Reuse style
            card.style.textAlign = 'left';
            card.innerHTML = `
                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 20px;">"${ref.letter_summary}"</p>
                <div>
                    <strong style="display: block; font-size: 1.1rem;">${ref.name}</strong>
                    <span style="font-size: 0.9rem; color: var(--primary);">${ref.title}</span>
                </div>
            `;
            refsGrid.appendChild(card);
        });
    }

    // Re-render icons after dynamic content
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
