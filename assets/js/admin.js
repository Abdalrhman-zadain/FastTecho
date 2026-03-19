// Admin panel JS for adding jobs
// This uses localStorage for demo purposes

document.addEventListener('DOMContentLoaded', function () {
    // Demo credentials (change as needed)
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = '12345';

    const loginSection = document.getElementById('loginSection');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const adminSection = document.getElementById('adminSection');

    function showAdminPanel() {
        loginSection.style.display = 'none';
        adminSection.style.display = 'block';
    }

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            showAdminPanel();
        } else {
            loginError.style.display = 'block';
        }
    });

    // Job form logic
    const jobForm = document.getElementById('jobForm');
    const jobsList = document.getElementById('jobs');

    function loadJobs() {
        fetch('http://localhost:987654/jobs')
            .then(res => res.json())
            .then(jobs => {
                jobsList.innerHTML = '';
                jobs.forEach((job, idx) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${job.title}</strong> (${job.type}) - ${job.location}<br>${job.description}`;
                    jobsList.appendChild(li);
                });
            })
            .catch(() => {
                jobsList.innerHTML = '<li style="color:red">Could not load jobs from server.</li>';
            });
    }

    if (jobForm) {
        jobForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const job = {
                title: jobForm.title.value,
                description: jobForm.description.value,
                location: jobForm.location.value,
                type: jobForm.type.value
            };
            fetch('http://localhost:987654/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(job)
            })
                .then(res => {
                    if (!res.ok) throw new Error('Failed to add job');
                    return res.json();
                })
                .then(() => {
                    jobForm.reset();
                    loadJobs();
                })
                .catch(() => {
                    alert('Could not add job. Please try again.');
                });
        });
    }

    loadJobs();
});
