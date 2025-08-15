const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = './dummy-tasks.json';
// التأكد من وجود الملف
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([])); // إنشاء ملف فارغ إذا لم يكن موجودًا
}

// حفظ المهام
app.put('/tasks', (req, res) => {
  fs.writeFile(FILE_PATH, JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Failed to write file:', err);
      return res.status(500).send('Error saving tasks');
    }
    res.send({ message: 'Tasks saved successfully' });
  });
});

// قراءة المهام
app.get('/tasks', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading tasks');
    res.send(JSON.parse(data));
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
