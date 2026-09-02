import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | KALLISTA CAFÉ",
  description: "Aviso de privacidad integral de KALLISTA CAFÉ conforme a la legislación mexicana.",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacyNotice() {
  return (
    <main className="legal-page" lang="es">
      <header className="legal-header shell">
        <Link href="/" className="legal-logo" aria-label="Volver a KALLISTA CAFÉ">
          <Image src="/kallista-logo.png" alt="KALLISTA CAFÉ" width={290} height={320} priority />
        </Link>
        <Link href="/" className="legal-back">← VOLVER AL SITIO</Link>
      </header>

      <article className="legal-document shell">
        <div className="legal-intro">
          <p className="kicker">INFORMACIÓN Y TRANSPARENCIA</p>
          <h1>AVISO DE<br /><i>PRIVACIDAD.</i></h1>
          <p>Última actualización: 2 de septiembre de 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Identidad y domicilio del responsable</h2>
            <p><strong>FERNANDO CHAVEZ OTAÑEZ</strong>, persona física que opera bajo el nombre comercial <strong>KALLISTA CAFÉ</strong>, con domicilio en Calle Londres 161, Local 45, colonia Juárez, alcaldía Cuauhtémoc, código postal 06600, Ciudad de México, es responsable del tratamiento y protección de los datos personales que, en su caso, recabe de las personas usuarias, visitantes y clientes.</p>
            <p>El establecimiento KALLISTA CAFÉ se ubica en Mar Negro 204, colonia Popotla, alcaldía Miguel Hidalgo, Ciudad de México. Esta dirección comercial es distinta del domicilio del responsable indicado anteriormente.</p>
            <p>Este aviso se emite conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás disposiciones mexicanas aplicables.</p>
          </section>

          <section>
            <h2>2. Datos personales que podemos tratar</h2>
            <p>El sitio no solicita crear cuentas ni procesa pagos. Podemos recibir datos mediante el formulario de contacto, el asistente de atención, redes sociales, de forma presencial o al participar en futuras actividades.</p>
            <ul>
              <li>Datos de identificación y contacto, como nombre, teléfono, correo electrónico o usuario de red social.</li>
              <li>Información relacionada con consultas, reservaciones, eventos, solicitudes o comentarios.</li>
              <li>Datos técnicos de navegación, como dirección IP, tipo de navegador, dispositivo, fecha, hora y páginas consultadas.</li>
            </ul>
            <p>No solicitamos intencionalmente datos personales sensibles a través de este sitio.</p>
          </section>

          <section>
            <h2>3. Finalidades del tratamiento</h2>
            <p>Los datos podrán tratarse para responder consultas; brindar atención; gestionar reservaciones o registros a eventos cuando se habiliten; dar seguimiento a solicitudes; operar y proteger el sitio; prevenir usos indebidos; y cumplir obligaciones legales.</p>
            <p>Solo con el consentimiento correspondiente, los datos de contacto podrán utilizarse para comunicar novedades, actividades o promociones de KALLISTA CAFÉ. La persona titular podrá solicitar en cualquier momento que cese esta finalidad secundaria.</p>
          </section>

          <section>
            <h2>4. Cookies y tecnologías similares</h2>
            <p>El sitio puede utilizar cookies estrictamente necesarias o tecnologías técnicas similares para su funcionamiento, seguridad, entrega de contenido y conservación de preferencias básicas. El proveedor de alojamiento puede generar registros técnicos indispensables para prestar y proteger el servicio.</p>
            <p>A la fecha de este aviso no utilizamos cookies publicitarias ni elaboramos perfiles de comportamiento con fines comerciales. Si en el futuro se incorporan herramientas de analítica, publicidad o cookies no esenciales, este aviso y los mecanismos de consentimiento serán actualizados antes de su uso.</p>
            <p>Las cookies pueden eliminarse o bloquearse desde la configuración del navegador. El bloqueo de cookies estrictamente necesarias podría afectar algunas funciones del sitio.</p>
          </section>

          <section>
            <h2>5. Transferencias y encargados</h2>
            <p>KALLISTA CAFÉ no vende datos personales. La información podrá ser tratada por proveedores que presten servicios de alojamiento, infraestructura tecnológica o soporte, únicamente bajo instrucciones de KALLISTA CAFÉ y con obligaciones de confidencialidad y seguridad. También podrá comunicarse a autoridades competentes cuando exista una obligación legal o un requerimiento debidamente fundado.</p>
            <p>No se realizarán transferencias adicionales que requieran consentimiento sin informarlo previamente y, cuando corresponda, obtener dicho consentimiento.</p>
          </section>

          <section>
            <h2>6. Conservación y seguridad</h2>
            <p>Los datos se conservarán únicamente durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales aplicables. KALLISTA CAFÉ mantendrá medidas administrativas, técnicas y físicas razonables para prevenir daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.</p>
          </section>

          <section>
            <h2>7. Derechos ARCO y revocación del consentimiento</h2>
            <p>La persona titular puede solicitar acceso, rectificación, cancelación u oposición al tratamiento de sus datos, así como revocar su consentimiento o limitar el uso y divulgación de su información.</p>
            <p>La solicitud deberá presentarse por escrito en Calle Londres 161, Local 45, colonia Juárez, alcaldía Cuauhtémoc, código postal 06600, Ciudad de México, dirigida a <strong>FERNANDO CHAVEZ OTAÑEZ — Responsable de Datos Personales de KALLISTA CAFÉ</strong>, e incluir:</p>
            <ul>
              <li>Nombre y un medio para recibir notificaciones.</li>
              <li>Documento que acredite identidad y, en su caso, representación.</li>
              <li>Descripción clara de los datos y del derecho que desea ejercer.</li>
              <li>Cualquier elemento que facilite localizar la información.</li>
            </ul>
            <p>La determinación será comunicada en un plazo máximo de veinte días hábiles desde la recepción. Si resulta procedente, se hará efectiva dentro de los quince días hábiles siguientes, con las ampliaciones permitidas por la ley. El ejercicio de los derechos ARCO es gratuito, salvo costos justificados de reproducción o envío.</p>
          </section>

          <section>
            <h2>8. Personas menores de edad</h2>
            <p>El sitio no está diseñado para recabar intencionalmente datos de personas menores de edad. Si una madre, padre o tutor considera que se proporcionaron datos sin autorización, podrá solicitar su cancelación mediante el procedimiento anterior.</p>
          </section>

          <section>
            <h2>9. Cambios al aviso</h2>
            <p>Las modificaciones a este aviso se publicarán en esta misma página, indicando la fecha de actualización. Cuando un cambio requiera consentimiento, se solicitará conforme a la legislación aplicable.</p>
          </section>

          <section>
            <h2>10. Autoridad competente</h2>
            <p>Si una persona considera vulnerado su derecho a la protección de datos personales, puede acudir ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, autoridad competente conforme a la legislación vigente.</p>
            <a className="legal-source" href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" target="_blank" rel="noreferrer">CONSULTAR LA LEY VIGENTE ↗</a>
          </section>
        </div>
      </article>
    </main>
  );
}
