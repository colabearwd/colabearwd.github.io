# File Navigation 

要求：
    实现一个两栏布局，左侧占30%宽度，右侧占70%宽度
    实现一个两栏布局，左侧固定宽度，右侧根据浏览器宽度进行自适应变化
    实现一个两栏布局，右侧固定宽度，左侧根据浏览器宽度进行自适应变化
    实现一个三栏布局，左侧固定宽度，右侧固定宽度，中间部分宽度随浏览器宽度变化而自适应变化
    实现一个三栏布局，左侧固定宽度，中间固定宽度，右侧根据浏览器宽度变化而自适应变化

- [demo1](https://colabearwd.github.io/layout-demo/demo1.html)
    - 实现一个两栏布局，左侧占30%宽度，右侧占70%宽度
    - 使用float，2个div都使用float
    - width设置为30% 70%

- [demo1.1](https://colabearwd.github.io/layout-demo/demo1.1.html)
    - 实现一个两栏布局，左侧占30%宽度，右侧占70%宽度
    - 把父节点设置成display：flex
    - div1 设置flex：3
    - div2 设置flex：7

- [demo2](https://colabearwd.github.io/layout-demo/demo2.html)
    - 实现一个两栏布局，左侧固定宽度，右侧根据浏览器宽度进行自适应变化
    - div1 设定width为固定值100px，设置为float：left 
    - div2 设置 margin-left：100px

- [demo2.1](https://colabearwd.github.io/layout-demo/demo2.1.html)
    - 实现一个两栏布局，左侧固定宽度，右侧根据浏览器宽度进行自适应变化
    - 父节点设置display：flex
    - div1 设置with：300px
    - div2 设置flex：1

- [demo3](https://colabearwd.github.io/layout-demo/demo3.html)
    - 实现一个两栏布局，右侧固定宽度，左侧根据浏览器宽度进行自适应变化
    - div1 设置width为固定值200px，设置为float：right
    - div2 设置成 margin-right：200px

- [demo3.1](https://colabearwd.github.io/layout-demo/demo3.1.html)
    - 实现一个两栏布局，右侧固定宽度，左侧根据浏览器宽度进行自适应变化
    - 父节点设置display：flex
    - div1 设置flex:1
    - div2 设置with:300px

- [demo4](https://colabearwd.github.io/layout-demo/demo4.html)
    - 实现一个三栏布局，左侧固定宽度，右侧固定宽度，中间部分宽度随浏览器宽度变化而自适应变化
    - 首先设置div1的 width：300px 在左侧float：left
    - 然后设置div2的 width：200px 在右侧float：right
    - 设置div3 margin-left：300px，margin-right：200px

- [demo4.1](https://colabearwd.github.io/layout-demo/demo4.1.html)
    - 实现一个三栏布局，左侧固定宽度，右侧固定宽度，中间部分宽度随浏览器宽度变化而自适应变化
    - 首先设置父节点为 display：flex
    - 设置div1的width=200px
    - 设置div2的flex=1
    - 设置div3的width=200px

- [demo5](https://colabearwd.github.io/layout-demo/demo5.html)
    - 实现一个三栏布局，左侧固定宽度，中间固定宽度，右侧根据浏览器宽度变化而自适应变化
    - 首先设置div1的 width：300px 在左侧float：left
    - 然后设置div2的 width：200px 在右侧float：left
    - 设置div3 margin-left：300px + 200px

- [demo5.1](https://colabearwd.github.io/layout-demo/demo5.1.html)
    - 实现一个三栏布局，左侧固定宽度，中间固定宽度，右侧根据浏览器宽度变化而自适应变化
    - 首先设置父节点为 display：flex
    - 设置div1的width=200px
    - 设置div2的width=200px
    - 设置div3的flex=1
