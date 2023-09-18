## Mi Proyecto Final

### Componentes

- **BuyBtn**: Maneja la acción de compra en la aplicación. Cuando el usuario hace clic en "Comprar", vacía el carrito y muestra un mensaje de confirmación.

- **Footer**: Componente similar al NavBar pero con un estilo diferente.

- **ItemQuantitySelector**: Componente para aumentar o disminuir la cantidad de productos en el contexto CartWidgetContext.

- **Loading**: Componente que muestra un ícono de carga.

- **ItemList**: Componente "card" que muestra todas las propiedades pasadas por el componente padre (ItemListContainer).

- **ItemListContainer**: Muestra una lista de productos obtenidos desde Firebase. Permite filtrar por categoría, muestra una pantalla de carga durante la obtención de datos y utiliza el componente ItemList para mostrar los productos.

- **CartWidget**: Componente del carrito con redirección a la ruta "checkout". Muestra un ícono de carrito junto con el componente NumberProducts que muestra la cantidad de productos en el CartWidgetContext.

- **MenuNav**: Componente que contiene las categorías del NavBar con sus respectivas rutas.

- **NavBar**: Componente NavBar común.

- **NumberProducts**: Componente encargado de sumar la cantidad de productos en el CartWidgetContext.

### Rutas

- **/checkout**: El componente Checkout administra y muestra el carrito de compras, permite eliminar productos y muestra el precio total.

- **/detail**: El componente Detail muestra los detalles de un producto específico y utiliza Firebase para acceder a la información. Muestra una pantalla de carga mientras obtiene los datos y luego muestra los detalles del producto.

### Context

- **CartWidgetContext**: El componente CartWidgetProvider crea un contexto llamado CartWidgetContext que proporciona información sobre el carrito de compras a otros componentes de la aplicación. Almacena y gestiona el estado del carrito utilizando el hook useState.
