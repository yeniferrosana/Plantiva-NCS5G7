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

- Seguir esta nomenclatura para la creación de componentes como ejemplo:

  Poner un prefijo SP(Sistema de plantas) solo para una convención y dar mejor orden a los componentes

  ```
  SPFooter.vue
  ```

- Para este proyecto se esta utilizando prettier, eslint y husky que se encargaran del estilo de codigo y formateo del codigo y además que esos procesos se realizarán cuando hagamos commits y pusheamos nuestros cambios al repositorio remoto


<!-- ABOUT THE PROJECT -->
## Equipo
* Elias Galeano - Backend Dev 
<br>[![LinkedIn][linkedin-shield]][linkedin-url-elias]  [![GitHub][github-shield]][github-url-elias]

* Francisco Nanoia - Backend Dev 
<br>[![LinkedIn][linkedin-shield]][linkedin-url-fran]  [![GitHub][github-shield]][github-url-fran]

* André Umbert - Frontend Dev
<br>[![LinkedIn][linkedin-shield]][linkedin-url-andre]  [![GitHub][github-shield]][github-url-andre]

* Yenifer Ramírez  - Frontend Dev 
<br>[![LinkedIn][linkedin-shield]][linkedin-url-yenifer]  [![GitHub][github-shield]][github-url-yenifer]

* Daniel Aguilar  - Frontend Dev 
<br>[![LinkedIn][linkedin-shield]][linkedin-url-daniel]  [![GitHub][github-shield]][github-url-daniel]

* Bautista Sierra Lacosta  - UX/UI Designer
<br>[![LinkedIn][linkedin-shield]][linkedin-url-bauti]  [![GitHub][github-shield]][github-url-bauti]


<!-- LINKS -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-andre]: https://www.linkedin.com/in/andr%C3%A9-umbert-507209201/
[linkedin-url-fran]: https://linkedin.com/in/fnanoia
[linkedin-url-bauti]: https://www.linkedin.com/in/bautista-sierra-lacosta/
[linkedin-url-daniel]: https://www.linkedin.com/in/wdanielaguilar/
[linkedin-url-yenifer]: https://www.linkedin.com/in/yeniferrosana
[linkedin-url-elias]: https://www.linkedin.com/in/elias-david-galeano/

[github-shield]: https://img.shields.io/badge/Github-61DAFB.svg?style=for-the-badge&logo=github&logoColor=FFFFFF
[github-url-elias]: https://github.com/galeanoelias
[github-url-fran]: https://github.com/fnanoia
[github-url-daniel]: https://github.com/Onnichan
[github-url-yenifer]: https://github.com/yeniferrosana
[github-url-andre]: https://github.com/AndreUmbertReact
[github-url-bauti]: https://github.com/bauysi
