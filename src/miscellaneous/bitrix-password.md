# Bitrix admin panel without password
```php 
<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $USER;
$USER->Authorize(1);
@unlink(__FILE__); 
LocalRedirect("/bitrix/admin/");
```