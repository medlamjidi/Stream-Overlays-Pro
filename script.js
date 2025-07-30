// Platform rotation for hero section
const platforms = [
    { name: "Twitch", class: "twitch" },
    { name: "YouTube", class: "youtube" },
    { name: "Facebook", "class": "facebook" },
    { name: "Kick", class: "kick" }
];
let currentPlatform = 0;
const platformElements = document.querySelectorAll('.platform-highlight');

function rotatePlatform() {
    platformElements.forEach(el => {
        el.textContent = platforms[currentPlatform].name;
        el.className = `platform-highlight ${platforms[currentPlatform].class}`;
    });
    currentPlatform = (currentPlatform + 1) % platforms.length;
}

setInterval(rotatePlatform, 3000);

// Helper function to get platform/software icons
function getPlatformIcon(platform) {
    const icons = {
        "Twitch": "fab fa-twitch twitch-icon",
        "Kick": "fas fa-bolt kick-icon",
        "YouTube": "fab fa-youtube youtube-icon",
        "Facebook": "fab fa-facebook facebook-icon",
        "OBS": "fas fa-desktop obs-icon",
        "Streamlabs": "fas fa-microphone streamlabs-icon",
        "StreamElements": "fas fa-code streamelements-icon"
    };
    return `<i class="${icons[platform]}"></i>`;
}

// Render star ratings
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Pagination variables
const productsPerPage = 6; // Display 6 products per page
let currentPage = 1;
let currentFilteredProducts = []; // To store products after search/filter

// Render product cards
function renderProductCard(product) {
    const discount = product.comparePrice ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100) : 0;
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${product.bestSeller ? '<div class="product-badge">BEST SELLER</div>' : ''}
                <img src="${product.images[0]}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.comparePrice ? `<span class="compare-price">$${product.comparePrice.toFixed(2)}</span>` : ''}
                    ${discount > 0 ? `<span class="discount">${discount}% off</span>` : ''}
                </div>
                <div class="product-features">
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Instant Download</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Expert Customer Service</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Free Updates</span>
                    </div>
                </div>
                <div class="product-icons">
                    ${product.platforms.map(p => 
                        `<div class="icon-badge" title="${p}">${getPlatformIcon(p)}</div>`
                    ).join('')}
                    ${product.software.map(s => 
                        `<div class="icon-badge" title="${s}">${getPlatformIcon(s)}</div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render products with pagination
function renderProducts(page = 1) {
    currentPage = page;
    const container = document.getElementById('best-sellers');
    const paginationContainer = document.getElementById('pagination-controls');

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = currentFilteredProducts.slice(startIndex, endIndex);

    container.innerHTML = productsToDisplay.map(renderProductCard).join('');

    renderPaginationControls();
}

// Render pagination buttons
function renderPaginationControls() {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = ''; // Clear existing controls

    const totalPages = Math.ceil(currentFilteredProducts.length / productsPerPage);

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none'; // Hide pagination if only one page
        return;
    } else {
        paginationContainer.style.display = 'flex';
    }

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.classList.add('pagination-btn');
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        renderProducts(currentPage - 1);
        window.scrollTo({ top: document.getElementById('shop').offsetTop - 80, behavior: 'smooth' });
    });
    paginationContainer.appendChild(prevButton);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('pagination-btn');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            renderProducts(i);
            window.scrollTo({ top: document.getElementById('shop').offsetTop - 80, behavior: 'smooth' });
        });
        paginationContainer.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('pagination-btn');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        renderProducts(currentPage + 1);
        window.scrollTo({ top: document.getElementById('shop').offsetTop - 80, behavior: 'smooth' });
    });
    paginationContainer.appendChild(nextButton);
}

// Render testimonials
function renderTestimonials() {
    const slider = document.getElementById('testimonial-slider');
    slider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="stars">
                ${renderStars(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.author}</p>
        </div>
    `).join('');
}

// Search functionality
function searchProducts(query) {
    if (!query.trim()) {
        currentFilteredProducts = products.filter(p => p.bestSeller); // Show all best sellers if query is empty
    } else {
        currentFilteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.platforms.some(platform => platform.toLowerCase().includes(query.toLowerCase())) ||
            product.software.some(software => software.toLowerCase().includes(query.toLowerCase()))
        );
    }
    renderProducts(1); // Reset to first page after search
}

// FAQ functionality
function renderFAQ(category) {
    const faqs = faqData[category] || [];
    const container = document.getElementById('faq-content');
    
    container.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" data-index="${index}">
                ${faq.question}
                <i class="fas fa-chevron-down faq-toggle"></i>
            </div>
            <div class="faq-answer" id="faq-answer-${index}">
                ${faq.answer}
            </div>
        </div>
    `).join('');
    
    // Add event listeners to FAQ questions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const answer = document.getElementById(`faq-answer-${index}`);
            const toggle = this.querySelector('.faq-toggle');
            
            answer.classList.toggle('open');
            toggle.classList.toggle('rotated');
        });
    });
}

// Testimonial slider functionality
let currentTestimonial = 0;
const testimonialSlider = document.getElementById('testimonial-slider');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 5000);

// Modal functionality
const modal = document.getElementById('product-modal');
const closeModalBtn = modal.querySelector('.close-modal');

// Global variables for modal image gallery
let currentModalImageIndex = 0;
let currentModalProductImages = [];

// Helper function to update the main image and active thumbnail
function updateModalImage() {
    document.getElementById('modal-main-image').src = currentModalProductImages[currentModalImageIndex];
    
    // Update active thumbnail
    document.querySelectorAll('.modal-thumbnail').forEach((thumb, index) => {
        if (index === currentModalImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Event listener for next image button
document.querySelector('.next-image').addEventListener('click', () => {
    currentModalImageIndex = (currentModalImageIndex + 1) % currentModalProductImages.length;
    updateModalImage();
});

// Event listener for previous image button
document.querySelector('.prev-image').addEventListener('click', () => {
    currentModalImageIndex = (currentModalImageIndex - 1 + currentModalProductImages.length) % currentModalProductImages.length;
    updateModalImage();
});

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Reset image index and store product images
    currentModalImageIndex = 0;
    currentModalProductImages = product.images;

    const discount = product.comparePrice ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100) : 0;
    
    // Set main image and render thumbnails
    document.getElementById('modal-main-image').src = product.images[0]; // Set initial image
    
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails
    product.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image;
        thumb.classList.add('modal-thumbnail');
        if (index === 0) {
            thumb.classList.add('active'); // Set first thumbnail as active
        }
        thumb.addEventListener('click', () => {
            currentModalImageIndex = index;
            updateModalImage();
        });
        thumbnailsContainer.appendChild(thumb);
    });

    // Update other modal content
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-compare-price').textContent = product.comparePrice ? `$${product.comparePrice.toFixed(2)}` : '';
    document.getElementById('modal-discount').textContent = discount > 0 ? `${discount}% off` : '';
    document.getElementById('modal-description').textContent = product.description;
    
    // Render platforms
    const platformsContainer = document.getElementById('modal-platforms');
    platformsContainer.innerHTML = product.platforms.map(p => 
        `<span class="modal-platform ${p.toLowerCase()}">${p}</span>`
    ).join('');
    
    // Render software
    const softwareContainer = document.getElementById('modal-software');
    softwareContainer.innerHTML = product.software.map(s => 
        `<span>${s}</span>`
    ).join('');
    
    // Set purchase link
    document.getElementById('purchase-btn').onclick = () => {
        window.open(product.purchaseLink, '_blank');
    };
    
    modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Add event listeners to product cards
document.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    if (productCard) {
        const productId = productCard.getAttribute('data-product-id');
        openModal(productId);
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Search event listeners
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    searchProducts(query);
});

document.getElementById('search-input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value;
        searchProducts(query);
    }
});

// FAQ category switching
document.querySelectorAll('.faq-category').forEach(category => {
    category.addEventListener('click', function() {
        // Remove active class from all categories
        document.querySelectorAll('.faq-category').forEach(cat => {
            cat.classList.remove('active');
        });
        
        // Add active class to clicked category
        this.classList.add('active');
        
        // Render FAQs for selected category
        const selectedCategory = this.getAttribute('data-category');
        renderFAQ(selectedCategory);
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    currentFilteredProducts = products.filter(p => p.bestSeller); // Initialize with best sellers
    renderProducts(1); // Render first page of best sellers
    renderTestimonials();
    renderFAQ('payment'); // Default to payment FAQs
});