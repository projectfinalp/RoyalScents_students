// Products boxes
let productsContainer = document.querySelector(".products .container");
let imgesArr = [];
let names = ["Desert Oud", "Royal Amber", "Arabian Nights", "Mystique", "Golden Saffron", "Midnight Oud", "Leather & Spice", "Velvet Rose", "Mystic Oud", "Amber Elegance", "Oud Majesty", "Saffron Breeze"];
let prices = [450, 600, 500, 550, 700, 480, 650, 520, 470, 620, 580, 530]; // الأسعار بالريال السعودي

// إنشاء مصفوفة للصور
for (let i = 0; i < names.length; i++) {
    imgesArr[i] = `images/perfume${i + 1}.jpg`; // تغيير مسار الصور لتعكس العطور
}

// إنشاء الصفوف والصناديق
let index = 0;
for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.className = "row";
    
    // إنشاء الصناديق
    for (let j = 0; j < 4; j++) {
        let box = document.createElement("div");
        let image = document.createElement("div");
        let text = document.createElement("div");

        box.className = "box col-md-3 col-sm-6";
        image.className = "image";
        text.className = "text mt-2";

        let img = document.createElement("img");
        img.className = "img";
        img.src = imgesArr[index];
        
        let head2 = document.createElement("h2");
        head2.className = "name";
        head2.innerHTML = names[index];
        
        let para = document.createElement("p");
        para.className = "price";
        para.innerHTML = `${prices[index]} SAR`; 
        
        image.appendChild(img);
        text.appendChild(head2);
        text.appendChild(para);

        let btn = document.createElement("button");
        btn.className = "mb-3";
        btn.innerHTML = "Order Now";
        text.appendChild(btn);

        box.appendChild(image);
        box.appendChild(text);

        row.appendChild(box);
        index++;
    }
    productsContainer.appendChild(row);
}