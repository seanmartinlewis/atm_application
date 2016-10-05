
// MY TAKE ON THE GA ATM .  SEANMARTINLEWIS
$(document).ready(function() {
  console.log('ATM');
  $('#depositChecking').on('click', depositCash)
  $('#withdrawChecking').on('click', withdrawCash)
  $('#depositSavings').on('click', depositSave)
  $('#withdrawSavings').on('click', withdrawSave)
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
    e.preventDefault();
    console.log('checked');

    var depositCash = parseInt($('#amountSavings').val())
    var previousBalance = parseInt($('#savingsBalance').text().replace('$',""))
    var masterBalance = "$" + (depositCash + previousBalance)
    $("#savingsBalance").text(masterBalance)
  }

  function withdrawSave(e) {
    e.preventDefault();
    console.log('withdrew');

    var withdrawFunds = parseInt($('#amountSavings').val())
    var previousBalance = parseInt($('#savingsBalance').text().replace('$',""))
    var masterBalance = "$" + (previousBalance - withdrawFunds)

    if (withdrawFunds <= previousBalance) {
      console.log('new balance');
      $("#savingsBalance").text(masterBalance)
    } else {
      alert('not enough cheddar')
    }
  }

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
