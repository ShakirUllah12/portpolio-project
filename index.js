     // Smooth Scrolling for Section Links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const toggleSwitch = document.createElement('button');
    toggleSwitch.textContent = "Toggle Dark Mode";
    toggleSwitch.style.position = "fixed";
    toggleSwitch.style.bottom = "20px";
    toggleSwitch.style.right = "20px";
    toggleSwitch.style.padding = "10px";
    toggleSwitch.style.borderRadius = "5px";
    toggleSwitch.style.border = "none";
    toggleSwitch.style.backgroundColor = "#333";
    toggleSwitch.style