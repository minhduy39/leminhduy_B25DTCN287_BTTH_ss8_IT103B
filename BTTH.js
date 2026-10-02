// 1. Hàng đợi ban đầu
let arrs = ['30A-111', '29B-222', '51C-333'];

console.log('Hàng đợi ban đầu:', arrs);

// 2. Xe mới đến - thêm vào cuối hàng bằng push()
arrs.push('43D-444');

console.log('Sau khi thêm xe mới:', arrs);

// 3. Xe ưu tiên - chèn vào vị trí index 1 bằng splice()
// splice(index, số_lượng_xóa, phần_tử_thêm)
arrs.splice(1, 0, '14A-999');

console.log('Sau khi thêm xe ưu tiên:', arrs);

// 4. Xe đầu tiên vào cổng sạc - shift()
let firstCars = arrs.shift();

console.log('Xe vào sạc:', firstCars);
console.log('Hàng đợi còn lại:', arrs);

// 5. Kiểm tra xe có trong hàng đợi hay không
console.log('Có xe 43D-444 không?', arrs.includes('43D-444'));

// Tìm vị trí của xe 14A-999
console.log('Vị trí xe 14A-999:', arrs.indexOf('14A-999'));

// 6. Tính tổng điện năng tiêu thụ
let powers = [30, 45, 25];
let totalKWh = 0;

for (let power of powers) {
    totalKWh += power;
}

// 7. Tính tiền điện
let pricePerKWh = 4500;
let totalMoney = totalKWh * pricePerKWh;

console.log('Tổng điện năng:', totalKWh, 'kWh');
console.log('Đơn giá:', pricePerKWh, 'VNĐ/kWh');
console.log('Tổng tiền:', totalMoney, 'VNĐ');