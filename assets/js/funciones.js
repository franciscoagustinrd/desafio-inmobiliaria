const propiedadesVenta = [
	{
	src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
	titulo: 'Apartamento de lujo en zona exclusiva',
	descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
	ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
	habitaciones: '4',
	baños: '4',
	costo: 5000,
	smoke: false,
	pets: true
	},
	{
	src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
	titulo: 'Apartamento acogedor en la montaña',
	descripcion: ' Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
	ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
	habitaciones: 2,
	baños: 1,
	costo: 1200,
	smoke: true,
	pets: true
	},
	{
	src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
	titulo: 'Penthouse de lujo con terraza panorámica',
	descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
	ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
	habitaciones: 3,
	baños: 3,
	costo: 4500,
	smoke: false,
	pets: true
	},
	{
	src: 'assets/img/img-apto-01.jpg',
	titulo: 'Apartamento en edificio patrimonial',
	descripcion: 'Acogedor lugar de un dormitorio para una persona o pareja',
	ubicacion: 'Brighton 1123, Vieja California',
	habitaciones: 1,
	baños: 1,
	costo: 1500,
	smoke: true,
	pets: false
	},
	{
	src: 'assets/img/img-apto-04.jpg',
	titulo: 'Casa de campo',
	descripcion: 'En medio del bosque, casa con todo lo que necesitas para alejarte del ajetreo de la ciudad',
	ubicacion: 'Parcel 2 N 1123, CA 241212',
	habitaciones: 5,
	baños: 2,
	costo: 9500,
	smoke: true,
	pets: true
	}
	]

	const propiedadesAlquiler = [
		{
		src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
		titulo: 'Apartamento en el centro de la ciudad',
		descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
		ubicacion: '123 Main Street,Anytown, CA 91234',
		habitaciones: 2,
		baños: 2,
		costo: 2000,
		smoke: false,
		pets: true
		},
		{
		src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		titulo: 'Apartamento luminoso con vista al mar',
		descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
		ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
		habitaciones: 3,
		baños: 3,
		costo: 2500,
		smoke: true,
		pets: true
		},
		{
		src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
		titulo: 'Condominio moderno en zona residencial',
		descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
		ubicacion: '123 Main Street,Anytown, CA 91234',
		habitaciones: 2,
		baños: 2,
		costo: 2200,
		smoke: false,
		pets: false
		},
		{
		src: 'assets/img/img-apto-02.jpg',
		titulo: 'Inspirador espacio monoambiente',
		descripcion: 'Especial para teletrabajo en pleno centro artístico de la capital',
		ubicacion: 'Street Joya 2342, Baja California',
		habitaciones: 1,
		baños: 1,
		costo: 2000,
		smoke: true,
		pets: false
		},
		{
		src: 'assets/img/img-apto-03.jpg',
		titulo: 'Espectacular casa en la bahía',
		descripcion: 'Vive la experiencia de vivir en la bahía de California con muelle, incluye motonave',
		ubicacion: 'Casa Bahía Street, Bahia town, CA 23234',
		habitaciones: 3,
		baños: 2,
		costo: 7000,
		smoke: true,
		pets: true
		}
		]
	
	function sectionPropiedades(propiedades, contenedorId, max) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ''; 

    for (let i = 0; i < propiedades.length && i < max; i++) {
        const propiedad = propiedades[i];

        const propiedadGaleria = `          
						<div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.titulo}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                        ${propiedad.smoke ? 
                            '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : 
                            '<p class="text-danger"><i class="fas fa-smoking-ban text-danger"></i> No se permite fumar</p>'}
                        ${propiedad.pets ? 
                            '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
                        : 
                            '<p class="text-danger"><i class="fa-solid fa-ban text-danger"></i> No se permiten mascotas</p>'}
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += propiedadGaleria;
    }
}

sectionPropiedades(propiedadesVenta, "ventaSection", 3);
sectionPropiedades(propiedadesAlquiler, "alquilerSection", 3);
