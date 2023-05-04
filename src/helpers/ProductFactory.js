const ProductFactory = (id, price, name, image, quantity, slug) => ({
    id,
    name,
    price,
    image,
    quantity,
    slug,
    incrementQuantity() {
      this.quantity += 1;
    }
  })

export default ProductFactory;