function copyUPI() {
    const upi = document.getElementById('upi').innerText;
    navigator.clipboard.writeText(upi).then(function() {
        const tooltip = document.createElement('span');
        tooltip.textContent = 'Copied!';
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -150%)';
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function submitUTR() {
    const utr = document.getElementById('utr').value;
    const utrPattern = /^[0-9a-zA-Z]{12}$/;  // Example pattern: alphanumeric with 12 characters
    if (utr.match(utrPattern)) {
        alert('UTR submitted: ' + utr);
    } else {
        alert('Please enter a valid UTR (12 alphanumeric characters).');
    }
}