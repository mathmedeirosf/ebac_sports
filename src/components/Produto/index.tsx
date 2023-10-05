import { useDispatch } from 'react-redux'

import { Produto } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispath = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Plataformas>
        {produto.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispath(favoritar(produto))} type="button">
        Adicionar aos favoritos
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispath(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
