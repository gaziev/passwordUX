# PasswordUX
jQuery плагин для добавление кнопки [показать/скрыть] для полей ввода пароля

![jQuery плагин для добавление кнопки [показать/скрыть] для полей ввода пароля](https://leto19g.storage.yandex.net/rdisk/a53d7ef472ae7379897800ed32662c59469cf0de94fea5142765933665f8460f/inf/O_3xPtcXXIkhJt3WcOoQVNxdCmwAj1TUDX_xRLtJ-r3hC_YyB0WE9t2GIMFP98CFYPocQqx5CyYyr9v8fhRJrA==?uid=0&filename=2015-05-21%2022-18-04%20%D0%9F%D0%B0%D1%80%D0%BE%D0%BB%D0%B8%20UX%20-%20Google%20Chrome.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&rtoken=b74f3983738141f6c7f9d54b2bd87666&force_default=no)

## Как подключить?
```html
<script src="js/jquery.min.js"></script>
<script src="js/passwordUX.js"></script>

...

<script>
    $(document).ready(function () {

        $('input[type = "password"]').passwordUX({
            showHtml: 'показать',
            hideHtml: 'скрыть'
        });

    });
</script>
```
## Опции
```js
wrapperClass: 'password-ux', // класс блока в который оборачивается поле ввода
switcherClass: 'switch',     // класс кнопи показать/скрыть (формируется так wrapperClass + '_' + switcherClass
switcherBg: '#F2F2F2',       // фоновый цвет кнопки по умолчанию
switcherIndent: 4,           // отступ от границ поля ввода
showHtml: 'show',            // HTML кнопки ПОКАЗАТЬ
hideHtml: 'hide',            // HTML кнопки СКРЫТЬ
dataAttr: 'data-pux-show'    // data атрибут блока в который оборачивается поле ввода
```

[Демонстрация на JSFiddle](https://goo.gl/ZM5kEE)
