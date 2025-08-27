// Project data
const projectsData = [
    // Wireframes
    {
        id: 1,
        title: "E-commerce Mobile App",
        description:
            "Initial wireframe concepts for a fashion e-commerce mobile application",
        category: "wireframes",
        imageUrl:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "E-commerce mobile app wireframe sketches on paper",
        details: {
            overview:
                "Complete wireframing process for a fashion e-commerce mobile application. This project involved extensive user flow mapping and information architecture planning to create an intuitive shopping experience.",
            keyActivities: [
                "User journey mapping and flow creation",
                "Low-fidelity wireframe sketching",
                "Information architecture planning",
                "Mobile-first responsive considerations",
                "Stakeholder feedback integration",
            ],
            tools: ["Sketch", "Figma", "Miro", "POP"],
            challenges:
                "Balancing feature complexity with mobile screen constraints while maintaining intuitive navigation.",
            outcomes:
                "Reduced development time by 30% through clear wireframe specifications and improved user flow clarity.",
        },
    },
    {
        id: 2,
        title: "Analytics Dashboard",
        description:
            "Information architecture wireframes for a data analytics platform",
        category: "wireframes",
        imageUrl:
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Dashboard wireframe layout sketches with grid system",
        details: {
            overview:
                "Comprehensive wireframing for a complex data analytics dashboard, focusing on information hierarchy and data visualization placement.",
            keyActivities: [
                "Data hierarchy mapping",
                "Grid system development",
                "Component library planning",
                "Responsive breakpoint planning",
            ],
            tools: ["Figma", "Whimsical", "Notion"],
            challenges:
                "Organizing complex data sets into digestible visual hierarchies without overwhelming users.",
            outcomes:
                "Improved data comprehension scores by 45% in subsequent user testing.",
        },
    },
    {
        id: 3,
        title: "Social Media Platform",
        description:
            "User flow wireframes for a new social networking application",
        category: "wireframes",
        imageUrl:
            "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Social media app wireframe user flow sketches",
        details: {
            overview:
                "Strategic wireframing for a social networking platform focusing on user engagement and content discovery mechanisms.",
            keyActivities: [
                "User flow documentation",
                "Content hierarchy planning",
                "Interaction pattern definition",
                "Privacy setting wireframes",
            ],
            tools: ["Figma", "Draw.io", "UserFlow"],
            challenges:
                "Balancing social features with privacy concerns and content moderation requirements.",
            outcomes:
                "Successful launch with 25% higher engagement rates than industry average.",
        },
    },
    {
        id: 4,
        title: "Mobile Banking Security",
        description:
            "Security-focused wireframes for mobile banking authentication",
        category: "wireframes",
        imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Banking app wireframe security flow sketches",
        details: {
            overview:
                "Security-first wireframing approach for mobile banking authentication flows, ensuring both usability and robust security measures.",
            keyActivities: [
                "Security flow mapping",
                "Biometric integration planning",
                "Error state wireframing",
                "Accessibility compliance planning",
            ],
            tools: ["Figma", "Lucidchart", "Security audit tools"],
            challenges:
                "Maintaining user-friendly experience while implementing stringent security requirements.",
            outcomes:
                "Achieved 99.9% security compliance with minimal impact on user experience metrics.",
        },
    },

    // Prototypes
    {
        id: 5,
        title: "HealthCare Connect",
        description:
            "Interactive prototype for telehealth consultation platform",
        category: "prototypes",
        imageUrl:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Healthcare app high-fidelity prototype on mobile device",
        details: {
            overview:
                "High-fidelity interactive prototype for a telehealth consultation platform focusing on accessibility and ease of use for elderly patients.",
            keyActivities: [
                "Interactive prototype development",
                "Accessibility-focused design decisions",
                "User testing and iteration cycles",
                "Cross-platform compatibility testing",
                "Healthcare compliance validation",
            ],
            tools: ["Figma", "ProtoPie", "Principle", "InVision"],
            challenges:
                "Designing for elderly users while maintaining modern interface standards and healthcare regulations.",
            outcomes:
                "95% user satisfaction rate among elderly test participants and successful HIPAA compliance.",
        },
    },
    {
        id: 6,
        title: "WanderLust Travel",
        description:
            "High-fidelity prototype for travel booking and itinerary planning",
        category: "prototypes",
        imageUrl:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Travel booking app prototype interface design",
        details: {
            overview:
                "Comprehensive travel booking prototype with advanced itinerary planning features and real-time booking integration.",
            keyActivities: [
                "Multi-step booking flow prototyping",
                "Interactive map integration",
                "Real-time data simulation",
                "Payment flow optimization",
            ],
            tools: ["Figma", "Framer", "After Effects", "Lottie"],
            challenges:
                "Integrating complex booking flows with multiple vendors while maintaining simple user experience.",
            outcomes:
                "Increased booking conversion rates by 35% and reduced support tickets by 50%.",
        },
    },
    {
        id: 7,
        title: "TaskFlow Pro",
        description:
            "Desktop prototype for project management and team collaboration",
        category: "prototypes",
        imageUrl:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Productivity app desktop prototype showing task management",
        details: {
            overview:
                "Enterprise-level project management prototype with advanced collaboration features and real-time synchronization.",
            keyActivities: [
                "Desktop interface prototyping",
                "Real-time collaboration simulation",
                "Advanced filtering and search",
                "Custom workflow builder",
            ],
            tools: ["Figma", "ProtoPie", "Zeplin", "Abstract"],
            challenges:
                "Creating scalable interface for teams of varying sizes while maintaining performance.",
            outcomes:
                "Adopted by 200+ companies with 90% user retention rate after 6 months.",
        },
    },
    {
        id: 8,
        title: "LearnHub Academy",
        description:
            "Interactive prototype for online learning and course management",
        category: "prototypes",
        imageUrl:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "E-learning platform prototype with course interface",
        details: {
            overview:
                "Educational platform prototype featuring adaptive learning paths and comprehensive progress tracking.",
            keyActivities: [
                "Learning path visualization",
                "Progress tracking interfaces",
                "Video player customization",
                "Assessment tool prototyping",
            ],
            tools: ["Figma", "Principle", "Loom", "Maze"],
            challenges:
                "Accommodating different learning styles while maintaining consistent progress tracking.",
            outcomes:
                "40% improvement in course completion rates and 60% increase in student engagement.",
        },
    },

    // Research
    {
        id: 9,
        title: "Fintech User Interviews",
        description:
            "In-depth user interviews to understand financial app usage patterns",
        category: "research",
        imageUrl:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "User interview session with notes and recording equipment",
        details: {
            overview:
                "Comprehensive user research study involving 25+ interviews with fintech app users to understand pain points and usage patterns across different demographics.",
            keyActivities: [
                "Participant recruitment and screening",
                "Interview protocol development",
                "Qualitative data analysis",
                "Insights synthesis and recommendations",
                "Stakeholder presentation preparation",
            ],
            tools: ["Zoom", "Otter.ai", "Miro", "Airtable", "Dovetail"],
            challenges:
                "Recruiting diverse participants and uncovering sensitive financial behavior patterns.",
            outcomes:
                "Identified 12 key pain points leading to 30% increase in user satisfaction scores.",
        },
    },
    {
        id: 10,
        title: "E-commerce Personas",
        description:
            "User personas and journey mapping for retail platform redesign",
        category: "research",
        imageUrl:
            "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "User persona charts and customer journey mapping on wall",
        details: {
            overview:
                "Comprehensive persona development and customer journey mapping project for a major retail platform redesign initiative.",
            keyActivities: [
                "Customer survey analysis (500+ responses)",
                "Behavioral data analysis",
                "Persona development and validation",
                "Journey mapping workshops",
                "Stakeholder alignment sessions",
            ],
            tools: ["Hotjar", "Google Analytics", "Miro", "Airtable", "Figma"],
            challenges:
                "Reconciling conflicting data sources and stakeholder assumptions about user behavior.",
            outcomes:
                "Improved conversion rates by 25% and reduced cart abandonment by 40%.",
        },
    },
    {
        id: 11,
        title: "Mobile App Usability",
        description:
            "Usability testing sessions for mobile banking application",
        category: "research",
        imageUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Usability testing session with participant using tablet",
        details: {
            overview:
                "Comprehensive usability testing program for a mobile banking application, focusing on security features and user task completion rates.",
            keyActivities: [
                "Test protocol development",
                "Moderated testing sessions",
                "Task completion analysis",
                "Error pattern identification",
                "Recommendation prioritization",
            ],
            tools: [
                "Maze",
                "Lookback",
                "Hotjar",
                "UserTesting",
                "Optimal Workshop",
            ],
            challenges:
                "Testing sensitive banking features while maintaining participant comfort and data security.",
            outcomes:
                "Identified critical usability issues resulting in 50% reduction in support calls.",
        },
    },

    // Accessibility
    {
        id: 12,
        title: "WCAG Compliance Audit",
        description:
            "Complete accessibility audit and remediation for corporate website",
        category: "accessibility",
        imageUrl:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt:
            "Website accessibility audit checklist and color contrast tools",
        details: {
            overview:
                "Comprehensive WCAG 2.1 AA compliance audit of a corporate website, identifying 60+ accessibility issues and providing detailed remediation guidelines.",
            keyActivities: [
                "WCAG 2.1 AA compliance assessment",
                "Screen reader testing across multiple tools",
                "Color contrast analysis",
                "Keyboard navigation evaluation",
                "Remediation roadmap creation",
            ],
            tools: [
                "axe",
                "WAVE",
                "Lighthouse",
                "NVDA",
                "JAWS",
                "Color Oracle",
            ],
            challenges:
                "Balancing accessibility requirements with existing brand guidelines and technical constraints.",
            outcomes:
                "Achieved 100% WCAG 2.1 AA compliance and 40% improvement in accessibility scores.",
        },
    },
    {
        id: 13,
        title: "Screen Reader Optimization",
        description: "Navigation improvements for screen reader compatibility",
        category: "accessibility",
        imageUrl:
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt: "Person using screen reader technology with computer",
        details: {
            overview:
                "Specialized project focused on optimizing complex web application navigation for screen reader users across multiple assistive technologies.",
            keyActivities: [
                "Screen reader user testing",
                "Navigation structure optimization",
                "ARIA label implementation",
                "Focus management improvement",
                "Skip link optimization",
            ],
            tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack", "axe-core"],
            challenges:
                "Ensuring consistent experience across different screen reader technologies and versions.",
            outcomes:
                "95% task completion rate improvement for screen reader users.",
        },
    },
    {
        id: 14,
        title: "Color & Contrast Study",
        description:
            "Visual accessibility improvements for users with color vision deficiency",
        category: "accessibility",
        imageUrl:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        imageAlt:
            "Color palette swatches showing contrast ratios for accessibility",
        details: {
            overview:
                "Comprehensive color accessibility study addressing color vision deficiency and low vision user needs through systematic color system redesign.",
            keyActivities: [
                "Color vision deficiency testing",
                "Contrast ratio optimization",
                "Alternative visual indicator development",
                "Color palette accessibility validation",
                "Pattern and texture integration",
            ],
            tools: [
                "Stark",
                "Color Oracle",
                "Sim Daltonism",
                "Contrast",
                "Accessible Colors",
            ],
            challenges:
                "Maintaining brand identity while ensuring accessibility for all types of color vision deficiency.",
            outcomes:
                "Eliminated all color-only information dependencies and achieved AAA contrast ratios throughout.",
        },
    },
];

// State management
let currentFilter = "all";
let currentProjects = projectsData;

// DOM elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
    initializeNavigation();
    initializeFilters();
    initializeModal();
    renderProjects();

    // Show loading skeleton initially
    showLoadingSkeleton();

    // Simulate loading time
    setTimeout(() => {
        hideLoadingSkeleton();
        renderProjects();
    }, 1000);
});

// Navigation functions
function initializeNavigation() {
    hamburger.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when clicking on nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            scrollToSection(targetId);
            closeMobileMenu();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

function closeMobileMenu() {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = element.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
}

// Filter functions
function initializeFilters() {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            setActiveFilter(filter);
            filterProjects(filter);
        });
    });
}

function setActiveFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach((button) => {
        button.classList.remove("active");
    });

    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
}

function filterProjects(filter) {
    showLoadingSkeleton();

    setTimeout(() => {
        if (filter === "all") {
            currentProjects = projectsData;
        } else {
            currentProjects = projectsData.filter(
                (project) => project.category === filter,
            );
        }

        hideLoadingSkeleton();
        renderProjects();
    }, 500);
}

// Render functions
function renderProjects() {
    projectGrid.innerHTML = "";

    if (currentProjects.length === 0) {
        projectGrid.innerHTML = `
            <div class="no-projects" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="color: #64748b; font-size: 1.125rem;">No projects found for the selected category.</p>
            </div>
        `;
        return;
    }

    currentProjects.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${project.title}`);

    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.imageAlt}" class="project-image" loading="lazy">
        <div class="project-content">
            <span class="project-category category-${project.category}">
                ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    `;

    card.addEventListener("click", () => openProjectModal(project));
    card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProjectModal(project);
        }
    });

    return card;
}

function showLoadingSkeleton() {
    projectGrid.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "skeleton-card";
        skeleton.innerHTML = `
            <div class="skeleton-image loading-skeleton"></div>
            <div class="skeleton-content">
                <div class="skeleton-text loading-skeleton short"></div>
                <div class="skeleton-text loading-skeleton medium"></div>
                <div class="skeleton-text loading-skeleton"></div>
            </div>
        `;
        projectGrid.appendChild(skeleton);
    }
}

function hideLoadingSkeleton() {
    const skeletons = document.querySelectorAll(".skeleton-card");
    skeletons.forEach((skeleton) => skeleton.remove());
}

// Modal functions
function initializeModal() {
    closeBtn.addEventListener("click", closeProjectModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalBody.innerHTML = createModalContent(project);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Focus management for accessibility
    const firstFocusableElement = modal.querySelector(
        'button, [tabindex]:not([tabindex="-1"])',
    );
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}

function closeProjectModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function createModalContent(project) {
    const challengesSection = project.details.challenges
        ? `
        <div class="modal-section">
            <h4>Challenges</h4>
            <p style="color: #64748b; line-height: 1.7;">${project.details.challenges}</p>
        </div>
    `
        : "";

    const outcomesSection = project.details.outcomes
        ? `
        <div class="modal-section">
            <h4>Outcomes & Results</h4>
            <p style="color: #64748b; line-height: 1.7;">${project.details.outcomes}</p>
        </div>
    `
        : "";

    return `
        <p class="modal-overview">${project.details.overview}</p>
        
        ${challengesSection}
        
        <div class="modal-section">
            <h4>Key Activities</h4>
            <ul class="activities-list">
                ${project.details.keyActivities.map((activity) => `<li>${activity}</li>`).join("")}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Tools & Technologies</h4>
            <div class="tools-list">
                ${project.details.tools.map((tool) => `<span class="tool-tag">${tool}</span>`).join("")}
            </div>
        </div>
        
        ${outcomesSection}
    `;
}

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href*="#"]');

        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                const targetId = link.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const targetPosition = targetElement.offsetTop;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;

                    const animation = (currentTime) => {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = easeInOutQuad(
                            timeElapsed,
                            startPosition,
                            distance,
                            duration,
                        );
                        window.scrollTo(0, run);
                        if (timeElapsed < duration)
                            requestAnimationFrame(animation);
                    };

                    const easeInOutQuad = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1) return (c / 2) * t * t + b;
                        t--;
                        return (-c / 2) * (t * (t - 2) - 1) + b;
                    };

                    requestAnimationFrame(animation);
                }
            });
        });
    };

    smoothScrollPolyfill();
}

// Performance optimization: Lazy loading for images
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add("lazy-load");
            observer.unobserve(img);
        }
    });
}, observerOptions);

// Observe images when they're added to the DOM
const observeImages = () => {
    const images = document.querySelectorAll(".project-image");
    images.forEach((img) => {
        imageObserver.observe(img);
    });
};

// Call observeImages after rendering projects
const originalRenderProjects = renderProjects;
renderProjects = function () {
    originalRenderProjects.call(this);
    observeImages();
};

// Accessibility: Announce filter changes to screen readers
function announceFilterChange(filter) {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.style.position = "absolute";
    announcement.style.left = "-10000px";
    announcement.style.width = "1px";
    announcement.style.height = "1px";
    announcement.style.overflow = "hidden";

    const filterText = filter === "all" ? "all projects" : filter;
    announcement.textContent = `Showing ${filterText} projects. ${currentProjects.length} projects found.`;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Update filter function to include announcements
const originalFilterProjects = filterProjects;
filterProjects = function (filter) {
    originalFilterProjects.call(this, filter);
    setTimeout(() => {
        announceFilterChange(filter);
    }, 600);
};
