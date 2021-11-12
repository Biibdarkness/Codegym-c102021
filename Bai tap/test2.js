var dtb = 5;
var kq = dtb < 0 && dtb > 10 ? console.log("nhap lai") :
    kq = dtb <= 10 && dtb >= 9 ? console.log("sx") :
        kq = dtb < 9 && dtb >= 8 ? console.log("gioi") :
            kq = dtb < 8 && dtb >= 7 ? console.log("kha") :
                kq = dtb < 7 && dtb >= 6 ? console.log("tbk") :
                    kq = dtb < 6 && dtb >= 5 ? console.log("tb") : console.log("kem")