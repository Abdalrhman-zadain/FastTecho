/* ========================================
   Main UI Interactions
   ======================================== */

(function () {

    // ========================================
    // Contact Form
    // ========================================

    var contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        var submitButton = contactForm.querySelector(".submit-btn");
        var formStatus = document.getElementById("formStatus");
        var contactSubmitUrl = "https://formsubmit.co/ajax/info@fasttechno.online";

        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            submitButton.disabled = true;
            var lang = window.FT ? window.FT.getLang() : "en";
            var t = window.FT ? window.FT.translations[lang] : {};
            formStatus.textContent = t.form_sending || "Sending...";

            var formData = new FormData(contactForm);

            try {
                var response = await fetch(contactSubmitUrl, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Submit failed");
                }

                formStatus.textContent = t.form_success || "Message sent!";
                contactForm.reset();
            } catch (error) {
                formStatus.textContent = t.form_error || "Unable to send.";
            } finally {
                submitButton.disabled = false;
            }
        });
    }

    // ========================================
    // Mouse Glow Effect for Cards
    // ========================================

    var hero = document.querySelector(".hero");

    function updateHeroMotion(clientX, clientY) {
        if (!hero) return;

        var rect = hero.getBoundingClientRect();
        if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
            return;
        }

        var x = clientX - rect.left;
        var y = clientY - rect.top;
        var xRatio = x / rect.width;
        var yRatio = y / rect.height;
        var nx = xRatio - 0.5;
        var ny = yRatio - 0.5;

        hero.style.setProperty("--hero-mx", (xRatio * 100).toFixed(2) + "%");
        hero.style.setProperty("--hero-my", (yRatio * 100).toFixed(2) + "%");
        hero.style.setProperty("--hero-orb1-x", (nx * 44).toFixed(1) + "px");
        hero.style.setProperty("--hero-orb1-y", (ny * 36).toFixed(1) + "px");
        hero.style.setProperty("--hero-orb2-x", (-nx * 34).toFixed(1) + "px");
        hero.style.setProperty("--hero-orb2-y", (-ny * 28).toFixed(1) + "px");
        hero.style.setProperty("--hero-tilt-x", (-ny * 3.8).toFixed(2) + "deg");
        hero.style.setProperty("--hero-tilt-y", (nx * 4.8).toFixed(2) + "deg");
        hero.style.setProperty("--hero-shimmer-pos", (50 + nx * 90).toFixed(2) + "%");
    }

    function resetHeroMotion() {
        if (!hero) return;
        hero.style.setProperty("--hero-mx", "50%");
        hero.style.setProperty("--hero-my", "32%");
        hero.style.setProperty("--hero-orb1-x", "0px");
        hero.style.setProperty("--hero-orb1-y", "0px");
        hero.style.setProperty("--hero-orb2-x", "0px");
        hero.style.setProperty("--hero-orb2-y", "0px");
        hero.style.setProperty("--hero-tilt-x", "0deg");
        hero.style.setProperty("--hero-tilt-y", "0deg");
        hero.style.setProperty("--hero-shimmer-pos", "50%");
    }

    document.addEventListener("mousemove", function (e) {
        document.querySelectorAll(".glow-card").forEach(function (card) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
        });

        updateHeroMotion(e.clientX, e.clientY);
    });

    if (hero) {
        hero.addEventListener("mouseleave", resetHeroMotion);
    }

    // ========================================
    // Header Scroll Effect
    // ========================================

    var nav = document.querySelector(".site-nav");
    function updateHeaderState() {
        if (!nav) return;
        nav.classList.toggle("nav-scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", updateHeaderState);
    updateHeaderState();

    // ========================================
    // Scroll Progress Bar
    // ========================================

    var progressRoot = document.createElement("div");
    progressRoot.className = "scroll-progress";
    progressRoot.setAttribute("aria-hidden", "true");
    var progressFill = document.createElement("div");
    progressFill.className = "scroll-progress-fill";
    progressRoot.appendChild(progressFill);
    document.body.appendChild(progressRoot);

    function updateScrollProgress() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        var doc = document.documentElement;
        var maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 0);
        var percent = maxScroll ? Math.min((scrollTop / maxScroll) * 100, 100) : 0;
        progressFill.style.width = percent + "%";
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    // ========================================
    // Active Nav Link on Scroll
    // ========================================

    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        var current = "";
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    // ========================================
    // Scroll Reveal Animations
    // ========================================

    var revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(function (el) {
        revealObserver.observe(el);
    });

    // ========================================
    // Counter Animation (data-counter)
    // ========================================

    var counterObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                var el = entry.target;
                var target = Number(el.getAttribute("data-counter")) || 0;
                var suffix = el.getAttribute("data-suffix") || "";
                var duration = 1400;
                var start = performance.now();

                function update(now) {
                    var progress = Math.min((now - start) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var value = Math.round(target * eased);
                    el.textContent = value + suffix;
                    if (progress < 1) requestAnimationFrame(update);
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll("[data-counter]").forEach(function (counter) {
        counterObserver.observe(counter);
    });

    // ========================================
    // Carousel
    // ========================================

    var track = document.getElementById("carouselTrack");
    if (track) {
        var slides = Array.from(track.children);
        var prevBtn = document.getElementById("carouselPrev");
        var nextBtn = document.getElementById("carouselNext");
        var dotsWrap = document.getElementById("carouselDots");
        var carousel = document.getElementById("showcaseCarousel");
        var index = 0;
        var autoTimer;
        var startX = 0;
        var deltaX = 0;

        function getPerView() {
            if (window.innerWidth <= 640) return 1;
            if (window.innerWidth <= 1080) return 2;
            return 3;
        }

        function getMaxIndex() {
            return Math.max(0, slides.length - getPerView());
        }

        function buildDots() {
            var pages = getMaxIndex() + 1;
            dotsWrap.innerHTML = "";
            for (var i = 0; i < pages; i += 1) {
                var dot = document.createElement("button");
                dot.type = "button";
                dot.className = "carousel-dot";
                dot.setAttribute("aria-label", "Go to slide " + (i + 1));
                (function (idx) {
                    dot.addEventListener("click", function () {
                        index = idx;
                        updateCarousel();
                        restartAutoplay();
                    });
                })(i);
                dotsWrap.appendChild(dot);
            }
        }

        function updateDots() {
            var dots = dotsWrap.querySelectorAll(".carousel-dot");
            dots.forEach(function (dot, i) {
                dot.classList.toggle("active", i === index);
            });
        }

        function updateCarousel() {
            var max = getMaxIndex();
            if (index > max) index = 0;
            if (index < 0) index = max;

            var slideWidth = slides[0].getBoundingClientRect().width;
            var gap = parseFloat(getComputedStyle(track).gap) || 0;
            var offset = index * (slideWidth + gap);
            track.style.transform = "translateX(-" + offset + "px)";
            updateDots();
        }

        function nextSlide() {
            index = index + 1;
            if (index > getMaxIndex()) index = 0;
            updateCarousel();
        }

        function prevSlide() {
            index = index - 1;
            if (index < 0) index = getMaxIndex();
            updateCarousel();
        }

        function restartAutoplay() {
            clearInterval(autoTimer);
            autoTimer = setInterval(nextSlide, 3600);
        }

        nextBtn.addEventListener("click", function () {
            nextSlide();
            restartAutoplay();
        });

        prevBtn.addEventListener("click", function () {
            prevSlide();
            restartAutoplay();
        });

        carousel.addEventListener("touchstart", function (event) {
            startX = event.changedTouches[0].clientX;
            deltaX = 0;
        }, { passive: true });

        carousel.addEventListener("touchmove", function (event) {
            deltaX = event.changedTouches[0].clientX - startX;
        }, { passive: true });

        carousel.addEventListener("touchend", function () {
            var threshold = 45;
            if (Math.abs(deltaX) > threshold) {
                if (deltaX < 0) nextSlide();
                else prevSlide();
                restartAutoplay();
            }
            deltaX = 0;
        }, { passive: true });

        window.addEventListener("resize", function () {
            buildDots();
            updateCarousel();
        });

        carousel.addEventListener("mouseenter", function () {
            clearInterval(autoTimer);
        });

        carousel.addEventListener("mouseleave", function () {
            restartAutoplay();
        });

        buildDots();
        updateCarousel();
        restartAutoplay();
    }

})();
