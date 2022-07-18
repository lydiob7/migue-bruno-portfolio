import entreMujeres1 from 'assets/images/entre-mujeres1.jpg';
import entreMujeres2 from 'assets/images/entre-mujeres2.jpg';
import entreMujeres3 from 'assets/images/entre-mujeres3.jpg';
import entreMujeresMain from 'assets/images/entre-mujeres-y-el-barro.jpg';
import deLaIdeaAlHecho1 from 'assets/images/de-la-idea-al-hecho.jpg';
import deLaIdeaAlHecho2 from 'assets/images/de-la-idea-al-hecho-2.jpg';
import deLaIdeaAlHecho3 from 'assets/images/de-la-idea-al-hecho-3.jpg';
import deLaIdeaAlHecho4 from 'assets/images/de-la-idea-al-hecho-4.jpg';
import entreCodigos1 from 'assets/images/entre-codigos-1.jpg';
import entreCodigos2 from 'assets/images/entre-codigos-2.jpg';
import relatos1 from 'assets/images/relatos3.jpg';

const projects = {
    'entre-mujeres-y-el-barro': {
        id: '1',
        title: 'Entre mujeres y el barro',
        mainImage: entreMujeresMain,
        image1: entreMujeres1,
        image2: entreMujeres2,
        image3: entreMujeres3,
        instagramLink: 'https://www.instagram.com/entremujeresyelbarro/',
        instagramToken: process.env.REACT_APP_ENTRE_MUJERES_INSTAGRAM_TOKEN,
        email: 'vaikunthadelatierra@gmail.com',
        uri: '/proyectos/entre-mujeres-y-el-barro',
        abstract:
            'El proyecto Entre Mujeres y el Barro es un dispositivo para lograr una producción colectiva del saber, donde se desarrolla y se construye el pensamiento crítico para comprender el entorno socio productivo, la mirada sensible y creativa entre las compañeras, empoderandose al mismo tiempo , y por sobre todo, del oficio.',
        description: [
            'ENTRE MUJERES Y EL BARRO nace en el 2019 (en ese entonces aún sin su identidad)  en la Localidad de Profundidad, Mnes. donde presento un proyecto a través de la Biblioteca Popualar El Urunday, con el objetivo de generar el aprehendizaje de un oficio con legado, un modo de pensar/ sentir/ hacer situado, para la autonomía integral de las mujeres a través del oficio cerámico de raiz preamericana, desde un abordaje psicosocial con perspectiva de género, en pos de construir una economía feminista y comunitaria, que  provoque la emancipación económica en las mujeres e incrementen así los ingresos de las familias.'
        ]
    },
    'taller-adentro': {
        id: '2',
        title: 'Taller Adentro',
        subtitle: 'Conocé nuestras propuestas',
        instagramLink: 'https://www.instagram.com/vaikuntha__ct/',
        instagramToken: process.env.REACT_APP_TALLER_ADENTRO_INSTAGRAM_TOKEN,
        subdivisions: [
            {
                id: '1',
                key: 'de-la-idea-al-hecho',
                title: 'De la idea al hecho: se transita',
                mainImage: deLaIdeaAlHecho1,
                otherImages: [deLaIdeaAlHecho2, deLaIdeaAlHecho3, deLaIdeaAlHecho4],
                email: 'vaikunthadelatierra@gmail.com',
                uri: '/proyectos/taller-adentro#top',
                abstract:
                    'Desde el aprendizaje de las técnicas básicas de la cerámica tradicional preamericana, abordamos la  poética material.',
                description: [
                    'Desde el aprendizaje de las técnicas básicas de la cerámica tradicional preamericana, abordamos la  poética material.  ¿Qué emana de esa relación Mano/cuerpo> arcilla/paisaje -identidad?  Interacción entre el deseo propio y la materialidad que se expresa.  El “somos conducides” - un dialogo que se retroalimenta.  ¿Qué gestos aparecen en las piezas-objetos? ¿qué huella se expresa?',
                    'Desde estos disparadores iremos observando qué narrativa comienza a emanar desde la corporeidad de cada objeto y en relación.'
                ]
            },
            {
                id: '2',
                key: 'entre-codigos',
                title: 'Entre códigos, símbolos y poéticas materiales. Dialogando con el cielo y la tierra',
                subtitle: 'Dialogando con el cielo y la tierra',
                mainImage: entreCodigos1,
                otherImages: [entreCodigos2],
                email: 'vaikunthadelatierra@gmail.com',
                uri: '/proyectos/taller-adentro#entre-codigos',
                abstract:
                    'Tomando contacto con la carta astral de cada participante, indagaremos con la intuición como principal aliada, en  imágenes arquetípicas, las cuales poseen un carácter arcaico, expresando  contenido del inconsciente colectivo.',
                description: [
                    'Tomando contacto con la carta astral de cada participante, indagaremos con la intuición como principal aliada, en  imágenes arquetípicas, las cuales poseen un carácter arcaico, expresando  contenido del inconsciente colectivo.',
                    'Abriremos un breve circulo de palabra, desplegando sensaciones y sentipensares de las imágenes que se hayan expresado, usando como recurso el dibujo y la palabra, para desde allí entrar en dialogo con  la arcilla y crear un amuleto como conjuro. Gestando luego entre todes, como cierre de la propuesta, una narrativa visual, una práctica ritualizada en el espacio público'
                ]
            }
        ]
    },
    'relatos-visuales': {
        id: '3',
        title: 'Relatos visuales',
        mainImage: relatos1,
        email: 'vaikunthadelatierra@gmail.com',
        uri: '/proyectos/relatos-visuales',
        abstract:
            'Relatos visuales es un proyecto colectivo colaborativo de lenguaje plástico/visual, donde buscamos, a partir de la experiencia del trabajo de campo por medio de entrevistas en un compartir fluido con les protagonistas de esta narrativa, visibilizar, revalorizar y poner en dialogo con el contexto actual, historias que hacen a nuestra cultura regional, que están impresas en las memorias corporales y constituyen también nuestras subjetividades.'
    }
};

export default projects;
