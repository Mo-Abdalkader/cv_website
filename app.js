document.getElementById('previewBtn').addEventListener('click', function() {
    // Get resume input from textarea
    const resumeText = document.getElementById('resumeInput').value;

    // Display resume input as preview
    const resumePreview = document.getElementById('resumePreview');
    resumePreview.textContent = resumeText;
});
