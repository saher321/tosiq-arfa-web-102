// SLUG
// input: Classic Margherita Pizza
// output: classic-margherita-pizza
export const generateSlug = (name) => {
    return name.replaceAll(" ", "-").toLowerCase();
}
