var utils = {
    /* 数组去重 */
    uniqueArr: function(arr){
        var res = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            var repeat = false;
            for (var j = 0; j < i; j++) {
                if (arr[i] === res[j]) {
                    repeat = true;
                    break;
                }
            }
            if (!repeat) {
                res.push(arr[i])
            }
        }
        return res;
    },
    /* 日期格式化，第一个参数为日期，第二个参数为日期格式化的格式，返回一个格式化后的字符串 */
    dateFormat: function (date, format) {
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    /* 获取浏览器url中的参数值 */
    getUrlParam: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    getTodayDate: function(){
        
    }
}