sync function generateImage() {
    const text = document.getElementById("textInput").value;
    if (!text) {
        alert("Please enter some text!");
        return;
    }

    const response = await fetch("https://api.deepai.org/api/text2img", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": "YOUR_DEEPAI_API_KEY"  // Replace with your DeepAI API key
        },
        body: JSON.stringify({text: text})
    });

    const data = await response.json();
    document.getElementById("generatedImage").src = data.output_url;
}
