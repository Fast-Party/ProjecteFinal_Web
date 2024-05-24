export class PlanCardModel {
    'IdPlan': number
    'IdAutor': number
    'Titulo': string
    'Fecha': Date
    'ZonaHoraria'?: number
    'Duracion'?: number
    'Localizacion': string
    'AforoMaximo'?: number
    'EdadMinima'?: number
    'EdadMaxima'?: number
    'Descripcion'?: string
    'PlanProvado'?: boolean
    'DePago'?: boolean
    'Precio'?: number
    'Valoracion'?: number
    'FechaPublicacion': Date

    'IdUsuario': number
    'NombreAutor': string
    'LocalidadAutor': string
    'Seguidores': number
    'RatingAutor': number
    'IsFollowing': number
    'Verificado0': boolean

    'RutaImagenPlan': string
    'ImagenLogoAutor': string

}

export class PlanScreenModel {
    'IdPlan': number
    'IdAutor': number
    'Titulo': string
    'Fecha': Date
    'ZonaHoraria'?: number
    'Duracion'?: number
    'Localizacion': string
    'AforoMaximo'?: number
    'EdadMinima'?: number
    'EdadMaxima'?: number
    'Descripcion'?: string
    'PlanPrivado'?: boolean
    'DePago'?: boolean
    'Precio'?: number
    'Valoracion'?: number
    'FechaPublicacion': Date
    'Imagenes': any

    'IdUsuario': number
    'NombreAutor': string
    'LocalidadAutor': string
    'Seguidores': number
    'RatingAutor': number
    'IsFollowing': number
    'Verificado0': boolean

    'RutaImagenPlan': string
    'ImagenLogoAutor': string

    'IdEstado'?: number

}