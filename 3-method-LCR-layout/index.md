# 网页宽度自适应的三种布局方法
## [本文参考](http://www.zhangxinxu.com/wordpress/2009/11/%E6%88%91%E7%86%9F%E7%9F%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E4%B8%89%E6%A0%8F%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95/)
1. [绝对定位法](https://colabearwd.github.io/3-method-LCR-layout/LCR-layout1.1.html)
    - 实现方案
        - 设置（左元素）（右元素）的position：absolute
        - 设置（左元素）top=0 left=0
        - 设置（右元素）top=0 right=0
        - 设置（中间元素）的margin-left和margin-right
    - 特征点
        - div 的顺序是可以任意调整
        - 
    - 缺点
        - 如果中间栏含有最小宽度限制，或是含有宽度的内部元素，当浏览器宽度小到一定程度，会发生层重叠的情况。
2. [margin负值法](https://colabearwd.github.io/3-method-LCR-layout/LCR-layout1.2.html)
    - 实现方案
        - （左元素）（右元素）设置width
        - （左元素）（右元素）设置float-left
        - （中间元素）需要设置margin的left和right
        - （左元素）需要设置margin-left 为 -100%
        - （右元素）需要设置margin-right为 -200px
    - 特征点
        - （中间元素）需要使用双层标签
        - div 的顺序 主体必须放在最前面
        - 有抗性，真正意义的自适应
    - 缺点
        - 难理解，上手不易
3. [自身浮动法](https://colabearwd.github.io/3-method-LCR-layout/LCR-layout1.3.html)
    - 实现方案
        - （左元素）（右元素）设置width
        - （左元素）（右元素）float到left和right
        - （中间元素）设置margin的left和right的值
    - 特征点
        - div 的顺序 主体必须放在最后面
    - 缺点
        - 中间主体存在克星，需要避免明显的clear样式