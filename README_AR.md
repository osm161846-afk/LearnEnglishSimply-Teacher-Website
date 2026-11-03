# Learn English Simply - Teacher Website

لوحة تحكم ويب مستقلة عن تطبيق الطلاب، مبنية باستخدام React + Vite + Firebase.

## التشغيل
1. ثبّت Node.js (نسخة LTS).
2. افتح مجلد المشروع في Terminal.
3. نفّذ:
   ```bash
   npm install
   npm run dev
   ```
4. افتح الرابط الذي يظهر في الطرفية.

## إعداد حساب المدرّس
- فعّل Email/Password في Firebase Authentication.
- أنشئ حسابًا موثق البريد بعنوان `to23454mas@gmail.com` من Firebase Authentication.
- اللوحة لا تسمح إلا بهذا البريد، ولا يوجد تسجيل حساب من واجهة الموقع.
- يجب أن يكون البريد Verified.

## إعداد Firebase
- فعّل Firestore Database.
- فعّل Storage وأنشئ bucket.
- انسخ محتوى `firestore.rules` إلى Firestore > Rules ثم Publish.
- انسخ محتوى `storage.rules` إلى Storage > Rules ثم Publish.
- إعدادات الويب موجودة في `src/firebase.ts`.

## رفع الفيديوهات
يتم حفظ الملفات في Storage داخل `teacher-videos/{grade}/`، وتُحفظ بياناتها في مجموعة `videos`:
`title`, `grade`, `unit`, `order`, `url`, `storagePath`, `createdAt`.

## ملاحظات مهمة
- القيم الموجودة في Firebase Web config ليست كلمة مرور؛ قواعد Firebase هي التي تحمي البيانات.
- لا تضع Service Account أو مفاتيح Admin داخل الموقع.
- قائمة الطلاب والمراجعات في هذه النسخة واجهات أولية؛ إدارة الفيديوهات هي الوظيفة المنفذة.
- راجع قواعد القراءة قبل النشر العام. القراءة متاحة للمستخدمين المسجلين فقط.
