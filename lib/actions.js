"use server";

import { redirect } from "next/navigation";
import { SaveMeal } from "./meal";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function ShareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image === 0
  ) {
    return { message: "Invalid input." };
  }
  await SaveMeal(meal);
  redirect("/meals");
}
