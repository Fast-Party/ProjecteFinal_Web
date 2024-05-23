export class PlanModel {
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

    'NombreAutor': string
    'RatingAutor': number
    'IsFollowing': number
    'LocalidadAutor': string
    'Seguidores': number

    'RutaImagenPlan': string
    'ImagenLogoAutor': string

}