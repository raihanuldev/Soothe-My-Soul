function fetchAyah(emotion) {
    fetch('ayat.json')
        .then(response => response.json())
        .then(data => {
            const ayahArray = data[emotion];
            const randomIndex = Math.floor(Math.random() * ayahArray.length);
            const ayahText = ayahArray[randomIndex];
            document.getElementById('ayah-text').innerText = ayahText;
        })
        .catch(error => console.error('Error loading ayat.json:', error));
}

function copyText() {
    const ayahText = document.getElementById('ayah-text').innerText;
    navigator.clipboard.writeText(ayahText).then(() => {
        showToast("Text copied to clipboard!");
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.className = 'toast show';
    }, 10);

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3500);
}

function shareText() {
    const ayahText = document.getElementById('ayah-text').innerText;
    const shareData = {
        title: 'Emotion-Based Suggestion',
        text: ayahText,
        url: document.location.href
    };
    navigator.share(shareData).catch(console.error);
}
