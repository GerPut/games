const checkbox = document.getElementById('checkbox');
var anchors = document.querySelectorAll('a');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    anchors.forEach(x => x.classList.toggle('red'));
});
