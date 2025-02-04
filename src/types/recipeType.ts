export type recipeType={
    id: number,
    authorId: number,
    title: string,
    description: string,
    ingredients: string[],
    instructions: string
}
export type partialRecipeType={
    title: string,
    description?: string | undefined,
    ingredients: (string | undefined)[],
    instructions: string    
}