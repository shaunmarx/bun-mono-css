import { definePreset } from "@pandacss/dev";
import {  buttonRecipe } from "./Button/Button.recipe";

export const preset = definePreset({
    theme: {
        recipes: {
            button: buttonRecipe
        }
    }
})