// Fetch and display jobs from backend API

document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.offering-grid');
    if (!grid) return;

    fetch('http://localhost:3001/jobs')
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok: ' + res.status);
            return res.json();
        })
        .then(jobs => {
            console.log('Jobs received from backend:', jobs);
            grid.innerHTML = '';
            if (jobs.length === 0) {
                grid.innerHTML = '<p>No open positions at the moment.</p>';
                return;
            }
            jobs.forEach((job, idx) => {
                const card = document.createElement('article');
                const delayClass = idx < 3 ? `delay-${idx + 1}` : '';
                // Cards are injected after the initial reveal observer runs, so force visible state.
                card.className = `offering-card reveal in-view ${delayClass} glow-card`.trim();
                card.innerHTML = `
                        <h3>${job.title}</h3>
                        <p> ${job.description}</p>
                        <div style="margin-bottom: 8px;">
                            <span style="font-weight:bold;">Type:</span> ${job.type} &nbsp;|&nbsp; <span style="font-weight:bold;">Location:</span> ${job.location}
                        </div>
                        <a href="../../index.html#contact" class="btn btn-secondary" data-i18n="career_open_apply_now">Apply Now</a>
                    `;
                grid.appendChild(card);
            });
        })
        .catch((err) => {
            console.error('Error fetching jobs:', err);
            grid.innerHTML = `<p style="color:red">Could not load jobs from server.<br>${err.message}</p>`;
        });
});
