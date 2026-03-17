/* ========================================
   Service Page Interactions
   ======================================== */

(function () {

    // ========================================
    // Tech Stack Tabs
    // ========================================

    var tabBtns = document.querySelectorAll(".tech-tab-btn");
    var tabPanels = document.querySelectorAll(".tech-tab-panel");

    tabBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var tab = btn.getAttribute("data-tab");
            tabBtns.forEach(function (b) { b.classList.remove("active"); });
            tabPanels.forEach(function (p) { p.classList.remove("active"); });
            btn.classList.add("active");
            var panel = document.querySelector('[data-panel="' + tab + '"]');
            if (panel) panel.classList.add("active");
        });
    });

    // ========================================
    // Stat Counter Animation (data-target)
    // ========================================

    var statNumbers = document.querySelectorAll(".stat-number[data-target]");

    function animateCounter(el) {
        var target = parseInt(el.getAttribute("data-target"), 10);
        var decimal = el.getAttribute("data-decimal") || "";
        var duration = 1800;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = current + (progress >= 1 ? decimal : "");
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    if (statNumbers.length) {
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(function (el) {
            statObserver.observe(el);
        });
    }

    // ========================================
    // Before & After Slider
    // ========================================

    document.querySelectorAll(".ba-slider").forEach(function (slider) {
        var afterImg = slider.querySelector(".ba-after");
        var handle = slider.querySelector(".ba-handle");
        var isDragging = false;

        function updatePosition(x) {
            var rect = slider.getBoundingClientRect();
            var offset = Math.max(0, Math.min(x - rect.left, rect.width));
            var pct = (offset / rect.width) * 100;
            afterImg.style.clipPath = "inset(0 " + (100 - pct) + "% 0 0)";
            handle.style.left = pct + "%";
        }

        slider.addEventListener("mousedown", function (e) {
            isDragging = true;
            updatePosition(e.clientX);
        });

        window.addEventListener("mousemove", function (e) {
            if (isDragging) updatePosition(e.clientX);
        });

        window.addEventListener("mouseup", function () {
            isDragging = false;
        });

        slider.addEventListener("touchstart", function (e) {
            isDragging = true;
            updatePosition(e.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener("touchmove", function (e) {
            if (isDragging) updatePosition(e.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener("touchend", function () {
            isDragging = false;
        });
    });

})();
