export class ProfileModel {
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
}

export class ProfileIdUsuario {
    'IdUsuario': number;
}