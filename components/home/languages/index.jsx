import style from "./Idiomas.module.css";

export default function Idiomas({ idioma, nivel }) {
  return (
    <div>
      <div className={style.idiomaContainer}>
        <p className={style.idioma}>
          {idioma} {nivel}
        </p>
      </div>
    </div>
  );
}
