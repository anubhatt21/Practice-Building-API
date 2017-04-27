
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
        var lowerOriginFilter = this.nameFilterOrigin.toLowerCase();
        var filtered = this.foods.filter(function(fooditem) {
          var lowerName = fooditem.name.toLowerCase();
          var lowerOrigin = fooditem.origin.toLowerCase();
          return lowerName.indexOf(lowerNameFilter) !== -1 && lowerOrigin.indexOf(lowerOriginFilter) !== -1;
        });
        return filtered;
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
