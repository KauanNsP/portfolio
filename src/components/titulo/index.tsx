import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  // eslint-disable-next-line prettier/prettier
  fontSize: number
}

const Titulo = (props: Props) => <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>

export default Titulo
