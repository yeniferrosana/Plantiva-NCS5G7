# S5-G7

### Pasos para correr el proyecto

Primero clonamos el proyecto en tu maquina local e instalamos las dependecias necesarias para el proyecto con

```
yarn install
```

pero antes de correr el programa tendrá que crear dos archivos `.env.development.local` y `.env.production.local` en la raiz del proyecto, como nota se antepone VITE\_ ya que se esta utilizando como empaquetador por defecto, puede documentarse acerca de variables de entorno en vite [aqui](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)

```
VITE_URL_BASE_API=
```

y luego ejecutamos el proyecto en modo local con el siguiente comando

```
yarn dev
```

### Nota:

* Seguir esta nomenclatura para la creación de componentes como ejemplo:

  Poner un prefijo SP(Sistema de plantas) solo para una convención y dar mejor orden a los componentes

  ```
  SPFooter.vue
  ```

* Para este proyecto se esta utilizando prettier, eslint y husky que se encargaran del estilo de codigo y formateo del codigo y además que esos procesos se realizarán cuando hagamos commits y pusheamos nuestros cambios al repositorio remoto
