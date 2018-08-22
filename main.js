new Vue({
    el: '#exercise',
    data: {
        name: 'Max',
        age: 27,
        image: 'https://camo.githubusercontent.com/224f79940611c6c12fb649128eca1cae31086d23/68747470733a2f2f7261776769742e636f6d2f7675656a732f617765736f6d652d7675652f6d61737465722f6c6f676f2e706e67'
    },
    methods: {
    random: function() {
      return Math.random();
      }
    }
});