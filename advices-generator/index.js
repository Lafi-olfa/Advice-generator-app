const fetchAdvice= async ()=>{
    const res= await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    document.querySelector('h2').innerHTML =  `ADVICE #${data.slip.id}`
    document.querySelector('p').innerHTML = `"${data.slip.advice}"`    
}
fetchAdvice()