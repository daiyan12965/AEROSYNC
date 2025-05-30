document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const flight = document.getElementById('flight').value;
    const seat = document.getElementById('seat').value;

    const res = await fetch('http://localhost:3000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, flightNumber: flight, seat })
    });

    const data = await res.json();
    alert(data.message);
});
