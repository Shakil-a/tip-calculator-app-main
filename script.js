document.addEventListener('DOMContentLoaded', () => {
    // Query all required DOM elements once
    const setTips = document.querySelectorAll('.set-tip');
    const customTip = document.querySelector('#custom-tip');
    const totalAmountOutput = document.querySelector('.totalAmountOutput');
    const numOfPeople = document.querySelector('#numOfPeople');
    const tipPerPerson = document.querySelector('.tipPerPerson');
    const resetBtn = document.querySelector('#resetBtn');
    let totaltip = 0;

    // Function to calculate and display the tip and per person amount
    const calculateAndDisplayTip = (tipPercentage) => {
        const billAmount = parseFloat(document.querySelector('#bill').value) || 0;
        totaltip = billAmount * (tipPercentage / 100);
        const peopleCount = parseInt(numOfPeople.value) || 1;
        totalAmountOutput.innerHTML = totaltip.toFixed(2);
        tipPerPerson.innerHTML = (totaltip / peopleCount).toFixed(2);
    };

    // Add click event listeners to all set-tip buttons
    setTips.forEach(button => {
        button.addEventListener('click', (e) => {
            calculateAndDisplayTip(e.target.dataset.amount);
        });
    });

    // Add input event listener to custom tip input
    customTip.addEventListener('input', () => {
        calculateAndDisplayTip(customTip.value);
    });

    // Add input event listener to number of people input
    numOfPeople.addEventListener('input', () => {
        const peopleCount = parseInt(numOfPeople.value) || 1;
        tipPerPerson.innerHTML = (totaltip / peopleCount).toFixed(2);
    });

    // Add click event listener to reset button
    resetBtn.addEventListener('click', () => {
        // Reset all outputs and inputs to their default states
        totalAmountOutput.innerHTML = '';
        tipPerPerson.innerHTML = '';
        document.querySelector('#bill').value = '';
        numOfPeople.value = '';
        customTip.value = '';
    });
});
