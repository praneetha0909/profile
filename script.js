document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.querySelector('.dynamic-text');
    const roles = ['Software Engineer/Developer', 'SAP MM-PP-QM Consultant'];
    let index = 0;

    // Function to change dynamic text
    function changeText() {
        dynamicText.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    setInterval(changeText, 2000);
    changeText(); // Initial call to display the first role
});
