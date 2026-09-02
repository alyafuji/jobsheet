document.addEventListener('DOMContentLoaded', () => {
    const logForm = document.getElementById('logForm');
    const notif = document.getElementById('notif');

    logForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const topik = document.getElementById('topik').value;

        notif.textContent = `Sip, log untuk topik "${topik}" berhasil disimpan oleh ${nama}!`;
        notif.className = 'notif-box success';

        logForm.reset();

    
        setTimeout(() => {
            notif.className = 'notif-box hidden';
        }, 4000);
    });
});