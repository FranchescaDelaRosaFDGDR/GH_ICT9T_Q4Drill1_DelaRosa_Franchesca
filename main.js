// Electricity Consumption Classifier
function consumption_classification() {
    let num1 = Number (document.getElementById('input1').value);

    switch (true) {
        case (num1 >= 0 && num1 <= 100): 
            window.alert('Lifeline Consumer: Discounted electricity rates');
            break;
        case (num1 >= 101 && num1 <= 200): 
            window.alert('Low Consumption: Normal residential rate');
            break;
        case (num1 >= 201 && num1 <= 300): 
            window.alert('Average Consumption: Typical electricity usage');
            break;
        case (num1 >= 301 && num1 <= 500): 
            window.alert('High Consumption: Higher electricity usage');
            break;
        case (num1 > 500): 
            window.alert('Very High Consumption: Heavy electricity users');
            break;
        default:
            document.getElementById('display1').innerHTML = 'Invalid Input. Try Again';
            break;
    }
}