console.log('Welcome to My Personal Website!');

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const binaryOutput = document.getElementById('binaryOutput');
    const binaryInput = document.getElementById('binaryInput');
    const textOutput = document.getElementById('textOutput');

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        binaryOutput.value = textToBinary(text);
    });

    binaryInput.addEventListener('input', () => {
        const binary = binaryInput.value;
        textOutput.value = binaryToText(binary);
    });

    function textToBinary(text) {
        return text.split('')
            .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
            .join(' ');
    }

    function binaryToText(binary) {
        return binary.split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const generatePoemBtn = document.getElementById('generatePoem');
    const keywordInput = document.getElementById('keywordInput');
    const poemOutput = document.getElementById('poem');

    generatePoemBtn.addEventListener('click', () => {
        const keywords = keywordInput.value.split(' ').filter(word => word.trim() !== '');
        poemOutput.textContent = generatePoem(keywords);
    });

    function generatePoem(keywords) {
        if (keywords.length === 0) {
            return "Please enter some words to inspire the poem.";
        }

        // Simple poem structure using keywords
        const lines = [
            `In the heart of ${keywords[0]},`,
            `${keywords[1]} whispers like the wind,`,
            `A dance of ${keywords[2]}, in the moon's soft glow,`,
            `Where ${keywords[3]} and ${keywords[4]} intertwine.`,
            `The ${keywords[5]} fades, as dawn breaks the night,`,
            `And ${keywords[6]} greets the new day with a tender sigh.`
        ];

        // Shuffle lines if there are not enough keywords
        while (lines.length > keywords.length) {
            lines.pop();
        }

        return lines.join('\n');
    }
});
