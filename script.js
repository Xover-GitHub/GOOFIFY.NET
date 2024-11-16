"use strict";

function goofify() {
    let text = document.getElementById("typed-text").value;
    let c_text = text.replace(/r/g, 'w');
    c_text = c_text.replace(/R/g, 'W');
    c_text = c_text.replace(/р/g, 'в');
    c_text = c_text.replace(/Р/g, 'В');

    document.getElementById("GFied-text").textContent = c_text + " :3";
}

async function copyboard() {
    try {
        // Get the text content of the clicked element
        const textToCopy = document.getElementById("GFied-text").textContent;
        // Use the Clipboard API to write the text to the clipboard
        await navigator.clipboard.writeText(textToCopy);
        document.getElementById("GFied-text").textContent = "Copied To Clipboard!";
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

let video = document.getElementById('BGvideo');

function reducelag() {
    video.parentNode.removeChild(video);
    document.getElementById("reducelag").textContent = "Disabled! (UPD Page To Enable)"
}

document.getElementById("GFy-submit").addEventListener("click", goofify);

document.getElementById("GFied-text").addEventListener("click", copyboard);

document.getElementById("reducelag").addEventListener("click", reducelag);