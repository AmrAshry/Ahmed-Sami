
const btn = document.querySelector(".mode-btn");
const overlay = document.querySelector(".overlay");
const infoSection = document.querySelector(".info"); // لتغيير كل النصوص بداخلها
const allLinks = document.querySelectorAll(".links a i"); // أيقونات السوشيال ميديا (إذا أردت التحكم بها)

btn.addEventListener("click", () => {
    // سنستخدم كلاس واحد على حاوية المعلومات للتحكم في كل شيء بداخلها
    infoSection.classList.toggle("active-mode");
    
    // تحديد العناصر التي تريد تحويلها للون الأبيض
    const elementsToWhite = document.querySelectorAll("h1, p, span, .info, .amr");

    if (infoSection.classList.contains("active-mode")) {
        // تشغيل الوضع المظلم
        elementsToWhite.forEach(el => el.classList.add("active"));
        overlay.style.backgroundColor = "#1a282c";
        overlay.style.opacity = "0.9";
        btn.innerHTML = "☀️";
    } else {
        // العودة للوضع الفاتح
        elementsToWhite.forEach(el => el.classList.remove("active"));
        overlay.style.backgroundColor = "#e2e6f0";
        overlay.style.opacity = "0.7";
        btn.innerHTML = "🌙";
    }
});

// كود الصورة كما هو مع تصحيح بسيط في اختيار الكلاس
const profileImg = document.querySelector(".img img");
profileImg.addEventListener("mouseenter", () => {
    profileImg.style.filter = "brightness(1.2)";
});
profileImg.addEventListener("mouseleave", () => {
    profileImg.style.filter = "brightness(1)";
});