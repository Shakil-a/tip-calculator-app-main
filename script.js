document.addEventListener('DOMContentLoaded', () => {
    const setTips = document.querySelectorAll('.set-tip');
    const customTip = document.querySelector('#custom-tip');
    const totalAmountOutput = document.querySelector('.totalAmountOutput')
    const numOfPeople = document.querySelector('#numOfPeople');
    const tipPerPerson = document.querySelector('.tipPerPerson')
    let totaltip = 0;

        setTips.forEach(button => {
            button.addEventListener('click', (e) => {
                const billAmount = document.querySelector('#bill').value;
                totaltip = billAmount * (e.target.dataset.amount / 100)
                totalAmountOutput.innerHTML = totaltip
                const peopleCount = parseInt(numOfPeople.value) || 1;
                tipPerPerson.innerHTML = (totaltip / peopleCount);
            })    
        })

        customTip.addEventListener('input', () => {
            const billAmount = document.querySelector('#bill').value;
            totaltip = billAmount * (customTip.value / 100)
            totalAmountOutput.innerHTML = totaltip
            const peopleCount = parseInt(numOfPeople.value) || 1;
           tipPerPerson.innerHTML = (totaltip / peopleCount);
        })

        numOfPeople.addEventListener('input', () => {
            const peopleCount = parseInt(numOfPeople.value) || 1;
            tipPerPerson.innerHTML = (totaltip / peopleCount);
        });

})
