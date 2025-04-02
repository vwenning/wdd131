document.addEventListener("DOMContentLoaded", () => {
    const marketItems = document.querySelectorAll(".market-item");
    
    marketItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease-in-out";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
    
    // Dynamic banner effect
    const banner = document.querySelector(".banner");
    let scrollPosition = 0;
    
    window.addEventListener("scroll", () => {
        let newScroll = window.scrollY;
        if (newScroll > scrollPosition) {
            banner.style.opacity = "0.8";
        } else {
            banner.style.opacity = "1";
        }
        scrollPosition = newScroll;
    });
});
