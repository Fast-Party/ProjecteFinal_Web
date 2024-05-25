export class AutorPlanModel {
    'IdUsuario': number
    'NombreUsuario': string
    'Nombre': string
    'Email': string
    'Telefono': string
    'Descripcion'?: string
    'FechaNacimiento'?: Date
    'Localidad'?: string
    'Tipo': string
    'Imagen'?: string
    'CuentaPrivada'?: boolean
    'Verificado'?: boolean
    'Seguidores'?: number
    'Valoracion'?: number
    'Direccion'?: string
    'PlanesCreados'?: number
    'ImagenesLocal'?: any
}

export class AutorPlanCardModel {
    'IdUsuario': number
    'NombreUsuario': string
    'LocalidadAutor': string
    'Seguidores': number
    'RatingAutor': number
    'IsFollowing': number
}