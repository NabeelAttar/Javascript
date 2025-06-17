const form = document.querySelector('form');
// const height = document.querySelector('#height') //error: selecting height here, will give tis empty value, thats the vakue when the page just loads

form.addEventListener('submit', function(e) {
    // e.preventDefault();
    const height = parseFloat(document.querySelector('#Height').value);
    const Weight = parseFloat(document.querySelector('#Weight').value);
    const results = document.querySelector('.results');

    if(height === '' || height <= 0 || isNaN(height)){
       results.innerHTML = `Please give a valid Height`;
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
       results.innerHTML = `Please give a valid Weight`;
    }
    else{
        const bmi = (Weight / ((height*height)/ 10000)).toFixed(2)
        
        if(bmi<18.6) results.innerHTML = `<span>Your BMI is ${bmi}, BMI suggests Underweight Category</span>`
        if(bmi>= 18.6 && bmi<=24.9) results.innerHTML = `<span>Your BMI is ${bmi}, BMI suggests Normal Category</span>`
        if(bmi>24.9) results.innerHTML = `<span>Your BMI is ${bmi}, BMI suggests Overweight Category</span>`
    }
});