
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('entryForm');
    const entryList = document.getElementById('entryList');
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    const renderEntries = () => {
        entryList.innerHTML = '';
        entries.forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = `${entry.date} - ${entry.farmName} - Cow ${entry.cowId}, Bull: ${entry.bullUsed} (${entry.semenType}) by ${entry.technician}`;
            entryList.appendChild(li);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEntry = {
            farmName: document.getElementById('farmName').value,
            technician: document.getElementById('technician').value,
            techNumber: document.getElementById('techNumber').value,
            techAssist: document.getElementById('techAssist').value,
            date: document.getElementById('entryDate').value,
            cowId: document.getElementById('cowId').value,
            bullUsed: document.getElementById('bullUsed').value,
            semenType: document.getElementById('semenType').value
        };
        entries.push(newEntry);
        localStorage.setItem('entries', JSON.stringify(entries));
        renderEntries();
        form.reset();
    });

    renderEntries();
});
