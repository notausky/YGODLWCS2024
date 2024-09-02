document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.grid-item').forEach(function (item) {
        const achievementsContainer = item.querySelector('.achievements-container');
        const achievements = JSON.parse(item.getAttribute('data-achievements'));

        achievements.forEach(function (achievement) {
            const achievementDiv = document.createElement('div');
            achievementDiv.classList.add('achievements');
            achievementDiv.textContent = achievement;

            if (/WCS\s*2023\s*Player/i.test(achievement)) {
                achievementDiv.classList.add('wcs-2023-player');
            } else if (/WCS\s+RRQ\s+2024\s+(NA|Latin\s+America\/Caribbean|EU|Japan|Asia)/.test(achievement)) {
                achievementDiv.classList.add('wcs-rrq');
            } else if (/Top\s+10\b/.test(achievement)) {
                achievementDiv.classList.add('top-10');
            } else if (/Top\s+100\b/.test(achievement)) {
                achievementDiv.classList.add('top-100');
            } else if (/KC\s+Points/i.test(achievement)) {
                achievementDiv.classList.add('kc-points');
            } else {
                achievementDiv.classList.add('default');
            }

            achievementsContainer.appendChild(achievementDiv);
        });

        // Add diamond border to the player image
        const playerImg = item.querySelector('img');
        if (playerImg) {
            playerImg.classList.add('diamond-border');
        }
    });
});
