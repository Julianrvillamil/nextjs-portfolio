import Image from "next/image";
import ImageNative from "next/future/image";
import style from "./Banner.module.css";

export default function BannerHome() {
  return (
    <div>
      <div className="contenedor">
        <div className={style.imContainer}>
          <Image
            className={style.img}
            id={"home"}
            src={"/images/bannerHomePortfolio.jpg"}
            alt="Picture of the author"
            width="100%"
            height="54px"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </div>
        <h1 className={style.title}>Soy un Desarrollador Web</h1>
      </div>
      <style jsx>{`
        .contenedor {
          position: relative;
        }
      `}</style>
    </div>
  );
}
