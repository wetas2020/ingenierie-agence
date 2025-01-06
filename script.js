document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    const spans = this.querySelectorAll('span');
    this.classList.toggle('active');
    
    if (this.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

    // Select all anchor links with href starting with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Add click event listeners to each anchor link
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
  
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
  
            if (targetSection) {
                // Calculate the target position (with optional offset)
                const offset = 80; // Adjust this value to account for fixed navbar height
                const targetPosition = targetSection.offsetTop - offset;
  
                // Smoothly scroll to the target section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


