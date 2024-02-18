import React from "react";
import s from "./style.module.scss";

export const Projects = () => {
  {
    /*https://mi-turno-web-deploy.vercel.app/*/
  }

  return (
    <div className={s.container}>
      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://tmdb-front-nine.vercel.app", "_blank");
        }}
        style={{
          background: "linear-gradient(to top right, #ebeed3, #bbdebd)",
        }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>🎬 The Movie DataBase ↗️</h1>
          <p>
            TMDb es una plataforma diseñada para ofrecer a los usuarios un
            extenso catálogo de películas y series. La aplicación permite a los
            usuarios registrarse, iniciar sesión, explorar información detallada
            sobre las películas y series, agregar contenido a su lista de
            favoritos y conectarse con otros entusiastas del cine y la
            televisión.
          </p>
          <p>
            <b>Registro y Autenticación:</b> Los usuarios pueden crear cuentas,
            iniciar sesión y mantener su sesión activa gracias al uso de tokens
            de autenticación, brindando una experiencia segura y personalizada.
          </p>
          <p>
            <b>Catálogo Detallado:</b> Aprovechando la API de TMDb, la
            aplicación ofrece acceso a un amplio contenido de películas y
            series, proporcionando información detallada y actualizada para
            satisfacer los gustos de los usuarios.
          </p>
          <p>
            <b>Listas de Favoritos:</b> Los usuarios tienen la posibilidad de
            agregar o quitar contenido de sus listas de favoritos,
            personalizando así su experiencia y marcando las películas y series
            que más les gustan.
          </p>
          <p>
            <b>Perfil de Usuario:</b> La aplicación brinda a los usuarios un
            perfil personalizado donde pueden acceder a su información, ver sus
            favoritos y explorar perfiles de otros usuarios, fomentando la
            interacción y la comunidad dentro de la plataforma.
          </p>
          <p>
            <b>Filtrado por Año:</b> La función de filtrado por año facilita a
            los usuarios la búsqueda de contenido específico, permitiéndoles
            explorar películas y series lanzadas en años particulares.
          </p>
          <p>
            <b>Restablecimiento de Contraseña:</b> Los usuarios pueden
            restablecer sus contraseñas de manera segura mediante un código de
            verificación enviado a su correo electrónico, garantizando la
            protección de sus cuentas.
          </p>
        </div>
        <div className={s.scHalf}
        style={{justifyContent:"space-evenly"}}
        >
          <img
            src="./tmdb_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
          <img
            src="./tmdb_scs2.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://mi-turno-web-deploy.vercel.app/", "_blank");
        }}
        style={{
          background: "linear-gradient(to top left, #f0e5fc, #d7b3f7)",
        }}
      >
        <div className={s.scHalf}
        style={{justifyContent:"space-evenly"}}
        >
          <img
            src="./mtw_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
          <img
            src="./mtw_scs2.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div className={s.scHalf} style={{ marginLeft: "10px" }}>
          <h1>📆 Mi turno web ↗️</h1>
          <p>
            Mi Turno Web es una aplicación web diseñada para simplificar el
            proceso de reserva de turnos en empresas con múltiples sucursales
            físicas. La plataforma permite una gestión eficiente de la cantidad
            de clientes presentes en cada ubicación y facilita la administración
            de los horarios disponibles.
          </p>
          <p>
            <b>Reservas Personalizadas:</b> Cada sucursal tiene la capacidad de
            ajustar la cantidad de clientes que puede atender simultáneamente,
            así como definir los rangos horarios disponibles para las reservas.
          </p>
          <p>
            <b>Duración de Turnos:</b> Los turnos tienen una duración fija de 15
            minutos, lo que facilita la planificación y optimización del tiempo
            tanto para la empresa como para los clientes.
          </p>
          <p>
            <b>Cancelación Flexible:</b> Los usuarios tienen la flexibilidad de
            cancelar sus reservas hasta con 2 horas de antelación,
            proporcionando una experiencia conveniente y evitando inconvenientes
            de último momento.
          </p>
          <p>
            <b>Panel Gráfico para Comercios:</b> La aplicación ofrece un panel
            gráfico intuitivo para que los comercios visualicen fácilmente las
            reservas realizadas. Esto facilita la gestión y organización de la
            afluencia de clientes en tiempo real.
          </p>
          <p>
            <b>Métricas y Análisis:</b> Además de la funcionalidad básica, Mi
            Turno Web proporciona herramientas de análisis que permiten a los
            administradores obtener métricas basadas en las reservas realizadas.
            Esto brinda información valiosa para la toma de decisiones y la
            mejora continua del servicio.
          </p>
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open(
            "https://github.com/Dadario23/fast-delivery-front",
            "_blank"
          );
        }}
        style={{
          background: "linear-gradient(to top right, #eeeded, #ade0fa)",
        }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>🛵 Fast Delivery (in Progress) ↗️</h1>
          <p>
            Fast Delivery es una aplicación diseñada para optimizar la operación
            de repartidores en una empresa de última milla. La plataforma cuenta
            con dos roles diferenciados: repartidores y administradores, cada
            uno con funciones específicas para garantizar un flujo eficiente de
            entregas.
          </p>
          <p>
            <b>Gestión de Repartidores:</b> Los administradores pueden acceder a
            la nómina de repartidores registrados, visualizar cuántos están
            activos con entregas en curso y conocer la cantidad de paquetes
            asignados a cada repartidor.
          </p>
          <p>
            <b>Creación y Edición de Paquetes:</b> La empresa puede crear,
            visualizar y editar los paquetes que deben ser enviados, permitiendo
            una gestión flexible y adaptativa.
          </p>
          <p>
            <b>Geolocalización en Tiempo Real:</b> Se implementa la
            geolocalización para visualizar en un mapa la ubicación actual de
            cada repartidor y su ruta de entrega, proporcionando a los
            administradores una visión en tiempo real de la operación.
          </p>
          <p>
            <b>Sistema de Puntos y Penalizaciones:</b> Se introduce un sistema
            de puntos para recompensar a los repartidores por paquetes
            entregados exitosamente. También se incluyen penalizaciones por no
            completar entregas, incentivando un desempeño eficiente y
            cumplimiento de responsabilidades.
          </p>
        </div>
        <div className={s.scHalf}>
          <img
            src="./fastD_scsb.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <h2>Another mini-projects:</h2>

      <div className={s.subContainer}>
        <div className={s.scTercio}>
          <a
            href="https://64c804bf2d66333b62576e26--magenta-faun-f9e969.netlify.app/"
            target="_blank"
          >
            <img className={s.img2} src="weather-2021-12-07.png" />
          </a>
          <h2>Weather Channel</h2>
        </div>
        <div className={s.scTercio}>
          <a href="https://bright-bonbon-0fc319.netlify.app/" target="_blank">
            <img className={s.img2} src="./reminders-2021-05-28.png" />
          </a>
          <h2>To Do List</h2>
        </div>
        <div className={s.scTercio}>
          <a
            href="https://64c70811457ce75636868ceb--remarkable-syrniki-fdecb4.netlify.app/"
            target="_blank"
          >
            <img className={s.img2} src="./colors.png" />
          </a>
          <h2>Color Game</h2>
        </div>
      </div>
    </div>
  );
};
