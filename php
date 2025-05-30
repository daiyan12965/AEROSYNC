
---

### 📄 `backend/server.js`

```javascript
const express = require('express');
const app = express();
const bookingRoutes = require('./routes/booking');

app.use(express.json());
app.use('/api/booking', bookingRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
