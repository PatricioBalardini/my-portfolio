export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frarmeBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.071106543213!2d-4.364909762782002!3d36.7208534643267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7258371129d907%3A0xd88c883c1d0c23a1!2sAv.%20Salvador%20Allende%2C%207%2C%20M%C3%A1laga-Este%2C%2029017%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1709481611879!5m2!1ses!2ses"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Av. Salvador Allende, 7, Málaga-Este, 29017 Málaga
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                patriciobalardini@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NUMERO DE TELÉFONO
              </h2>
              <p className="leading-realaxed">+34 624 43 7008</p>
            </div>
          </div>
        </div>
        <form netlify></form>
      </div>
    </section>
  );
}
