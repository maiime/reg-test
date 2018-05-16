# 正则验证，目前只支持中国

## install:
```base
npm i reg-test --save
```

## use:
```javascript
const Tester require('reg-test')

Tester('13212345678').is('phone');  //true

Tester('021-12345678').is('telephone');  //true

Tester('maiime@qq.com').is('email');  //true

Tester(210000).is('postCode');  //true

Tester('http://www.abc.com').is('url');  //true

Tester('10.10.10.10').is('ipv4');  //true
```

## argument
|参数|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|arg[0]|String\|Number|是||需要验证的字符串或数字|
|arg[1]|String|否|zh-cn|国家或地区对应的i18n简写|

## is方法参数类型

### url: 主流网址
### ipv4: 合规ipv4
### email: 主流邮箱地址
## zh-cn:
### phone: 
#### 号段：130 131 132 133 134 135 136 137 138 139 145 147 150 151 152 153 155 156 157 158 159 176 177 178 180 181 182 183 184 185 186 187 188 189 
#### 国际区号 +86  +86- 86 86-
### telephone
#### 021-12345678 02112345678 12345678
#### 国际区号 +86 +86- 86 86- 
### postCode
#### 非0开头6位正整数