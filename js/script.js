document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts in the hero section
    createFloatingHearts();
    
    // Initialize the message form
    initMessageForm();
    
    // Load sample messages
    loadSampleMessages();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Mobile menu functionality
    initMobileMenu();
    
    // Music player functionality
    initMusicPlayer();
    
    // Countdown timer
    initCountdown();
    
    // Quiz functionality
    initQuiz();
});

// Update the createFloatingHearts function for better performance and effect
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartColors = ['#ff9aa2', '#ffdac1', '#c7ceea', '#b5ead7'];
    const heartShapes = ['❤️', '💖', '💗', '💓', '💕'];
    
    // Clear any existing hearts
    if (container) {
        container.innerHTML = '';
        
        // Create fewer hearts on mobile for better performance
        const isMobile = window.innerWidth < 768;
        const heartCount = isMobile ? 15 : 25;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random properties for each heart
            const size = Math.random() * 25 + 10; // Size between 10px and 35px
            const position = Math.random() * 100; // Position between 0% and 100%
            const delay = Math.random() * 5; // Animation delay between 0s and 5s
            const duration = Math.random() * 8 + 7; // Animation duration between 7s and 15s
            const colorIndex = Math.floor(Math.random() * heartColors.length);
            const shapeIndex = Math.floor(Math.random() * heartShapes.length);
            
            // Apply styles
            heart.style.position = 'absolute';
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${position}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.opacity = Math.random() * 0.5 + 0.2; // Opacity between 0.2 and 0.7
            heart.style.filter = 'blur(0.5px)';
            heart.style.color = heartColors[colorIndex];
            heart.style.zIndex = Math.floor(Math.random() * 5);
            heart.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            heart.style.textShadow = '0 0 5px rgba(255,255,255,0.3)';
            
            // Add the heart emoji
            heart.innerHTML = heartShapes[shapeIndex];
            
            container.appendChild(heart);
        }
    }
}

// Function to initialize the message form
function initMessageForm() {
    const form = document.getElementById('messageForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // Create and add the new message
        addMessage(name, message);
        
        // Reset form
        form.reset();
    });
}

// Function to add a message to the display
function addMessage(name, message) {
    const messagesDisplay = document.querySelector('.messages-display');
    
    // Create message card
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    
    // Add content
    messageCard.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
        <small>${new Date().toLocaleDateString()}</small>
    `;
    
    // Add to display
    messagesDisplay.prepend(messageCard);
}

// Function to load sample messages
function loadSampleMessages() {
    const sampleMessages = [
        { name: "Neruda", message: "Buah manggis beras ketan semoga langgeng sampe ke pelaminan.", date: "5/6/2025" },
        { name: "Michael", message: "Your love story inspires everyone around you. Keep shining!", date: "22/6/2025" },
        { name: "Emma", message: "So happy to witness your beautiful journey. Sending lots of love!", date: "21/6/2025" },
        { name: "Daniel", message: "You guys remind me what true love looks like. Congratulations on your relationship!", date: "20/6/2025" },
        { name: "Jessica", message: "May your love continue to grow stronger each day. You're both amazing!", date: "19/6/2025" }
    ];
    
    // Add sample messages with a delay
    sampleMessages.forEach((msg, index) => {
        setTimeout(() => {
            addMessageWithCustomDate(msg.name, msg.message, msg.date);
        }, index * 300);
    });
}

// Function to add message with custom date
function addMessageWithCustomDate(name, message, date) {
    const messagesDisplay = document.querySelector('.messages-display');
    
    // Create message card
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    
    // Add content with custom date
    messageCard.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
        <small>${date}</small>
    `;
    
    // Add to display
    messagesDisplay.prepend(messageCard);
}

// Function to initialize scroll animations
function initScrollAnimations() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add animation class when section comes into view
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the section is visible
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation to timeline items as they scroll into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 1s ease, transform 1s ease';
        timelineObserver.observe(item);
    });
    
    // Add animation to quote cards
    const quoteCards = document.querySelectorAll('.quote-card');
    
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation with delay based on index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    quoteCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        quoteObserver.observe(card);
    });
}

// Update the mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Add overlay when menu is open
            if (navLinks.classList.contains('active')) {
                const overlay = document.createElement('div');
                overlay.className = 'menu-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
                overlay.style.zIndex = '998';
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    document.body.removeChild(overlay);
                });
            } else {
                const overlay = document.querySelector('.menu-overlay');
                if (overlay) {
                    document.body.removeChild(overlay);
                }
            }
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const overlay = document.querySelector('.menu-overlay');
                if (overlay) {
                    document.body.removeChild(overlay);
                }
            });
        });
        
        // Close menu when user scrolls
        window.addEventListener('scroll', function() {
            if (navLinks.classList.contains('active') && window.scrollY > 100) {
                navLinks.classList.remove('active');
                const overlay = document.querySelector('.menu-overlay');
                if (overlay) {
                    document.body.removeChild(overlay);
                }
            }
        });
    }
}

// Music Player Functionality
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play();
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                bgMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }
}

// Countdown Timer
function initCountdown() {
    // Set the date we're counting down to (next mensiversary)
    const nextMensiversary = new Date("July 5, 2025 00:00:00").getTime();
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = nextMensiversary - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            document.querySelector(".countdown-message").innerHTML = "Happy Mensiversary!";
        }
    }, 1000);
}

// Quiz Functionality
function initQuiz() {
    const quizQuestions = [
        {
            question: "When did we first meet?",
            options: ["December 20, 2024", "December 23, 2024", "December 25, 2024", "January 1, 2025"],
            answer: 1
        },
        {
            question: "What was the first thing we talked about?",
            options: ["Movies", "Food", "Tea", "Books"],
            answer: 2
        },
        {
            question: "When did we make our relationship official?",
            options: ["April 5, 2025", "May 5, 2025", "June 5, 2025", "May 10, 2025"],
            answer: 1
        },
        {
            question: "What is the name of our 'son'?",
            options: ["Dudut", "Didi", "Dodo", "Dudu"],
            answer: 0
        },
        {
            question: "What was our first date activity?",
            options: ["Dinner", "Movie", "Walk in the park", "Coffee"],
            answer: 1
        }
    ];
    
    const startQuizBtn = document.getElementById('startQuiz');
    const quizContent = document.getElementById('quizContent');
    const quizResults = document.getElementById('quizResults');
    const retryQuizBtn = document.getElementById('retryQuiz');
    const scoreElement = document.getElementById('score');
    const resultMessage = document.getElementById('resultMessage');
    
    let currentQuestion = 0;
    let score = 0;
    
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    }
    
    if (retryQuizBtn) {
        retryQuizBtn.addEventListener('click', function() {
            quizResults.classList.add('hidden');
            currentQuestion = 0;
            score = 0;
            startQuiz();
        });
    }
    
    function startQuiz() {
        quizContent.innerHTML = '';
        showQuestion();
    }
    
    function showQuestion() {
        if (currentQuestion < quizQuestions.length) {
            const questionData = quizQuestions[currentQuestion];
            
            const questionElement = document.createElement('div');
            questionElement.classList.add('quiz-question-container');
            
            questionElement.innerHTML = `
                <p class="quiz-question">${currentQuestion + 1}. ${questionData.question}</p>
                <div class="quiz-options"></div>
                <div class="quiz-navigation">
                    ${currentQuestion > 0 ? '<button class="quiz-button quiz-prev">Previous</button>' : ''}
                    <button class="quiz-button quiz-next">${currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}</button>
                </div>
            `;
            
            quizContent.appendChild(questionElement);
            
            const optionsContainer = questionElement.querySelector('.quiz-options');
            
            questionData.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('quiz-option');
                optionElement.textContent = option;
                optionElement.dataset.index = index;
                
                optionElement.addEventListener('click', function() {
                    const options = optionsContainer.querySelectorAll('.quiz-option');
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
                
                optionsContainer.appendChild(optionElement);
            });
            
            const nextButton = questionElement.querySelector('.quiz-next');
            if (nextButton) {
                nextButton.addEventListener('click', function() {
                    const selectedOption = optionsContainer.querySelector('.quiz-option.selected');
                    
                    if (selectedOption) {
                        const selectedIndex = parseInt(selectedOption.dataset.index);
                        if (selectedIndex === questionData.answer) {
                            score++;
                        }
                    }
                    
                    currentQuestion++;
                    if (currentQuestion < quizQuestions.length) {
                        showQuestion();
                    } else {
                        showResults();
                    }
                });
            }
            
            const prevButton = questionElement.querySelector('.quiz-prev');
            if (prevButton) {
                prevButton.addEventListener('click', function() {
                    currentQuestion--;
                    showQuestion();
                });
            }
        }
    }
    
    function showResults() {
        quizContent.innerHTML = '';
        quizResults.classList.remove('hidden');
        scoreElement.textContent = score;
        
        // Set result message based on score
        if (score === quizQuestions.length) {
            resultMessage.textContent = "Perfect! You know us so well!";
        } else if (score >= quizQuestions.length * 0.7) {
            resultMessage.textContent = "Great job! You know quite a bit about our relationship!";
        } else if (score >= quizQuestions.length * 0.5) {
            resultMessage.textContent = "Not bad! You know some things about us!";
        } else {
            resultMessage.textContent = "Time to learn more about our love story!";
        }
    }
}

// Add active class to the current navigation item based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Make website responsive to different device orientations
window.addEventListener('orientationchange', function() {
    // Small delay to allow the browser to finish orientation change
    setTimeout(function() {
        // Refresh floating hearts for new dimensions
        const container = document.querySelector('.floating-hearts');
        if (container) {
            container.innerHTML = '';
            createFloatingHearts();
        }
    }, 300);
});

// Adjust floating hearts on window resize
window.addEventListener('resize', function() {
    // Throttle the resize event to avoid performance issues
    if (!window.resizeTimeout) {
        window.resizeTimeout = setTimeout(function() {
            window.resizeTimeout = null;
            createFloatingHearts();
        }, 250);
    }
});

// Improve touchscreen interaction
document.addEventListener('DOMContentLoaded', function() {
    // Add touchstart listeners for mobile devices
    const touchElements = document.querySelectorAll('.hero-button, .btn-submit, .photo');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, {passive: true});
        
        element.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
    });
});