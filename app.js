document.getElementById('entry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const entry = {
        farmName: form.get('farmName'),
        techName: form.get('techName'),
        techNumber: form.get('techNumber'),
        techAssist: form.get('techAssist'),
        date: form.get('date'),
        cowIds: form.get('cowIds').split(',').map(id => id.trim()),
        bullUsed: form.get('bullUsed'),
        semenType: form.get('semenType')
    };
    let entries = JSON.parse(localStorage.getItem('entries') || '[]');
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
    alert('Entry added');
    this.reset();
});