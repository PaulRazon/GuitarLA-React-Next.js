import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'
function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'En esta pagina puedes conocer mas acerca de nosotros'}
    >
      <main className='contenendor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt='Imagen sobre nosotros' width={1000} height={700}/>
          <div>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
          </div>
        </div>
      </main>

    </Layout>
  )
}

export default Nosotros
