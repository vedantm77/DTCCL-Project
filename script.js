/* ==========================================
   TRUSTSPHERE - INTERACTIVE JAVASCRIPT
   ========================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // NAVIGATION - MOBILE MENU
    // ==========================================
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // ==========================================
    // SCROLL ANIMATIONS - FADE IN
    // ==========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // ==========================================
    // TOOLTIPS
    // ==========================================
    
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.scrollY + 'px';
            
            setTimeout(() => tooltip.classList.add('show'), 10);
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.classList.remove('show');
                setTimeout(() => {
                    if (this._tooltip && this._tooltip.parentNode) {
                        this._tooltip.parentNode.removeChild(this._tooltip);
                    }
                }, 300);
            }
        });
    });

    // ==========================================
    // FLOATING PARTICLES (HERO SECTION)
    // ==========================================
    
    const particlesContainer = document.querySelector('.floating-particles');
    
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // ==========================================
    // MODULE 1: DARK PATTERNS SIMULATION
    // ==========================================
    
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');
    const acceptMessage = document.getElementById('acceptMessage');
    const showSolutionBtn = document.getElementById('showSolutionBtn');
    const solutionContent = document.getElementById('solutionContent');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            // Scroll to message
            acceptMessage.classList.remove('hidden');
            acceptMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add shake animation to emphasize the consequences
            acceptMessage.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                acceptMessage.style.animation = '';
            }, 500);
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            alert('Good choice! Always read the fine print and question suspicious design patterns.');
        });
    }
    
    if (showSolutionBtn) {
        showSolutionBtn.addEventListener('click', function() {
            solutionContent.classList.remove('hidden');
            solutionContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Hide the button after clicking
            showSolutionBtn.style.display = 'none';
        });
    }

    // ==========================================
    // MODULE 2: PRIVACY SIMULATION
    // ==========================================
    
    const startSimulation = document.getElementById('startSimulation');
    const resetSimulation = document.getElementById('resetSimulation');
    const trackingVisualization = document.getElementById('trackingVisualization');
    const showProtectionBtn = document.getElementById('showProtectionBtn');
    const protectionContent = document.getElementById('protectionContent');
    
    if (startSimulation) {
        startSimulation.addEventListener('click', function() {
            // Show tracking visualization
            trackingVisualization.classList.remove('hidden');
            
            // Animate the tracking layers appearing
            const layers = trackingVisualization.querySelectorAll('.tracking-layer');
            layers.forEach((layer, index) => {
                setTimeout(() => {
                    layer.style.animation = 'slideInRight 0.5s ease-out forwards';
                }, index * 300);
            });
            
            // Change button states
            startSimulation.classList.add('hidden');
            resetSimulation.classList.remove('hidden');
            
            // Scroll to visualization
            setTimeout(() => {
                trackingVisualization.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
            
            // Animate the tracked items
            animateTrackedItems();
        });
    }
    
    if (resetSimulation) {
        resetSimulation.addEventListener('click', function() {
            trackingVisualization.classList.add('hidden');
            startSimulation.classList.remove('hidden');
            resetSimulation.classList.add('hidden');
        });
    }
    
    function animateTrackedItems() {
        const trackedItems = document.querySelectorAll('.tracked-item');
        trackedItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'pulse 0.5s ease-in-out';
                const status = item.querySelector('.item-status');
                if (status) {
                    status.style.animation = 'blink 1s ease-in-out infinite';
                }
            }, index * 200);
        });
    }
    
    if (showProtectionBtn) {
        showProtectionBtn.addEventListener('click', function() {
            protectionContent.classList.remove('hidden');
            protectionContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Animate protection layers
            const protectionLayers = protectionContent.querySelectorAll('.protection-layer');
            protectionLayers.forEach((layer, index) => {
                setTimeout(() => {
                    layer.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, index * 200);
            });
            
            showProtectionBtn.style.display = 'none';
        });
    }

    // ==========================================
    // MODULE 3: DATA BREACH SIMULATION
    // ==========================================
    
    const startBreachSim = document.getElementById('startBreachSim');
    const stopBreachSim = document.getElementById('stopBreachSim');
    const breachLog = document.getElementById('breachLog');
    const breachImpact = document.getElementById('breachImpact');
    const dataFlow = document.getElementById('dataFlow');
    const healthStatus = document.getElementById('healthStatus');
    const showDefenseBtn = document.getElementById('showDefenseBtn');
    const defenseContent = document.getElementById('defenseContent');
    
    let breachInterval;
    let particleInterval;
    
    if (startBreachSim) {
        startBreachSim.addEventListener('click', function() {
            // Show breach log and impact
            breachLog.classList.remove('hidden');
            
            // Change health status
            if (healthStatus) {
                setTimeout(() => healthStatus.innerHTML = '🟡 Under Attack', 500);
                setTimeout(() => healthStatus.innerHTML = '🔴 Compromised', 3000);
            }
            
            // Start data breach animation
            startDataBreachAnimation();
            
            // Show breach impact after animation
            setTimeout(() => {
                breachImpact.classList.remove('hidden');
                breachImpact.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 4000);
            
            // Change button states
            startBreachSim.classList.add('hidden');
            stopBreachSim.classList.remove('hidden');
        });
    }
    
    if (stopBreachSim) {
        stopBreachSim.addEventListener('click', function() {
            // Stop animations
            clearInterval(breachInterval);
            clearInterval(particleInterval);
            
            // Clear data flow
            if (dataFlow) {
                dataFlow.innerHTML = '';
            }
            
            // Reset UI
            breachLog.classList.add('hidden');
            breachImpact.classList.add('hidden');
            
            if (healthStatus) {
                healthStatus.innerHTML = '🟢 Secure';
            }
            
            startBreachSim.classList.remove('hidden');
            stopBreachSim.classList.add('hidden');
        });
    }
    
    function startDataBreachAnimation() {
        let particleCount = 0;
        const maxParticles = 50;
        
        particleInterval = setInterval(() => {
            if (particleCount >= maxParticles) {
                clearInterval(particleInterval);
                return;
            }
            
            createDataParticle();
            particleCount++;
        }, 100);
    }
    
    function createDataParticle() {
        if (!dataFlow) return;
        
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        
        // Random data icon
        const icons = ['📧', '💳', '🔑', '📱', '👤', '📄'];
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];
        
        // Random starting position (from database area)
        particle.style.left = '20%';
        particle.style.top = Math.random() * 100 + '%';
        
        dataFlow.appendChild(particle);
        
        // Animate to attacker side
        setTimeout(() => {
            particle.style.left = '80%';
            particle.style.opacity = '0';
        }, 50);
        
        // Remove after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
    
    if (showDefenseBtn) {
        showDefenseBtn.addEventListener('click', function() {
            defenseContent.classList.remove('hidden');
            defenseContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Animate defense cards
            const defenseCards = defenseContent.querySelectorAll('.defense-card');
            defenseCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = 'scaleIn 0.5s ease-out forwards';
                }, index * 150);
            });
            
            showDefenseBtn.style.display = 'none';
        });
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // CURSOR GLOW EFFECT
    // ==========================================
    
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursorGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateCursorGlow);
    }
    
    animateCursorGlow();

    // ==========================================
    // MODULE CARD HOVER EFFECTS
    // ==========================================
    
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // ==========================================
    // LOADING ANIMATION COMPLETE
    // ==========================================
    
    console.log('%c🛡️ TrustSphere Loaded Successfully', 'color: #00f0ff; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with transparency and security in mind.', 'color: #a0aec0; font-size: 12px;');
});
