# Simple Bilingual React + Django Project

## English

This is a simple test project demonstrating how to build a bilingual website using:

- **Backend:** Django with `django-parler` for database translations
- **Frontend:** React with `react-i18next` for UI translations
- **Language Detection:** Automatically detects user language and switches UI and API calls
- **RTL/LTR Support:** Page direction switches based on language (e.g. Persian = RTL, English = LTR)
- **API:** Accepts `Accept-Language` header to serve translated product data

### Features

- Switching UI language with a button
- Loading product data translated from backend based on selected language
- Adjusting text direction dynamically
- Simple TypeScript support on frontend

### Setup

1. Clone the repo  
2. Install backend dependencies and migrate:
    ```bash
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
    ```
3. Install frontend dependencies and run:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
4. Visit `http://localhost:3000` and test language switch button

### Notes

- Backend uses `django-parler` to handle product translations in DB  
- Frontend uses `i18next` with language detector plugin  
- Axios sends `Accept-Language` header on requests to get correct translations

---

## فارسی

این پروژه ساده تستی نشان می‌دهد چطور یک سایت دوزبانه بسازیم با:

- **بک‌اند:** جنگو با `django-parler` برای ترجمه اطلاعات دیتابیس  
- **فرانت‌اند:** ری‌اکت با `react-i18next` برای ترجمه رابط کاربری  
- **تشخیص زبان:** زبان کاربر را خودکار تشخیص داده و رابط و API را تغییر می‌دهد  
- **پشتیبانی راست‌چین:** جهت صفحه بر اساس زبان تغییر می‌کند (مثلاً فارسی راست‌چین، انگلیسی چپ‌چین)  
- **API:** هدر `Accept-Language` را می‌خواند و اطلاعات ترجمه‌شده برمی‌گرداند

### امکانات

- دکمه تغییر زبان در رابط کاربری  
- دریافت اطلاعات محصول ترجمه شده از بک‌اند  
- تغییر جهت متن به صورت داینامیک  
- استفاده ساده از تایپ‌اسکریپت در فرانت

### نصب و راه‌اندازی

1. ریپازیتوری را کلون کنید  
2. وابستگی‌های بک‌اند را نصب و مهاجرت را اجرا کنید:
    ```bash
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
    ```
3. وابستگی‌های فرانت‌اند را نصب و اجرا کنید:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
4. مرورگر را باز کرده و به `http://localhost:3000` بروید و دکمه تغییر زبان را تست کنید

### نکات مهم

- بک‌اند از `django-parler` برای مدیریت ترجمه محصولات استفاده می‌کند  
- فرانت‌اند از `i18next` به همراه پلاگین تشخیص زبان بهره می‌برد  
- axios هدر `Accept-Language` را ارسال می‌کند تا ترجمه صحیح برگردد

---

> این پروژه یک نمونه ساده برای آشنایی با مفاهیم دوزبانه‌سازی در Django و React است و می‌توانید آن را به دلخواه گسترش دهید.
