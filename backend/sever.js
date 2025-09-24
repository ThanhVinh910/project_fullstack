import express from 'express';

const app = express();

app.listen(5001, () => {
    console.log("sever bắt đầu trên cổng 5001");
});