
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      foods: [],
      newFoodName: "",
      newFoodOrigin: "",
      nameFilterbyName: "",
      nameFilterOrigin: ""
    },

    computed: {
      filteredFoods: function() {
        var lowerNameFilter = this.nameFilterbyName.toLowerCase();
        console.log("lower name filter", lowerNameFilter);
        var filtered = this.foods.filter(function(fooditem) {
          var lowerName = fooditem.name.toLowerCase();
          return lowerName.indexOf(lowerNameFilter) !== -1;
        });
        return filtered;
      },
      filteredFoodsOrigin: function() {
        var 
      }
    },

    mounted: function() {
      $.get("/api/v1/foods", function(responseData) {
        this.foods = responseData;
      }.bind(this));
    },
    methods: {
      toggleOrigin: function(inputFoodItem) {
        inputFoodItem.origin = !inputFoodItem.origin;
      },
      addFoodItem: function() {
        var params = {name: this.newFoodName, origin: this.newFoodOrigin};
        $.post("/api/v1/foods", params, function(responseData) {
          this.foods.push(responseData);
          this.newFoodName = "";
          this.newFoodOrigin = "";
        }.bind(this));
      },
      deleteFoodItem: function(inputFoodItem) {
        var index = this.foods.indexOf(inputFoodItem);
        this.foods.splice(index, 1);
      }
    }
  });
});
