document.getElementById('convertBtn').addEventListener('click', () => {
    const resumeText = document.getElementById('resumeInput').value;

    // Use Showdown converter to convert text to markdown
    const converter = new showdown.Converter();

    // Convert resume text to markdown format
    const markdown = converter.makeMarkdown(resumeText);

    // Display the markdown output
    document.getElementById('markdownOutput').textContent = markdown;
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    const markdownContent = document.getElementById('markdownOutput').textContent;
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.md';
    a.click();
});
