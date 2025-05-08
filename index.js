
document.addEventListener("DOMContentLoaded", function () {
   
    function updateLinearProgress(selector, percentage) {
        const progressBar = document.querySelector(selector);
        if (progressBar) {
            progressBar.style.width = percentage + "%"; 
        }
    }

    


    updateLinearProgress(".progress-fill-1", 70);
    updateLinearProgress(".progress-fill-2", 60);
    updateLinearProgress(".progress-fill-3", 80);
    updateLinearProgress(".progress-fill-4", 30);

   
});
document.addEventListener("DOMContentLoaded", function () {
    function updateCircularProgress(id, percentage) {
        const circle = document.getElementById(id);
        const label = document.getElementById(`circular-label-${id.split('-').pop()}`);

        if (circle && label) {
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference * (1 - percentage / 100);
            
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
            label.textContent = `${percentage}%`; 
        }
    }


    updateCircularProgress("circular-progress-1", 60);
    updateCircularProgress("circular-progress-2", 55);
});


