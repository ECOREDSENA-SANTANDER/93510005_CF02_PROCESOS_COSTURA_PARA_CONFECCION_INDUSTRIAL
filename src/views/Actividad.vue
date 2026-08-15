<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Procesos de costura y terminados.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> la comprensión de los conceptos técnicos relacionados con operaciones de ensamble, técnicas de costura industrial, ruta operacional, tiempos básicos, flujo de producción y parámetros de calidad en prendas confeccionadas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del ensamble en confección industrial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar las piezas cortadas únicamente para facilitar el empaque final del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar las piezas textiles hasta conformar la estructura completa de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar la ficha técnica cuando la prenda entra en proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir el precio comercial de la prenda después del control de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del ensamble como proceso técnico que integra piezas textiles para conformar la estructura funcional de una prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto permite controlar la unión adecuada entre piezas textiles?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de prendas empacadas al finalizar el lote de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tipo de exhibición comercial definido para presentar la colección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El diseño publicitario utilizado para comunicar la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La coincidencia de marcas, piquetes, márgenes y sentido del material.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de los elementos de control que garantizan precisión durante la unión de piezas en el proceso de ensamble.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza a una costura curva bien ejecutada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conserva el recorrido previsto sin generar fruncidos, quiebres ni deformaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina la necesidad de revisar el margen de costura durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite instalar botones sin utilizar ojales o sistemas de cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se utiliza solamente en dobladillos rectos de prendas inferiores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del control técnico requerido en costuras curvas para conservar la forma de sisas, escotes, tiros o piezas anatómicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 4,
          texto: '¿Cuál es un criterio técnico en la instalación de cierres?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seleccionar el cierre únicamente por su apariencia externa en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Omitir la revisión del recorrido para disminuir el tiempo de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar longitud, simetría, fijación y funcionamiento del cierre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ubicar el cierre después del empaque final del producto terminado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los criterios técnicos necesarios para instalar cierres con estabilidad, alineación y funcionalidad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 5,
          texto: '¿Qué propósito cumple el dobladillo en una prenda?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar todas las costuras internas que conforman el ensamble.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Finalizar bordes mediante dobleces controlados y costura estable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar la talla de la prenda durante la inspección final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la revisión del ancho del ruedo en producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del dobladillo como operación de terminación que protege bordes, aporta estabilidad y mejora la presentación del producto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función de la costura de seguridad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reforzar las uniones y proteger los bordes en zonas sometidas a tensión o uso frecuente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Marcar temporalmente las piezas antes de iniciar el proceso de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Decorar la superficie de la prenda mediante diseños bordados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir el planchado final en prendas formales o institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia identificación de la costura de seguridad como recurso técnico para reforzar uniones y proteger bordes textiles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 7,
          texto:
            '¿Qué operación permite recubrir bordes para reducir el deshilachado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pegado de botón en puntos de cierre frontal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presillado en zonas de esfuerzo localizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bordado básico en superficies textiles visibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fileteado aplicado sobre el contorno del material.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del fileteado como técnica de protección de bordes y terminación interna en prendas confeccionadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 8,
          texto:
            '¿En qué tipo de prendas se emplea principalmente el recubrimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prendas rígidas que no requieren elasticidad, flexibilidad ni movilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Productos sin costuras, sin dobladillos y sin terminaciones visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Camisetas, ropa deportiva, prendas interiores y tejidos de punto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Empaques textiles que no tienen contacto directo con el cuerpo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del recubrimiento como técnica aplicada en prendas que requieren elasticidad, cobertura y terminación flexible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 9,
          texto: '¿Qué función cumple el presillado dentro de una prenda?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reforzar zonas sometidas a tracción, fricción o uso repetido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cortar el material sobrante después del planchado final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir la ruta operacional cuando existe bajo rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular el tiempo total de producción por referencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del presillado como operación especializada de refuerzo en puntos críticos de tensión.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 10,
          texto: '¿Qué condición se revisa en el pegado de botón?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el botón modifique la silueta general de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que el botón se ubique sin relación con el ojal correspondiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el botón elimine la necesidad de cierre o broche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el botón quede firme, alineado con el ojal correspondiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del pegado de botón como operación que requiere firmeza, alineación y correspondencia con el sistema de cierre.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 11,
          texto: '¿Qué define técnicamente un ojal en confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una costura decorativa ubicada en zonas internas de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una abertura terminada que permite el paso del botón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una pieza de refuerzo aplicada sobre bolsillos laterales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una marca provisional usada para identificar la talla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del ojal como abertura técnica terminada que hace parte del sistema funcional de cierre de una prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 12,
          texto: '¿Qué aspecto resulta clave en el bordado básico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar cualquier preparación previa del diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar puntadas sin controlar densidad ni tensión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar ubicación, densidad, hilo, soporte y definición del motivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar las costuras estructurales del ensamble.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del bordado básico como operación que requiere preparación del diseño, control de puntada y estabilidad del material.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito de la ruta operacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar la secuencia de operaciones, los recursos técnicos y los puntos de control del proceso productivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir exclusivamente la imagen comercial de una marca de confección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar las operaciones de inspección durante el proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar consumidores según sus hábitos de compra y uso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la ruta operacional como instrumento técnico para ordenar operaciones, recursos, tiempos y controles en planta.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 14,
          texto: '¿Qué permite una secuencia de operaciones bien estructurada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alterar libremente el orden de ensamble sin afectar la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desarrollar el producto según una lógica constructiva organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la revisión de medidas en prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar el uso de maquinaria especializada en la planta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la secuencia de operaciones como orden técnico que guía la preparación, ensamble, refuerzo y terminación de la prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 15,
          texto: '¿Qué información aporta el tiempo básico en producción?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El estilo visual de la prenda dentro de una colección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de colores disponibles para una referencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de empaque comercial que recibirá el lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La duración estimada de una operación bajo condiciones definidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del tiempo básico como dato operativo para calcular capacidad, distribuir tareas y programar la producción.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 16,
          texto: '¿Qué describe el flujo de producción?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La narrativa publicitaria utilizada para presentar el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La preferencia estética del consumidor frente a una prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El recorrido de piezas, insumos y prendas entre operaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El costo final definido para la comercialización externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del flujo de producción como recorrido organizado de piezas, insumos y prendas dentro de la planta.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 17,
          texto:
            '¿Cuál puede indicar una interrupción en el flujo de producción?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acumulación de piezas entre puestos y esperas por insumos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Correspondencia entre operaciones, máquinas y tiempos definidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificación clara de piezas antes del proceso de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisión oportuna de puntos críticos durante la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia capacidad para identificar señales de interrupción en el flujo, como acumulación de piezas, esperas y falta de insumos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 18,
          texto: '¿Qué evalúa la simetría en una prenda confeccionada?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor comercial asignado a la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tipo de maquinaria disponible en la planta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tiempo usado por cada persona operaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La correspondencia entre partes relacionadas del producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la simetría como parámetro de calidad que compara ubicación, largos, anchos y alineación entre partes de la prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 19,
          texto:
            '¿Qué se verifica al revisar la limpieza y funcionalidad de una prenda?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la cantidad de unidades fabricadas en el lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ausencia de residuos y correcto desempeño de cierres, botones u otros componentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo la velocidad del flujo entre una operación y otra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente la información comercial del empaque final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la limpieza y funcionalidad como criterios de calidad relacionados con presentación y uso adecuado de la prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
        {
          id: 20,
          texto: '¿Qué implica el cumplimiento de especificaciones técnicas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aceptar variaciones sin compararlas con documentos de control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar solamente la apariencia externa de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comparar el producto con ficha técnica, muestra aprobada y estándares definidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Finalizar el proceso sin registrar no conformidades detectadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del cumplimiento de especificaciones técnicas como comparación objetiva entre producto, ficha técnica, muestra aprobada y estándares definidos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de costura y terminados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Se evidencia apropiación de los conceptos técnicos relacionados con procesos de costura, ruta operacional, terminados y parámetros de calidad en confección industrial.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos revisar nuevamente el componente formativo e intentar de nuevo la actividad didáctica.',
    },
  }),
}
</script>
