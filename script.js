const ayahs = {
    "Sad": [
        "Ayah 1 for Sad",
        "Ayah 2 for Sad"
    ],
    "Happy": [
        "Ayah 1 for Happy",
        "Ayah 2 for Happy"
    ],
    "Angry": [
        "Ayah 1 for Angry",
        "Ayah 2 for Angry"
    ],
    "Alone": [
        "Ayah 1 for Alone",
        "Ayah 2 for Alone"
    ]
};

function fetchAyah(emotion) {
    const ayahArray = ayahs[emotion];
    const randomIndex = Math.floor(Math.random() * ayahArray.length);
    const ayahText = ayahArray[randomIndex];
    document.getElementById('ayah-text').innerText = ayahText;
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