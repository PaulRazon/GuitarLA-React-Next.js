import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"
export default function Guitarra({guitarra}) {
  const {descripcion, nombre, imagen, precio, url} = guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen de la guitarra ${nombre}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>$ {precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>  
  )
}
