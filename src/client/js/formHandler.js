 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;
    if(Client.checkForURL(formText))
    {

    console.log("::: Form Submitted :::")
    //const proxyurl = "http://cors-anywhere.herokuapp.com/";
    postData('http://localhost:8080/test', {url: formText})
    .then(function(res) {
        console.log(res)
        document.getElementById('agreement').innerHTML = 'Agreement : ' + res.agreement;
        document.getElementById('subject').innerHTML = 'Subjectivity : ' + res.subjectivity;
        document.getElementById('confi').innerHTML = 'confidence : ' + res.confidence;
    })
} else {
    console.log('invalid url');
}
}
const postData = async ( url = '', data = {}) => {
    console.log(data);
         const response = await fetch ( url, {
         method: 'POST', 
         credentials: 'same-origin',
         mode: 'cors',
         headers: {
             'Content-Type': 'application/json',
         },
        // Body data type must match "Content-Type" header        
         body: JSON.stringify(data)
       });
         try {
           const newData = await response.json();
           console.log(newData);
          return newData;
         } catch(error) {
         console.log('error', error);
         }
       }

export { handleSubmit }
