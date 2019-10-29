import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Shoyu Ramen",
      imageUrl:
        "https://seonkyounglongest.com/wp-content/uploads/2018/04/shoyu-ramen-1.jpg",
      ingredients: [
        "Egg",
        "Ramen Noddles",
        "Soy Sauce",
        "Chicken Broth",
        "Pork Belly"
      ]
    },
    {
      id: "r2",
      title: "Miso Ramen",
      imageUrl:
        "https://yutaka.london/userassets/RECIPE/675C0712_onSurface.jpg",
      ingredients: [
        "Egg",
        "Ramen Noddles",
        "Miso paste",
        "Chicken Broth",
        "Pork Belly"
      ]
    }
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
