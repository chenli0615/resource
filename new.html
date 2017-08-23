<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
        slice
    </title>
</head>

<body>



    <script>
        //首先推荐大家看一本书：javascript 设计模式与开发实践 曾探著
        //一个关于new运算符引出的问题


        function Person(name) {
            this.name = name;
            alert(666);
            // return {
            //     "name": "bbb"
            // }
        }
        Person.prototype.getName = function() {
            return this.name
        }

        var objectFactory = function() {

            var obj = new Object(),
                Constructor = [].shift.call(arguments); //请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。so 在此之后的arguments元素只剩下一个了


            obj.__proto__ = Constructor.prototype; //关键 将obj实例的原型与Constructor的原型关联起来 即obj是Constructor的实例

            var ret = Constructor.apply(obj, arguments); //将Constructor 的this指向obj 并执行；ret返回值是undefined 当函数没有返回值的时候返回undefined；

            return typeof ret === 'object' ? ret : obj;
        }

        // var a = objectFactory(Person, "chenli");
        // console.log("&&&&" + a.name);

        var b = new Person("aaa");
        console.log("++++" + b.name);

        //console.log(Object.getPrototypeOf(a) === Person.prototype);
        console.log(Object.getPrototypeOf(b) === Person.prototype);
        console.log(b.__proto__ === Person.prototype); //当构造函数返回除对象时或没有返回值时 那么实例的原型指向Object.prototype
        //console.log(b.__proto__ === Object.prototype); 当构造函数返回对象时 那么实例的原型指向Object.prototype


        // new 操作符的预算机制：
        //1 创建空对象obj 构造函数Constructor
        //2 把构造函数Constructor的原型赋值给 obj实例的原型 即将obj和Constructor扯关系
        //3 把构造函数Constructor的原型对象的this指向obj实例对象
        //4 返回






        //相关知识点：

        //注意一：shift
        //如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。


        //注意二：slice
        //1.将类数组转数组
        // Array.prototype.slice.call(arguments) or  [].slice.call(arguments)
        //原理： slice 内部调用Iterator接口即遍历
        //相关文章：http://www.jb51.net/article/70106.htm

        //2.[]是Array 的实例
    </script>

</body>

</html>