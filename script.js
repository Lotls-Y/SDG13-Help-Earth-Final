document.addEventListener('DOMContentLoaded', function() {
    const solarSystemIntro = document.getElementById('solar-system-intro');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        solarSystemIntro.classList.add('zoom-in');
    }, 3000);

    setTimeout(function() {
        solarSystemIntro.classList.add('fade-out');
    }, 7000);

    setTimeout(function() {
        if (solarSystemIntro && solarSystemIntro.parentNode) {
            solarSystemIntro.parentNode.removeChild(solarSystemIntro);
        }
    }, 8000);

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const pledgeForm = document.getElementById('pledgeForm');
    const formStatus = document.getElementById('formStatus');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    pledgeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const pledgeText = document.getElementById('pledge').value.trim();
        
        if (pledgeText) {
            formStatus.textContent = 'Pledge recorded successfully!';
            formStatus.className = 'form-status success';
            
            pledgeForm.reset();
            
            setTimeout(function() {
                formStatus.style.display = 'none';
                formStatus.className = 'form-status';
            }, 5000);
        }
    });

    const missionCheckboxes = document.querySelectorAll('.mission-checkbox');
    const progressCount = document.getElementById('progress-count');
    const progressFill = document.getElementById('progress-fill');
    const totalMissions = missionCheckboxes.length;

    function updateProgress() {
        const completedMissions = document.querySelectorAll('.mission-checkbox:checked').length;
        const progressPercentage = (completedMissions / totalMissions) * 100;
        
        progressCount.textContent = `${completedMissions}/${totalMissions} missions completed`;
        progressFill.style.width = `${progressPercentage}%`;
        
        if (completedMissions === totalMissions && totalMissions > 0) {
            setTimeout(function() {
                alert('🎉 Congratulations! You\'ve completed all climate missions! Keep up the great work for our planet! 🌍💚');
            }, 500);
        }
    }

    missionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    updateProgress();
});
