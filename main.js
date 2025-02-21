const url = window.location.href; // Get the current website URL
const numberOfTabs = 5; // Change this to open more or fewer tabs
const screenWidth = window.screen.availWidth;
const screenHeight = window.screen.availHeight;
const windowWidth = 400;
const windowHeight = 300;

for (let i = 0; i < numberOfTabs; i++) {
    let left = Math.random() * (screenWidth - windowWidth);
    let top = Math.random() * (screenHeight - windowHeight);
    window.open(url, '_blank', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
}
