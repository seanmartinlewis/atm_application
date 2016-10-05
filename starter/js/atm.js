
// MY TAKE ON THE GA ATM .  SEANMARTINLEWIS
$(document).ready(function() {
  console.log('ATM');
  $('#depositChecking').on('click', depositCash)
  $('#withdrawChecking').on('click', withdrawCash)
  $('#depositSavings').on('click', depositSave)
});

  function depositCash(e) {
    e.preventDefault();
    console.log('checked');

    var depositCash = parseInt($('#amountChecking').val())
    var previousBalance = parseInt($('#checkingBalance').text().replace('$',""))
    var masterBalance = "$" + (depositCash + previousBalance)
    $("#checkingBalance").text(masterBalance)
  }

  function withdrawCash(e) {
    e.preventDefault();
    console.log('withdrew');

    var withdrawFunds = parseInt($('#amountChecking').val())
    var previousBalance = parseInt($('#checkingBalance').text().replace('$',""))
    var masterBalance = "$" + (previousBalance - withdrawFunds)

    if (withdrawFunds <= previousBalance) {
      console.log('new balance');
      $("#checkingBalance").text(masterBalance)
    } else {
      alert('not enough cheddar')
    }
  }


  function depositSave(e) {
    e.preventDefault;
    console.log('checked');

    var check = $('#amountSavings').val() + $('#savingsBalance').val()

    $('#savingsBalance').html('$' + check).val(check)

  }
    //Checking account deposit function

      //On click of the depositChecking button

        //Get value from the amountChecking input field

        //Take that value and add it to the existing value in the checkingBalance div

    //Checking account withdrawl funtion

      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
