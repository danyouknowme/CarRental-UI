export const generateSearchUrl = (model: string) => {
  return `https://www.google.com/search?q=${model
    .split(" ")
    .join(
      "+"
    )}&sxsrf=APq-WBuXMIijoB3ZboeXDNqP1zeSEE0BZQ:1650996341130&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj_irjTqLL3AhXU63MBHd5qDCoQ_AUoAXoECAEQAw&biw=1920&bih=947&dpr=1`;
};
