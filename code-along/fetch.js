// listen for the document to be finished loading
document.addEventListener('DOMContentLoaded', async function(event) {

  // Get a reference to the "submit" button
  let submitButton = document.querySelector(`button`)
  // When the "submit" button is clicked:
  submitButton.addEventListener(`click`, async function(event) {
    // - Ignore the default behavior of the button
    event.preventDefault()
    
    // - Store the URL we want to fetch in memory
    let url = `https://api.coindesk.com/v1/bpi/currentprice/USD.json`
    
    // - Fetch the url, wait for a response, store the response in memory
    let response = await fetch(url)

    // - Ask for the json-formatted data from the response, wait for the data, store it in memory
    let json = await response.json()

    // - Write the json-formatted data to the JavaScript console
    console.log(json)

    // - Store the current price of Bitcoin in USD in memory
    currentPriceUSD = json.bpi.USD.rate_float

    // - Get a reference to the "amount" input
    amountInput = document.querySelector(`#amount`)

    // - Store the amount from the "amount" input in memory
    amount = amountInput.value

    // - Calculate the total value based on amount and current price
    totalValue = amount * currentPriceUSD

    // - Get a reference to the "output" element
    outputElement = document.querySelector(`.output`)

    // - Make a sentence to write out to the "output" element
    let sentence = `You have ${totalValue} worth of bitcoin`

    // - Replace the "output" element's HTML with the sentence
    outputElement.innerHTML = sentence
    })  
})