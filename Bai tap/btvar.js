var toan = Number(prompt('Nhap dien toan: '));
var ly= Number(prompt('Nhap dien ly: '));
var hoa= Number(prompt('Nhap dien hoa: '));
tong = toan + ly+hoa;
dtb = tong/3;
var c = Number(prompt('Nhap do C: '))
f = (c/5*9)+32
var r = Number(prompt('nhap ban kinh hinh trong: '))
p = 2*r*3.14;
s = Math.pow(r,2)*3.14;
document.write('tong diem: '+tong);
document.write('<br>')
document.write('diem trung binh: '+dtb);
document.write('<br>')
document.write('do F: '+f);
document.write('<br>')
document.write('Chu vi: '+p);
document.write('<br>')
document.write('Dien tich '+s);