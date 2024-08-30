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
