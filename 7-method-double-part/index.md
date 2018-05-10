# 7种办法，解决左右布局，左侧固定，右侧充满全部

1.  [双inline-block方案](https://colabearwd.github.io/7-method-double-part/demo1.html)
    - 实现方案
        - 父元素设置box-sizing：content-box
        - 子元素设置box-sizing：inline-box
        - 父元素要消除 空格的影响 font-size：0px
        - 子元素要让文字显示出来，设置 font-size：14px
        - 子元素要设置display：inline-block
        - 设置子元素顶端对齐 vertical-align：top
        - （右元素）通过CSS计算距离 width：calc(100% - 140px)
    - 缺点
        - 需要知道（左元素）的宽度，和（右元素）到（左元素）的距离
        - 父元素和子元素，都要设置box-sizing（不同）
        - 需要消除空格字符
        - 需要设置顶端对齐
2.  [双float方案](https://colabearwd.github.io/7-method-double-part/demo1.1.html)
    - 实现方案
        - 本方案要使用float，父元素需要清除浮动 overflow：auto
        - 父元素，子元素需要设置box-sizing（不同）
        - （右元素）通过CSS计算距离 width：calc(100% - 140px)
    - 缺点
        - 需要知道（左元素）的宽度，和（右元素）到（左元素）的距离
        - 父元素需要清除浮动
        - 
3.  [float + margin-left方案](https://colabearwd.github.io/7-method-double-part/demo1.2.html)
    - 实现方案
        - 本方案要使用float，父元素需要清除浮动 overflow：hidden
        - （左元素）需要设置float：left
        - （右元素）需要设置margin-left：160px
    - 缺点
        - 需要知道（左元素）的宽度，和（右元素）到（左元素）的距离
        - 父元素需要清除浮动
4.  [absolute + margin-left方案](https://colabearwd.github.io/7-method-double-part/demo1.3.html)
    - 实现方案
        - （左元素）设置为position：absolute
        - （右元素）设置margin-left：160px
    - 缺点
        - 若在某个div里面，需要修改父容器的position
        - 只有右侧的盒子可以撑开容器
        - 左侧盒子不能撑开容器
5.  [float + BFC方案](https://colabearwd.github.io/7-method-double-part/demo1.4.html)
    - 实现方案
        - 本方案要使用float，父元素需要清除浮动 overflow：auto
        - （右元素）通过overflow：auto。使本元素形成BFC，即右边的盒子是block
        - （左元素）使用float：left 
        - （左元素）使用margin-right
        - （右元素）使用margin-left
    - 缺点
        - 父元素需要清除浮动
        - （右元素）需要使用overflow形成BFC
        - 左右元素需要是哦用margin来控制间距
6.  [flex 方案](https://colabearwd.github.io/7-method-double-part/demo1.5.html)
    - 实现方案
        - 父元素设置成display：flex
        - 父元素的默认属性align-items：stretch 为flex-start
        - （左元素）flex: 0 0 auto;
        - （右元素）flex: 1 1 auto;
    - 缺点
        - align-items：stretch会导致等高效果
        - 兼容性好像不强
7.  [grid 方案](https://colabearwd.github.io/7-method-double-part/demo1.6.html)
    - 实现方案
        - 父元素设置display：grid
        - 子元素设置box-sizing：border-box
        - 父元素元素设置align-items：start，取消默认等高的效果
        - 父元素元素设置grid-template-columns: 120px 1fr;
        - （左元素）grid-column：1
        - （右元素）grid-column：2
    - 缺点
        - 需要取消等高的效果
        - 关于box-sizing的编剧问题