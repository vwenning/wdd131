document.addEventListener("DOMContentLoaded", () => {
    const marketItems = document.querySelectorAll(".market-item");

    // Hover animation
    marketItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease-in-out";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    setupMarketFilters(); // Add data attributes & hook up dropdown
});

// Setup filter data
function setupMarketFilters() {
    const marketData = {
        "old-town-temecula": {
            days: ["saturday"]
        },
        "promenade-temecula": {
            days: ["wednesday"]
        },
        "vail-headquarters": {
            days: ["monday", "tuesday"]
        },
        "san-jacinto": {
            days: ["thursday", "friday"]
        },
        "corona": {
            days: ["saturday"]
        },
        "canyon-lake": {
            days: ["sunday"]
        },
        "riverside-downtown": {
            days: ["saturday"]
        },
        "palm-springs": {
            days: ["saturday"]
        }
    };

    // Add data attributes to DOM elements
    for (const [id, data] of Object.entries(marketData)) {
        const item = document.getElementById(id);
        if (item) {
            item.dataset.days = data.days.join(",");
        }
    }

    // Listen for dropdown change
    const filter = document.getElementById("day-filter");
    if (filter) {
        filter.addEventListener("change", filterMarkets);
    }
}

function filterMarkets() {
    const selectedDay = document.getElementById("day-filter").value;
    const marketItems = document.querySelectorAll(".market-item");

    marketItems.forEach(item => {
        const itemDays = item.dataset.days?.split(",") || [];
        if (selectedDay === "all" || itemDays.includes(selectedDay)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
